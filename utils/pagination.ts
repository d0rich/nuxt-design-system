export function getLinkToPaginatedPage(baseLink: string, page: number) {
  if (page === 1) return baseLink
  return `${baseLink}/${page}`
}
