import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              {/* İkon */}
              <div className="relative w-24 h-24 transition-transform group-hover:scale-110">
                <Image
                  src="/sniff_icon.png"
                  alt="Sniff Logo"
                  fill // Resmi kapsayıcıya doldurur
                  className="object-contain" // Resmin oranını bozmadan sığdırır
                />
              </div>
            </Link>
          </div>

          {/* Menü Linkleri */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-yellow-500 font-medium transition-colors"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/business"
              className="text-gray-600 hover:text-yellow-500 font-medium transition-colors"
            >
              İşletmeler İçin
            </Link>
          </div>

          {/* CTA Buton */}
          <div>
            <Link
              href="#download"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-yellow-200"
            >
              Uygulamayı İndir
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
