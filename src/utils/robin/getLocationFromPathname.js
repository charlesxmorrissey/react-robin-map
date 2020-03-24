import { LOCATIONS } from 'constants/index'
import getLocationCodeFromPathname from './getLocationCodeFromPathname'

export default (pathname = '') => {
  return LOCATIONS[getLocationCodeFromPathname(pathname)]
}
