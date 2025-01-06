import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MegaMenu = ({ isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: 1, 
            height: "auto",
            transition: {
              height: { 
                duration: 0.4,
                ease: [0.04, 0.62, 0.23, 0.98]
              },
              opacity: { duration: 0.25 }
            }
          }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-11/12 mx-auto shadow-lg p-2 flex justify-center"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;