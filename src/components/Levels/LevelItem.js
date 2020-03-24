import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

import { selectCurrentLevel } from 'store/selectors'
import {
  getLocationCodeFromPathname,
  getSpaceIdFromPathname,
} from 'utils/robin'

import styles from './Levels.module.scss'

const LevelItem = ({ id, svgAsset }) => {
  const location = useLocation()
  const history = useHistory()
  const currentLevel = useSelector(selectCurrentLevel())
  const locationName = getLocationCodeFromPathname(location.pathname)
  const spaceId = getSpaceIdFromPathname(location.pathname)
  const MapSvg = svgAsset[id].map
  const svgRef = useRef()

  if (svgRef.current) {
    const svgNode = svgRef.current
    const mapSpaces = svgNode.querySelectorAll('.map__space')
    const currentMapSpace = svgNode.getElementById(spaceId)

    // Remove classes from all selected spaces.
    mapSpaces.forEach((el) => el.classList.remove('map__space--selected'))

    // Display selected space on page load.
    if (currentMapSpace) {
      currentMapSpace.classList.add('map__space--selected')
    }
  }

  const handleSpaceClick = (e) => {
    const selectedSpace = e.target.id

    history.push(`/${locationName}/${selectedSpace}`)
  }

  return (
    <CSSTransition
      classNames={{ ...styles }}
      in={currentLevel ? currentLevel.level_number === id : false}
      timeout={300}
      unmountOnExit>
      <div aria-label={`level-${id + 1}`} className={styles.levelItem}>
        <MapSvg ref={svgRef} onClick={handleSpaceClick} />
      </div>
    </CSSTransition>
  )
}

LevelItem.propTypes = {
  id: PropTypes.number.isRequired,
  svgAsset: PropTypes.array.isRequired,
}

export default LevelItem
