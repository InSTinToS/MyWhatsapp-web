import { TButtonProps } from '@src/types/react.types'

export default function Button({ children, ...props }: TButtonProps) {
  return (
    <button type='button' {...props}>
      {children}
    </button>
  )
}
