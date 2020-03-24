export default (pathname = '') => {
  const officeName = pathname
    .replace(/^\/|\/$/g, '')
    .split('/')
    .shift()
    .toLowerCase()

  return officeName
}
