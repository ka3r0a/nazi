"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function RomanticClock() {
  const [time, setTime] = useState(new Date())
  const [showMessage, setShowMessage] = useState(false)
  const [showNameMessage, setShowNameMessage] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNameMessage(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const hours = time.getHours().toString().padStart(2, "0")
  const minutes = time.getMinutes().toString().padStart(2, "0")
  const seconds = time.getSeconds().toString().padStart(2, "0")

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-950 to-red-900 text-white">
      <div className="max-w-md w-full mx-auto p-8 rounded-xl bg-red-950/50 backdrop-blur-sm shadow-lg border border-red-800/30">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl font-bold text-red-100 mb-2">هر لحظه با تو نازی</h1>
            <p className="text-red-200/80 italic">زمان می‌ایستد وقتی به تو فکر می‌کنم</p>
          </motion.div>
        </div>

        <div className="relative mb-12">
          <div className="flex justify-center items-center gap-4 text-6xl font-bold text-red-100">
            <motion.div
              className="bg-red-900/50 p-4 rounded-lg backdrop-blur-sm border border-red-800/30"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            >
              {hours}
            </motion.div>
            <div className="text-red-300 animate-pulse">:</div>
            <motion.div
              className="bg-red-900/50 p-4 rounded-lg backdrop-blur-sm border border-red-800/30"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut", delay: 0.3 }}
            >
              {minutes}
            </motion.div>
            <div className="text-red-300 animate-pulse">:</div>
            <motion.div
              className="bg-red-900/50 p-4 rounded-lg backdrop-blur-sm border border-red-800/30"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut", delay: 0.6 }}
            >
              {seconds}
            </motion.div>
          </div>

          {/* Pulsing hearts around the clock */}
          <div className="absolute -inset-4 flex items-center justify-between pointer-events-none">
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2
              const x = Math.cos(angle) * 120
              const y = Math.sin(angle) * 120

              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    delay: i * 0.25,
                    ease: "easeInOut",
                  }}
                >
                  <Heart className="h-6 w-6 text-red-400 fill-red-400" />
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="absolute -top-6 -right-6"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" },
              scale: { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" },
            }}
          >
            <Heart className="h-12 w-12 text-red-500 fill-red-500" />
          </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.button
            className="px-6 py-3 bg-red-700 hover:bg-red-600 rounded-full font-medium shadow-lg transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMessage(!showMessage)}
          >
            <Heart className="h-5 w-5" />
            <span>اینجا کلیک کن</span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 p-4 text-center bg-red-800/30 rounded-lg border border-red-700/50"
            >
              <p className="text-lg font-medium text-red-100">
                نازی کوچولوم مرسی که کنارم هستی و خیلی
                خیلی
                خیلی دوستت دارم
              
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating hearts background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * 100 + "%",
                y: "100%",
                opacity: 0.2 + Math.random() * 0.8,
                scale: 0.5 + Math.random() * 1.5,
              }}
              animate={{
                y: "-10%",
                rotate: Math.random() * 360,
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 10 + Math.random() * 20,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            >
              <Heart
                className={`h-${Math.floor(Math.random() * 3) + 4} w-${Math.floor(Math.random() * 3) + 4} text-red-${Math.floor(Math.random() * 3) + 300} fill-red-${Math.floor(Math.random() * 3) + 300}`}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showNameMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="fixed inset-0 flex items-center justify-center bg-red-950/80 z-50"
            >
              <div className="text-center p-8 bg-gradient-to-r from-red-900 to-red-800 rounded-2xl shadow-2xl border-2 border-red-700">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                >
                  <Heart className="h-20 w-20 mx-auto mb-4 text-red-500 fill-red-500" />
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-4">نازی</h2>
                <p className="text-xl text-red-100">تو زیباترین اتفاق زندگی من هستی</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <div className="flex justify-center py-4">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="h-2 w-2 rounded-full bg-red-500"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

