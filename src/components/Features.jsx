const features = [
  "Credit Card Payments",
  "Rewards & Cashback",
  "Credit Score Tracking",
  "UPI Payments",
  "CRED Coins",
  "Smart Spending Insights",
];

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-20 bg-zinc-950">
      <h2 className="text-4xl font-bold mb-10">Features</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition shadow-lg"
          >
            {f}
          </div>
        ))}
      </div>
    </section>
  );
}