import React from 'react';
import { motion } from 'motion/react';

export default function ProcessandoPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-md"
      >
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-100 rounded-full"></div>
            <div className="w-20 h-20 border-4 border-t-purple-600 rounded-full animate-spin absolute top-0 left-0"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-purple-600 font-black italic">S</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Analisando o briefing e construindo sua identidade visual...</h2>
          <p className="text-gray-500">
            Nossa inteligência artificial está processando suas respostas para criar um diagnóstico estratégico completo.
          </p>
          <p className="text-xs text-purple-600 font-medium animate-pulse">
            Isso pode levar até 30 segundos.
          </p>
        </div>

        <div className="flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1, 
                delay: i * 0.2 
              }}
              className="w-2 h-2 bg-purple-600 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
