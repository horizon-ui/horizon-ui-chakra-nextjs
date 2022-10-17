import { Box, ChakraComponent } from "@chakra-ui/react";
import * as React from "react";
import NextImage from "next/image";
import { ComponentProps } from "react";

interface ImageProps extends ComponentProps<ChakraComponent<"div", {}>> {}

export function parseAssetPrefix(image: string) {
  const alreadyHasHttp = image.match("http");
  if (alreadyHasHttp) return image;

  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const alreadyHasPrefix = image.match(prefix);

  const finalUrl = alreadyHasPrefix ? image : `${prefix}${image}`;
  return finalUrl;
}

export const Image = (props: ImageProps) => {
  const { src, alt, ...rest } = props;

  const imageUrl = typeof src === "string" ? src : src?.src;
  return (
    <Box overflow={"hidden"} position="relative" {...rest}>
      <NextImage
        objectFit="cover"
        layout="fill"
        src={parseAssetPrefix(imageUrl)}
        alt={alt}
      />
    </Box>
  );
};
