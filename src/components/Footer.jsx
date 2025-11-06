export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-16">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12 py-8">
        <div className="border-t border-white/10 pt-4 text-center">
          <p className="text-sm text-white/60">
            © {year} tira's port. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
