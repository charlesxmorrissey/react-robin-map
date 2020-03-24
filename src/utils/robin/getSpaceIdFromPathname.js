export default (pathname = '') => {
  return parseInt(pathname.replace(/^\/|\/$/g, '').split('/')[1])
}
