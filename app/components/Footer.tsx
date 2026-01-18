import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    // DEĞİŞİKLİK: bg-white -> bg-gray-900
    // border-gray-100 -> border-gray-800 (Çizgileri koyulaştırdık)
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Kısım */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* 1. Kolon: Marka */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              {/* DEĞİŞİKLİK: text-gray-900 -> text-white */}
              <span className="text-xl font-bold text-white tracking-tight">
                Sniff
              </span>
            </Link>
            {/* DEĞİŞİKLİK: text-gray-500 -> text-gray-400 (Koyu zeminde açık gri daha iyi okunur) */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Köpek sahiplerini ve patili dostlarımızı bir araya getiren sosyal
              platform. Sosyalleşin, keşfedin ve birlikte eğlenin.
            </p>
          </div>

          {/* 2. Kolon: Keşfet */}
          <div>
            {/* DEĞİŞİKLİK: Başlıklar text-white oldu */}
            <h3 className="font-bold text-white mb-6">Keşfet</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="hover:text-yellow-400 transition-colors"
                >
                  İşletmeler İçin
                </Link>
              </li>
              <li>
                <Link
                  href="#download"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Uygulamayı İndir
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Kolon: Yasal */}
          <div>
            <h3 className="font-bold text-white mb-6">Yasal</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Gizlilik Sözleşmesi
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link
                  href="/delete-account"
                  className="hover:text-red-400 transition-colors"
                >
                  Hesap Silme
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        {/* border-gray-100 -> border-gray-800 */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Sniff. Tüm hakları saklıdır.
          </p>

          {/* Sosyal Medya */}
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-3.77 14.765a.75.75 0 11-1.06-1.06.75.75 0 011.06 1.06zM12 7a5 5 0 100 10 5 5 0 000-10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
