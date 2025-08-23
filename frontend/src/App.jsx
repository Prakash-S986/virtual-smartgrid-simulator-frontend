import React from 'react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-900 to-black">
      <motion.div
        className="bg-gray-800 p-10 rounded-2xl shadow-xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-indigo-400">Virtual SmartGrid</h1>
        <p className="text-gray-300">Login and experience the future of smart energy simulation.</p>
      </motion.div>
    </div>
  )
}
