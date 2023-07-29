import { usePageTransition } from '@hooks/use-page-transition';
import { IPageTransition, ITransition } from '@layout/page-transition/model';
import { MotionDiv } from '@layout/page-transition/styled';
import { useRouter } from 'next/router';
import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';


const pathLength = (path: string) => path.split('/').filter(x => x).length - 1
const PageTransition = ({ children, path, ...rest }: IPageTransition, ref: ForwardedRef<HTMLDivElement>) => {
  const router = useRouter();
  const transition = { duration: 0.5, ease: 'easeInOut' }

  const {
    depth, setDepth,
    initial, animate, exit,
    setInitial, setAnimation, setExit,
    routerHistory
  } = usePageTransition()

  useEffect(() => {
    const routeChangeStart = (url: string) => {
      console.log('routerHistory', depth, pathLength(url))
      if (pathLength(url) > depth) {
        setInitial({ x: '100%' })
        setAnimation({ x: 0 })
        setExit({ x: '-100%' })
      } else {
        setInitial({ x: '-100%' })
        setAnimation({ x: 0 })
        setExit({ x: '100%' })
      }
      setDepth(pathLength(url))
    };

    router.events.on('routeChangeStart', routeChangeStart);

    if (routerHistory.length === 0) {
      setDepth(pathLength(router.asPath))
    }

    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
    }
  }, [])

  return (
    <MotionDiv ref={ref}
               initial={initial}
               animate={animate}
               exit={exit}
               transition={transition}
               {...rest}>
      {children}
    </MotionDiv>
  )
}

export default forwardRef(PageTransition)
