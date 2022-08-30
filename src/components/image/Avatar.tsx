import { chakra, useColorMode } from '@chakra-ui/system'
import { ComponentProps } from 'react'
import { Image } from './Image'

interface AvatarImageProps extends ComponentProps<typeof Image> {}

export function NextAvatar ({ src, alt, style, ...props }: AvatarImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      src={src}
      style={{ ...style, borderRadius: '50%' }}
    />
  )
}

export const ChakraNextAvatar = chakra(NextAvatar, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

interface AvatarWithBorderProps extends AvatarImageProps {}

export function AvatarWithBorder ({ style, ...props }: AvatarWithBorderProps) {
  const { colorMode } = useColorMode()

  return (
    <NextAvatar
      border={'2px'}
      borderColor={colorMode === 'dark' ? 'navy.700' : 'white'}
      style={style}
      {...props}
    />
  )
}
