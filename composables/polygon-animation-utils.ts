export const usePolygonAnimationUtils = () => ({
  generatePolygonLineKeyframes,
  generatePolygonPointsKeyframes
})

type Coords = {
  x: number
  y: number
}

type LineEdge = {
  right: Coords
  left: Coords
}
function generatePolygonLineKeyframes(line: LineEdge[]): Coords[][] {
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

function generatePolygonPointsKeyframes(line: LineEdge[]): Coords[][] {
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
