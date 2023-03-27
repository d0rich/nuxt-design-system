/**
 * Representation of point coordinates.
 */
export type Coords = {
  x: number
  y: number
}

/**
 *  Representation of line edge, where right and left points
 *  are on the opposite sides of the same corner.
 */
export type LineEdge = {
  right: Coords
  left: Coords
}

/**
 *
 * Generate sets of keyframes for each point on line polygon
 *
 * @param line
 * @returns Sets of keyframes for each polygon point
 */
export function generatePolygonLineKeyframes(line: LineEdge[]): Coords[][] {
  return line.map((_, index, edges) => {
    const leftPoints = edges.reduce((points, edge, currentIndex) => {
      if (currentIndex > index) {
        points.push(points.at(-1) as Coords)
      } else {
        points.push(edge.left)
      }
      return points
    }, [] as Coords[])
    const rightPoints = edges.reduce((points, edge, currentIndex) => {
      if (currentIndex > index) {
        points.push(points.at(-1) as Coords)
      } else {
        points.push(edge.right)
      }
      return points
    }, [] as Coords[])
    return [...rightPoints, ...leftPoints.reverse()]
  })
}

/**
 *
 * Generate 1 set of keyframes for the whole line polygon.
 *
 * @param line
 * @returns Set of keyframes for the whole line polygon
 */
export function generatePolygonPointsKeyframes(line: LineEdge[]): Coords[][] {
  const lineKfs = generatePolygonLineKeyframes(line)
  const keyframesCount = lineKfs.length
  const pointsCount = lineKfs[0].length
  const result: Coords[][] = []
  for (let i = 0; i < pointsCount; i++) {
    const pointKfs: Coords[] = []
    for (let k = 0; k < keyframesCount; k++) {
      pointKfs.push(lineKfs[k][i])
    }
    result.push(pointKfs)
  }
  return result
}

/**
 *
 * Apply animation to each point of line.
 *
 * @param line Declarative line description
 * @param svgContainer <svg> element which line all figures
 * @param svgPolygon <polygon> element in svg image which will be animated line
 * @param animationCallback apply keyframes to specific points inside callback
 */
export function applyLinePerPointAnimation(
  line: LineEdge[],
  svgContainer: SVGSVGElement,
  svgPolygon: SVGPolygonElement,
  animationCallback: (point: DOMPoint, keyframes: Coords[]) => void
) {
  const allPointsKeyframes = generatePolygonPointsKeyframes(line)
  for (const pointKeyframes of allPointsKeyframes) {
    const point = svgContainer.createSVGPoint()
    svgPolygon.points.appendItem(point)
    animationCallback(point, pointKeyframes)
  }
}

/**
 *
 * Apply last state to polygon.
 *
 * @param line Declarative line description
 * @param svgContainer <svg> element which line all figures
 * @param svgPolygon <polygon> element in svg image which will be line
 */
export function applyStaticPoints(
  line: LineEdge[],
  svgContainer: SVGSVGElement,
  svgPolygon: SVGPolygonElement
) {
  const finalLineState = generatePolygonLineKeyframes(line).at(-1)
  if (!finalLineState) return
  for (const pointCoords of finalLineState) {
    const point = svgContainer.createSVGPoint()
    point.x = pointCoords.x
    point.y = pointCoords.y
    svgPolygon.points.appendItem(point)
  }
}

export function createCoordsFromArray(coordsAsArray: number[]): Coords {
  if (coordsAsArray.length !== 2)
    throw new Error(
      'Array should contain 2 numbers in order to be translated into coords'
    )
  return {
    x: coordsAsArray[0],
    y: coordsAsArray[1]
  }
}

export function createLineEdgeFromArray(edgeAsArray: number[][]): LineEdge {
  if (edgeAsArray.length !== 2)
    throw new Error(
      'Array should contain 2 elements in order to be translated into LineEdge'
    )
  return {
    left: createCoordsFromArray(edgeAsArray[0]),
    right: createCoordsFromArray(edgeAsArray[1])
  }
}

export function createLineFromArray(lineAsArray: number[][][]): LineEdge[] {
  return lineAsArray.map(createLineEdgeFromArray)
}
