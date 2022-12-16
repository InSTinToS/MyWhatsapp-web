import OriginalImage, { ImageProps } from 'next/image'

export default function Image({ ...props }: ImageProps) {
  return <OriginalImage width={0} height={0} {...props} />
}
