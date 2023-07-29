import { HTMLMotionProps } from 'framer-motion';
import React from 'react';

export interface IPageTransition extends HTMLMotionProps<'div'> {
  depth?: number;
  path?: string
}


export interface ITransition {
  x?: string|number;
  y?: string|number;
}
