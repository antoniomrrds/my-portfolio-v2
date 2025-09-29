'use client';
import { motion } from 'framer-motion';
import BackgroundMeteors from '@/components/ui/backgroundmeteors';
import { DevIcons } from '@/components/Hero/DevIcons';
import { TerminalCommand } from '@/components/Hero/TerminalCommand';
import { Terminal } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Hero = () => (
  <BackgroundMeteors>
    <motion.section
      animate='show'
      className='min-h-screen flex items-center justify->center relative overflow-hidden'
      initial='hidden'
      variants={containerVariants}
    >
      <div className='container mx-auto px-4 text-center relative z-10'>
        <motion.div
          className='max-w-4xl mx-auto bg-gray-900/80 border border-cyan-500/30 rounded-lg shadow-2xl backdrop-blur-sm max-lg:mx-2'
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <div className='flex items-center gap-2 p-3 border-b border-cyan-500/30'>
            <div className='w-3 h-3 rounded-full bg-red-500' />
            <div className='w-3 h-3 rounded-full bg-yellow-500' />
            <div className='w-3 h-3 rounded-full bg-green-500' />
            <div className='flex-1 text-left'>
              <span className='text-gray-400 font-mono text-sm'>
                ~/portfolio/developer
              </span>
            </div>
          </div>

          <motion.div
            animate='show'
            className='p-6 font-mono text-left'
            initial='hidden'
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp}>
              <TerminalCommand delay={0}>$ dotnet --info</TerminalCommand>
            </motion.div>

            <motion.h1
              className='text-2xl md:text-7xl mb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'
              variants={fadeInUp}
            >
              Antônio Marcos
            </motion.h1>

            <motion.div variants={fadeInUp}>
              <TerminalCommand delay={1}>$ dotnet list package</TerminalCommand>
            </motion.div>

            <motion.p
              className='text-xl md:text-3xl text-cyan-300 mb-2'
              variants={fadeInUp}
            >
              Backend Developer Júnior
            </motion.p>

            <motion.div variants={fadeInUp}>
              <TerminalCommand delay={2}>
                $ dotnet run --project mission.csproj
              </TerminalCommand>
            </motion.div>

            <motion.p
              className='text-xs sm:text-sm md:text-base text-gray-300'
              variants={fadeInUp}
            >
              Na jornada infinita do código, cada bug é um vilão a derrotar,
              cada projeto, um novo arco da saga. Cada linha escrita é um golpe,
              cada aprendizado, um poderoso power-up. Evoluir é meu destino — o
              nível máximo não existe, só a próxima evolução.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className='mt-8'
          initial={{ opacity: 0 }}
          transition={{ delay: 3 }}
        >
          {DevIcons()}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className='mt-12'
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 3 }}
          >
            <AnimatedButton
              className='mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full border border-cyan-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300'
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Terminal className='mr-2' size={20} />
              Descubra mais sobre mim
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className='w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full' />
      </motion.div>
    </motion.section>
  </BackgroundMeteors>
);
