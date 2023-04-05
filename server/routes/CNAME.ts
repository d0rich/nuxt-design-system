export default defineEventHandler((event) => {
  setResponseHeader(event, 'Content-Type', 'text/plain')
  return 'design.d0rich.me'
})
