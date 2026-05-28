import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-20 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl font-bold">A members-only experience</h2>
        <p className="text-gray-400 mt-4 leading-relaxed">
          CRED is built for India's most trustworthy individuals.
          We reward discipline and financial responsibility.
        </p>
      </motion.div>
    </section>
  );
}