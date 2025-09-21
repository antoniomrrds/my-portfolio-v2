"use client";
import { motion } from "motion/react";
import BackgroundMeteors from "@/components/ui/backgroundmeteors";

export function Hero() {
  return (
    <BackgroundMeteors>
      <div className="max-w-4xl mx-auto bg-gray-900/80 border border-cyan-500/30 rounded-lg shadow-2xl backdrop-blur-sm max-lg:mx-2 ">
        <div className="flex items-center gap-2 p-3 border-b border-cyan-500/30">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="flex-1 text-left">
            <span className="text-gray-400 font-mono text-sm">
              ~/portfolio/developer
            </span>
          </div>
        </div>

        <div className="p-8 font-mono">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="overflow-hidden"
          >
            <div className="text-green-400 mb-2">$ dotnet --info</div>
            <motion.h1
              className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Antônio Marcos
            </motion.h1>

            <div className="text-green-400 mb-2">$ dotnet list package</div>
            <motion.p
              className="text-2xl md:text-3xl text-cyan-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Backend Developer Júnior <br /> C# & Node.js
            </motion.p>

            <div className="text-green-400 mb-2">
              $ dotnet run --project mission.csproj
            </div>
            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Na jornada infinita do código, cada bug é um vilão a derrotar,
              cada projeto, um novo arco da saga. Cada linha escrita é um golpe,
              cada aprendizado, um poderoso power-up. Evoluir é meu destino — o
              nível máximo não existe, só a próxima evolução.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </BackgroundMeteors>
  );
}
