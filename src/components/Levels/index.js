import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { selectCurrentLevels } from 'store/selectors'
import { MAP_ASSETS } from 'constants/index'

import LevelItem from './LevelItem'

import styles from './Levels.module.scss'

const Levels = ({ locationKey }) => {
  const levels = useSelector(selectCurrentLevels())

  const locationAssets = MAP_ASSETS[locationKey]
  const LocationMap = locationAssets.levels
  const StreetMap = locationAssets.street

  return (
    <>
      {StreetMap && (
        <div className={styles.streetLevel}>
          <StreetMap className={styles.streetLevelMap} />
        </div>
      )}

      {LocationMap && (
        <div className={styles.levels}>
          {levels.map((level, index) => (
            <LevelItem
              id={index}
              key={`level_${index}`}
              svgAsset={LocationMap}
            />
          ))}
        </div>
      )}
    </>
  )
}

Levels.propTypes = {
  locationKey: PropTypes.string.isRequired,
}

export default Levels
