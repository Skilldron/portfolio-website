import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null); // Référence pour l'élément
  const isInView = useInView(ref, { once: true, margin: "0px 0px 0px 0px" }); // Observer avec un seuil de visibilité

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial : caché avec décalage vertical
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation lorsque visible
      transition={{ duration: 0.6, ease: "easeOut" }} // Transition fluide
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Section;
