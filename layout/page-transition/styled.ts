import { RouterDept, TRouterDept } from '@store/reducer/animate-router/model';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionDiv = styled(motion.div)`
  width: 100vw;
`

const holdVariants = {
  out: {
    opacity: 0,
    scale: 1,
    y: 30,
    transition: {
      duration: 0.75
    }
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5
    }
  }
} as const;

const nextVariants = {
  out: {
    opacity: 0,
    x: '100%', // Slide left when exiting
    transition: { duration: 0.5 },
  },
  in: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 1,
    x: '100%', // Slide left when exiting
    transition: { duration: 0.5 },
  }
} as const;

const backVariants = {
  out: {
    opacity: 1,
    x: '-100%', // Slide left when exiting
    transition: { duration: 0.5 },
  },
  in: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0.5,
    x: '-100%', // Slide left when exiting
    transition: { duration: 0.5 },
  }
} as const;

export const pageVariants = {
  [RouterDept.hold]: holdVariants,
  [RouterDept.next]: nextVariants,
  [RouterDept.back]: backVariants,
} as Record<TRouterDept, any>
