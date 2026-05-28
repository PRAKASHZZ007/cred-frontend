import { motion } from "framer-motion";

export default function NeoPop() {
  return (
    <section className="py-24 px-6 md:px-20 bg-black">
      <h2 className="text-4xl font-bold mb-10">NeoPOP Experience</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {[1,2,3,4].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl border border-zinc-700"
          >
            <h3 className="text-xl font-semibold">Premium Card {item}</h3>
            <p className="text-gray-400 mt-2">
              Smooth 3D interaction with glassmorphism UI.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}