/* eslint-disable */
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import rtl from 'stylis-plugin-rtl'
import { isWindowAvailable } from 'utils/navigation'
// NB: A unique `key` is important for it to work!
let options = {
  rtl: { key: 'css-ar', stylisPlugins: [rtl] },
  ltr: { key: 'css-en' }
}
export function RtlProvider (children: any) {
  const dir =
    isWindowAvailable() && window.document.documentElement.dir == 'ar'
      ? 'rtl'
      : 'ltr'
  const cache = createCache(options[dir])
  return <CacheProvider value={cache} children={children} />
}
