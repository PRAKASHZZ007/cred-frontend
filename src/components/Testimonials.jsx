import { useEffect, useState } from "react";

export default function Testimonials() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setCount(i);
      if (i === 4) clearInterval(interval);
    }, 300);
  }, []);

  return (
    <section className="py-24 px-6 md:px-20 bg-zinc-950">
      <h2 className="text-4xl font-bold mb-10">Trusted by millions</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-black rounded-xl">⭐ App Store: 4.{count}</div>
        <div className="p-6 bg-black rounded-xl">⭐ Play Store: 4.{count}</div>
        <div className="p-6 bg-black rounded-xl">👥 10M+ Members</div>
      </div>
    </section>
  );
}