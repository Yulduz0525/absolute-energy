import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface ITitleProps {
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
