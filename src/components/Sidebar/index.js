import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useScrollData } from 'scroll-data-hook'
import useFuse from 'react-use-fuse'
import classNames from 'classnames'

import { selectCurrentSpaces, selectCurrentSpace } from 'store/selectors'
import { getLocationCodeFromPathname } from 'utils/robin'

import styles from './Sidebar.module.scss'

const Sidebar = ({ showSidebar }) => {
  const location = useLocation()
  const history = useHistory()

  const spaces = useSelector(selectCurrentSpaces())
  const space = useSelector(selectCurrentSpace())
  const locationName = getLocationCodeFromPathname(location.pathname)

  const listRef = useRef()
  const inputRef = useRef()
  const [hideNav, setHideNav] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const { direction, position } = useScrollData()

  useEffect(() => {
    let scrollProgress = 0
    let scrollTop = 0

    if (space && !isInputFocused) {
      return
    }

    if (listRef) {
      const { innerHeight: scrollMax } = window
      const scrollHeight = listRef.current.getBoundingClientRect().height

      scrollTop = listRef.current.getBoundingClientRect().top
      scrollProgress = scrollMax / (scrollTop + scrollHeight)
    }

    switch (direction.y) {
      case 'up':
        if (scrollProgress < 1) setHideNav(false)
        break

      case 'down':
        if (scrollTop < -20) setHideNav(true)
        break

      default:
    }

    if (position.y < 1) {
      setHideNav(false)
    }
  }, [direction, position, listRef, space, isInputFocused])

  const options = {
    keys: ['description', 'name'],
  }

  const { result, search, term, reset } = useFuse({
    data: spaces,
    options,
  })

  const inputValue = (space && !isInputFocused ? space.description : term) || ''

  return (
    <aside
      className={classNames(styles.sidebar, {
        [styles.showSidebar]: showSidebar,
      })}>
      <div
        className={classNames(styles.sidebarSearch, {
          [styles.hideSearch]: hideNav,
        })}>
        <input
          ref={inputRef}
          className={styles.sidebarSearchInput}
          spellCheck="false"
          placeholder="Search Rooms."
          onChange={(e) => search(e.target.value)}
          onFocus={() => {
            reset()
            setIsInputFocused(true)
          }}
          onBlur={() => {
            setIsInputFocused(false)
            setHideNav(false)
            window.scrollTo(0, 0)
          }}
          value={inputValue}
          required
        />
      </div>

      <ul
        ref={listRef}
        className={classNames(styles.sidebarSpacesList, {
          [styles.hideList]: space && space.description && !isInputFocused,
        })}>
        {result.map((space) => {
          return (
            <li className={styles.sidebarSpacesListItem} key={space.id}>
              <NavLink
                activeClassName={styles.sidebarSpacesLinkActive}
                className={styles.sidebarSpacesLink}
                onClick={(e) => e.preventDefault()}
                onMouseDown={(e) => {
                  setHideNav(false)
                  window.scrollTo(0, 0)
                  history.push(`/${locationName}/${space.id}`)
                }}
                to={`/${locationName}/${space.id}`}>
                {(space.description && space.description) || space.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

Sidebar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
}

export default Sidebar
