import Image, { type ImageProps, type StaticImageData } from "next/image";
import { cx } from "@/lib/cx";

type ThemedImageProps = Omit<ImageProps, "src"> & {
  /** Shown in dark mode. */
  dark: StaticImageData;
  /** Shown in light mode. */
  light: StaticImageData;
};

/**
 * Two real <img> tags, one per palette. Global CSS (`.jk-dk` / `.jk-lt` in theme.css)
 * shows the right one, so the swap needs no JavaScript and never flashes.
 */
export function ThemedImage({ dark, light, className, alt, ...rest }: ThemedImageProps) {
  return (
    <>
      <Image className={cx(className, "jk-dk")} src={dark} alt={alt} {...rest} />
      <Image className={cx(className, "jk-lt")} src={light} alt={alt} {...rest} />
    </>
  );
}
