import { TDirection } from '@src/types/utility.types'

import React, { ComponentType } from 'react'

interface IWithDirectionParams {
  displayName?: string
  direction: TDirection
  initialDirection?: TDirection
}

export default function withRotate(
  OldComponent: ComponentType<any>,
  {
    direction,
    initialDirection = 'left',
    displayName = 'withRotateComponent'
  }: IWithDirectionParams
) {
  const NewComponent = ({ ...props }) => {
    let directions

    switch (initialDirection) {
      case 'bottom': {
        directions = {
          left: '-90deg',
          top: '180deg',
          right: '90deg',
          bottom: '0deg'
        }

        break
      }

      case 'top': {
        directions = {
          left: '-90deg',
          top: '0deg',
          right: '90deg',
          bottom: '180deg'
        }

        break
      }

      case 'right': {
        directions = {
          left: '180deg',
          top: '90deg',
          right: '0deg',
          bottom: '-90deg'
        }

        break
      }

      default: {
        directions = {
          left: '0deg',
          top: '90deg',
          right: '180deg',
          bottom: '-90deg'
        }

        break
      }
    }

    return <OldComponent style={{ rotate: directions[direction] }} {...props} />
  }

  NewComponent.displayName = displayName

  return NewComponent
}
