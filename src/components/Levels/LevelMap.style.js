import styled from 'styled-components'

import { ReactComponent as NewYorkLevel1 } from 'assets/svg/maps/bk/level-1.svg'
import { ReactComponent as NewYorkLevel2 } from 'assets/svg/maps/bk/level-2.svg'

const baseMapStyles = `
  .map__background {
    fill: var(--color-map-background);
  }

  .map__area {
    fill: var(--color-btn-bg);
  }

  .map__location {
    fill: var(--color-light-gray);
  }

  .map__space {
    cursor: pointer;
    fill: var(--color-magenta);
    pointer-events: visibleFill;

    &:hover {
      opacity: 0.5;
    }
  }

  .map__space--selected {
    opacity: 0.5;
  }
`

export const StyledNewYorkLevel1 = styled(NewYorkLevel1)`
  ${baseMapStyles}
`

export const StyledNewYorkLevel2 = styled(NewYorkLevel2)`
  ${baseMapStyles}
`
