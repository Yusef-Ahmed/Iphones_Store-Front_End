import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export function Section({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <motion.span
      style={{
        display: 'block',
        width: '100%'
      }}
        initial={{ opacity: 0, x: -200 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: delay | 0.5,
        }}
      >
        {children}
      </motion.span>
    </section>
  );
}
