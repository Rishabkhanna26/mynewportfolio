export default function Footer() {
  return (
    <footer className="py-8 bg-slate-900 text-slate-400">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Rishab Khanna. All rights reserved.</p>
      </div>
    </footer>
  );
}
