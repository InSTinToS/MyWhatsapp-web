import Loupe from '@src/components/icons/Loupe'

import { TFormProps } from '@src/types/react.types'

export default function Search({ className, ...props }: TFormProps) {
  return (
    <form
      className={`relative w-full flex items-center justify-center ${className}`}
      {...props}
    >
      <Loupe className='absolute h-6 w-6 left-2' />

      <input
        type='text'
        placeholder='Buscar'
        className='flex w-full pl-9 pr-3 h-10 items-center border-2 bg-gray-200 rounded-3xl'
      />
    </form>
  )
}
