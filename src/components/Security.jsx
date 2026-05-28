export default function Security() {
  return (
    <section className="py-24 px-6 md:px-20 bg-black">
      <h2 className="text-4xl font-bold mb-10">Bank-grade Security</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-zinc-900 rounded-xl">Encryption</div>
        <div className="p-6 bg-zinc-900 rounded-xl">Fraud Protection</div>
        <div className="p-6 bg-zinc-900 rounded-xl">Secure Payments</div>
      </div>
    </section>
  );
}