import { motion } from 'motion/react';

type TerminalCommandProps = {
  children: React.ReactNode;
  delay?: number;
};

export const TerminalCommand: React.FC<TerminalCommandProps> = ({
  children,
  delay = 0,
}) => (
  <motion.p
    animate={{ opacity: 1, x: 0 }}
    className='text-green-400 text-sm md:text-base mb-2 font-mono'
    initial={{ opacity: 0, x: -10 }}
    transition={{ duration: 0.5, delay }}
  >
    <code>{children}</code>
  </motion.p>
);
