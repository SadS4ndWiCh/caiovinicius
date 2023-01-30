import { type TargetAndTransition } from "framer-motion";

type Animation = Record<string, TargetAndTransition>;

export const fadeInDown: Animation = {
	hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};