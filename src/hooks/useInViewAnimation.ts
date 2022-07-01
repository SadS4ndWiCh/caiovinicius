import { useEffect } from 'react';

import { useAnimation } from 'framer-motion';
import { IntersectionOptions, useInView } from 'react-intersection-observer';

type Props = {
  animationVariantName: string;
  options?: IntersectionOptions;
};

export const useInViewAnimation = ({ animationVariantName, options }: Props) => {
  const { ref, inView } = useInView(options);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(animationVariantName);
    }
  }, [controls, inView, animationVariantName]);

  return { ref, inView, controls };
};