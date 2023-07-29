import { useReducerDispatch, useReducerSelector } from '@hooks/use-reducer';
import { animateRouterAction, computedRouterHistory } from '@store/reducer/animate-router';
import { RouterDept } from '@store/reducer/animate-router/model';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAnimateRouter = () => {
  const router = useRouter();

  // const routerHistory = useReducerSelector(computedRouterHistory)
  // const dispatch = useReducerDispatch();

  useEffect(() => {
    const routeChangeStart = () => {
      console.error('routeChangeError');
    };
    const routeChangeComplete = () => {
      console.error('routeChangeError');
    };
    const routeChangeError = () => {
      console.error('routeChangeError');
    };

    router.events.on('routeChangeStart', routeChangeStart);
    router.events.on('routeChangeComplete', routeChangeComplete);
    router.events.on('routeChangeError', routeChangeError);

    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
      router.events.off('routeChangeComplete', routeChangeComplete);
      router.events.off('routeChangeError', routeChangeError);
    };
  }, []);
}
