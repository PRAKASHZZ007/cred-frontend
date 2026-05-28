import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative bg-gradient-to-b from-black to-zinc-900">
      
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        India’s most <br /> exclusive credit card club
      </motion.h1>

      <p className="mt-6 text-gray-400 max-w-xl">
        Pay credit card bills. Earn rewards. Build credit score. All in one premium experience.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold"
      >
        Join CRED
      </motion.button>

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#7c3aed,_transparent_60%)]"></div>
    </section>
  );
}