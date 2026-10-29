import localFont from "next/font/local";

/**
 * Both families are bundled as woff2 files (latin subset) so the site never
 * calls out to Google Fonts. Each font exposes a CSS variable that tokens.css
 * picks up as --jk-sans / --jk-serif / --jk-script.
 */
export const baskerville = localFont({
  variable: "--font-baskerville",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/libre-baskerville-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/libre-baskerville-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/libre-baskerville-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/libre-baskerville-latin-700-italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const pinyon = localFont({
  variable: "--font-pinyon",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/pinyon-script-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
