import { Code2, Server, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

const icons = [
  { Component: Terminal, label: 'Terminal Icon' },
  { Component: Code2, label: 'Code Icon' },
  { Component: Server, label: 'Server Icon' },
];
export const DevIcons = () => (
  <div className='flex justify-center mt-8 gap-8 text-cyan-400'>
    {icons.map(({ Component, label }) => (
      <motion.div
        key={label}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.2, rotate: 360 }}
      >
        <Component aria-label={label} role='img' size={40} />
      </motion.div>
    ))}
  </div>
);
