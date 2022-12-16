import withRotate from '@src/hocs/withRotate'

import { TButtonProps } from '@src/types/react.types'
import { TSVGProps } from '@src/types/react.types'

import { ComponentType } from 'react'

interface IArrowButtonProps extends TButtonProps {
  arrowProps?: TSVGProps
  Arrow: ComponentType<any>
  direction: 'left' | 'right' | 'top' | 'bottom'
}

export default function ArrowButton({
  Arrow,
  direction,
  arrowProps,
  className,
  ...props
}: IArrowButtonProps) {
  const ArrowWithDirection = withRotate(Arrow, { direction })

  return (
    <button
      type='button'
      className={`disabled:opacity-40 ${className}`}
      {...props}
    >
      <ArrowWithDirection {...arrowProps} />
    </button>
  )
}
