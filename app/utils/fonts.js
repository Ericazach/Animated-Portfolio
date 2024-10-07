import { Roboto } from 'next/font/google'
import localFont from "next/font/local";

const msMadi_init = localFont({
  src: "../fonts/MsMadi-Regular.ttf",
  variable: "--font-msMadi",
  weight: "100 900",
});


const raleway_init = localFont({
  src: "../fonts/Raleway-Black.ttf",
  variable: '--font-raleway',
})

const ralewayLight_init = localFont({
  src: "../fonts/Raleway-Light.ttf",
  variable: '--font-ralewayLight',
})

const inter_init = localFont({
  src: "../fonts/Inter_18pt-ExtraLight.ttf",
  variable: '--font-inter',
})
const nova_init = localFont({
  src: "../fonts/Fontspring-DEMO-proximanovacond-medium.otf",
  variable: '--font-nova',
})

const roboto_init = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '100'
})

export const roboto = roboto_init.variable
export const inter = inter_init.variable
export const raleway = raleway_init.variable
export const msMadi = msMadi_init.variable
export const ralewayLight = ralewayLight_init.variable
export const nova = nova_init.variable