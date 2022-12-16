'use client'

import { useEffect } from 'react'
import { INextError } from 'src/types/next.types'

export default function Error({ error, reset }: INextError) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <p>Something went wrong!</p>

      <button type='button' onClick={() => reset()}>
        Reset
      </button>
    </div>
  )
}
