export function getAbsoluteBoundingsGetters(
  el: Ref<Element | null>,
  correlations: { x?: () => number; y?: () => number } = {}
) {
  return {
    top: () =>
      (el.value?.getBoundingClientRect().top ?? 0) +
      window.scrollY +
      (correlations.y ? correlations.y() : 0),
    bottom: () =>
      (el.value?.getBoundingClientRect().bottom ?? 0) +
      window.scrollY +
      (correlations.y ? correlations.y() : 0),
    right: () =>
      (el.value?.getBoundingClientRect().right ?? 0) +
      window.scrollX +
      (correlations.x ? correlations.x() : 0),
    left: () =>
      (el.value?.getBoundingClientRect().left ?? 0) +
      window.scrollX +
      (correlations.x ? correlations.x() : 0)
  }
}

export function getAbsoluteBoundings(el: Ref<Element | null>) {
  const getters = getAbsoluteBoundingsGetters(el)
  return {
    top: getters.top(),
    bottom: getters.bottom(),
    right: getters.right(),
    left: getters.left()
  }
}
