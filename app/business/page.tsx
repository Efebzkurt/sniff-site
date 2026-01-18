import Link from "next/link";

export default function BusinessPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-yellow-600 font-semibold tracking-wide uppercase text-sm">
          Sniff Partner
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
          İşletmenizi Binlerce Köpek Sahibine Tanıtın
        </h1>
        <p className="mt-6 text-xl text-gray-600">
          Pet shoplar, veterinerler ve köpek dostu kafeler için özel fırsatlar.
          Sniff haritasında yerinizi alın, görünürlüğünüzü artırın.
        </p>

        <div className="mt-10 p-8 bg-yellow-50 rounded-2xl border border-yellow-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Erken Erişim Başvurusu
          </h3>
          <p className="mb-6 text-gray-600">
            Partner programımız şu an beta aşamasında. Bilgilerinizi bırakın,
            size ulaşalım.
          </p>

          <form className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {/* Buton yazısının okunması için siyah text veya koyu sarı bg tercih edilebilir, burada siyah text kullandım */}
            <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors">
              Başvuru Yap
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
