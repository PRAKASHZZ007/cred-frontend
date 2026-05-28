export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-20 bg-zinc-950 border-t border-zinc-800">

      {/* Links */}
      <div className="flex flex-col md:flex-row justify-between gap-6 text-gray-400 items-center md:items-start text-center md:text-left">
        <div>About</div>
        <div>Careers</div>
        <div>Privacy Policy</div>
        <div>Terms</div>
        <div>Social</div>
      </div>

      {/* Bottom text */}
      <p className="mt-6 text-sm text-gray-600 text-center md:text-left">
        © 2026 CRED Clone (Educational Project)
      </p>
    </footer>
  );
}