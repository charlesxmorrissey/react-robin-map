import React from 'react'
import classNames from 'classnames'

import { ReactComponent as ArrowIcon } from 'assets/svg/icons/arrow.svg'
import { ReactComponent as SearchIcon } from 'assets/svg/icons/search.svg'
import { ReactComponent as StackIcon } from 'assets/svg/icons/stack.svg'
import Button from 'components/Button'

import styles from './Nav.module.scss'

const handleSearchToggle = (e) => console.log('handleSearchToggle::', e)

const Nav = () => {
  return (
    <>
      <Button
        appearance={styles.searchOpenBtn}
        label="Show Search"
        handleClick={handleSearchToggle}>
        <SearchIcon className={classNames(styles.navigationIcon)} />
      </Button>

      <nav className={classNames(styles.navigation, styles.navigationHidden)}>
        <Button appearance={styles.navigationUpBtn} label="Go up">
          <ArrowIcon className={classNames(styles.navigationIcon)} />
        </Button>

        <Button
          appearance={styles.navigationStackBtn}
          label="Back to all levels">
          <StackIcon className={classNames(styles.navigationIcon)} />
        </Button>

        <Button appearance={styles.navigationDownBtn} label="Go down">
          <ArrowIcon
            className={classNames(
              styles.navigationIcon,
              styles.navigationDownIcon
            )}
          />
        </Button>
      </nav>
    </>
  )
}

export default Nav
