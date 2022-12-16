import OriginalLink, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

export interface ILinkProps extends PropsWithChildren, LinkProps {}

export default function Link({ children, ...props }: ILinkProps) {
  return <OriginalLink {...props}>{children}</OriginalLink>
}
