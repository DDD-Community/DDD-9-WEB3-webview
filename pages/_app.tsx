import '@/styles/globals.css'
import { wrapper } from '@store/reducer';
import { AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  useEffect(() => {
  }, [])

  const { store, props } = wrapper.useWrappedStore(pageProps);
  const pageKey = router.asPath
  const getLayout = Component.getLayout ?? (page => page)
  return (
    <Provider store={store}>
      <AnimatePresence initial={false} mode="popLayout">
        {getLayout(<Component key={pageKey} {...props.pageProps} />)}
      </AnimatePresence>
    </Provider>
  )
}

export default wrapper.withRedux(App);
