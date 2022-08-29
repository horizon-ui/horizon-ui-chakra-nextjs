import { Box } from '@chakra-ui/react'
import * as React from 'react'
import NextImage from 'next/image'

export const Image = props => {
  const { src, alt, ...rest } = props
  return (
    <Box position='relative' {...rest}>
      <NextImage objectFit='cover' layout='fill' src={src} alt={alt} />
    </Box>
  )
}
