export const usePolygonAnimationUtils = () => ({
  generatePolygonLineKeyframes,
  generatePolygonPointsKeyframes,
  applyLinePerPointAnimation,
  applyStaticPoints,
  createCoordsFromArray,
  createLineEdgeFromArray,
  createLineFromArray
})

export const useElementsUtils = () => ({
  getAbsoluteBoundingsGetters,
  getAbsoluteBoundings
})

export const useDPaginationUtils = () => ({
  getLinkToPaginatedPage
})
