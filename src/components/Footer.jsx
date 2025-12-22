import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black/95 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-20 items-start">
          {/* LEFT: Brand */}
          <div className="text-center md:text-left">
            <div className="mx-auto md:mx-0 w-14 h-14 rounded-full bg-black text-black text-lg flex items-center justify-center font-semibold tracking-widest mb-5">
              <img
                src="/premiumscents.png"
                alt="Premium Fragrances Logo"
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold tracking-widest">
              PREMIUM SCENTS
            </h3>

            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs mx-auto md:mx-0">
              A modern expression of timeless fragrance. Crafted with intention,
              balance, and restraint.
            </p>
          </div>

          {/* CENTER: Navigation */}
          <div className="flex justify-center align-items-center">
            <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-md text-center md:text-left">
              {["Home", "Shop", "About", "Contact", "Privacy", "Terms"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="relative w-fit mx-auto md:mx-0 text-white/70 hover:text-white transition"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* RIGHT: Social */}
          <div className="text-center md:text-right">
            <h4 className="text-sm uppercase tracking-[0.25em] text-white/50 mb-6">
              Follow Us
            </h4>

            <div className="flex justify-center md:justify-end items-center gap-6 text-white/70">
              <a href="#" className="hover:text-white transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 md:mt-20">
          <div className="h-px bg-white/10 max-w-4xl mx-auto"></div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 text-center text-xs tracking-widest text-white/40">
          © {new Date().getFullYear()} Perfumes — All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
