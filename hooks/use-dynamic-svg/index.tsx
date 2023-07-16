import { DynamicSvgOptions } from '@hooks/use-dynamic-svg/model';
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic'

const useDynamicSvg = (name: string, options: DynamicSvgOptions) => {

  const iconRef = useRef<React.ComponentType>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  const { onCompleted, onError } = options;

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const importPath = `./${name}.svg`;
        console.log(importPath)
        iconRef.current = await dynamic(() => import(importPath))
        // iconRef.current = (await import(importPath));

        if (onCompleted) {
          onCompleted(name, iconRef.current);
        }
      } catch (err: any) {
        if (onError) {
          console.log(err)
          onError(err);
        }
        setError(err)
      } finally {
        setLoading(false)
      }
    };
    importIcon();
  }, [name, onCompleted, onError])

  return {
    error,
    isLoading,
    SvgIcon: iconRef.current
  };
}

export default useDynamicSvg;
