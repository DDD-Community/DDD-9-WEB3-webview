import '@/styles/globals.css'
import { NextPage } from '@/node_modules/next';
import type { AppProps } from 'next/app'
import React from 'react';

export type NextPageWithLayout = NextPage & { getLayout?: (page: React.ReactElement) => React.ReactNode}
type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout }

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const layout = Component.getLayout ?? (page => page);
  return layout(<Component {...pageProps} />)
}
