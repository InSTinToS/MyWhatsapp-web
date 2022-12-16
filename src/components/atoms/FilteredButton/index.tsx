import { TButtonProps } from '@src/types/react.types'

export default function FilteredButton({
  className,
  children,
  ...props
}: TButtonProps) {
  return (
    <button
      type='button'
      className={`text-sm border-2 rounded-md px-2 py-1 mr-2 m-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
