import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

export interface INextError {
  reset: () => void
  error: () => void
}

export type TNextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout
}
