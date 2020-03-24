import {
  StyledNewYorkLevel1,
  StyledNewYorkLevel2,
} from 'components/Levels/LevelMap.style'

/**
 * Vanity locations used for url routing and are displayed in the address bar.
 */
export const LOCATION_BK = 'bk'
export const LOCATION_DC = 'dc'
export const LOCATION_OAK = 'oak'
export const LOCATION_SGP = 'sgp'
export const LOCATION_LDN = 'ldn'
export const LOCATION_TO = 'to'
export const LOCATION_DEFAULT = LOCATION_BK

/**
 * Hard-coded association to Robin's location.name property
 * must match or re-route to default.
 */
export const LOCATIONS = {
  [LOCATION_BK]: 'New York',
  [LOCATION_DC]: 'Washington DC',
  [LOCATION_OAK]: 'Oakland',
  [LOCATION_SGP]: 'Singapore',
  [LOCATION_LDN]: 'London',
  [LOCATION_TO]: 'Toronto',
}

/**
 * Determines what SVG assets to load based on the current location.
 */
export const MAP_ASSETS = {
  [LOCATIONS[LOCATION_BK]]: {
    street: null,
    levels: [
      {
        map: StyledNewYorkLevel1,
      },
      {
        map: StyledNewYorkLevel2,
      },
    ],
  },
  [LOCATIONS[LOCATION_DC]]: {},
  [LOCATIONS[LOCATION_OAK]]: {},
  [LOCATIONS[LOCATION_SGP]]: {},
  [LOCATIONS[LOCATION_LDN]]: {},
  [LOCATIONS[LOCATION_TO]]: {},
}
