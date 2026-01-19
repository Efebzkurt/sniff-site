import React from "react";

const TermsOfUse = () => {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- SAYFA BAŞLIĞI --- */}
        <div className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Kullanım Koşulları
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Sniff Mobil Uygulaması
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Son Güncelleme Tarihi:{" "}
            <span className="font-semibold text-gray-900">17.01.2026</span>
          </p>
        </div>

        {/* --- İÇERİK --- */}
        <div className="space-y-10 text-gray-600 leading-relaxed text-lg">
          {/* Giriş */}
          <section>
            <p>
              Sniff mobil uygulamasını (“Uygulama”) indirerek, kurarak veya
              kullanarak Kullanım Koşulları’nı (“Koşullar”) okuduğunuzu,
              anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz. Bu
              Koşulları kabul etmiyorsanız, Uygulamayı kullanmamanız gerekir.
            </p>
          </section>

          {/* 1. Tanımlar */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Tanımlar
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500">
              <li>
                <strong className="text-gray-900">Sniff:</strong> Sniff mobil
                uygulamasını işleten geliştirici ekip.
              </li>
              <li>
                <strong className="text-gray-900">Kullanıcı:</strong> Uygulamayı
                indiren, kayıt olan veya kullanan gerçek kişi.
              </li>
              <li>
                <strong className="text-gray-900">Hizmetler:</strong> Sniff
                tarafından sunulan tüm özellikler, içerikler ve dijital
                hizmetler.
              </li>
              <li>
                <strong className="text-gray-900">İçerik:</strong> Metin,
                fotoğraf, video, konum bilgisi, mesaj ve benzeri tüm kullanıcı
                paylaşımları.
              </li>
            </ul>
          </section>

          {/* 2. Hakkımızda */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Hakkımızda
            </h2>
            <p className="mb-4">
              Sniff, bağımsız bir geliştirici ekip tarafından işletilen, köpek
              sahiplerini güvenli ve sosyal bir ortamda bir araya getirmeyi
              amaçlayan bir mobil uygulamadır.
            </p>
            <p className="mb-4">
              Türkiye’de ikamet eden kullanıcılar bakımından veri sorumlusu ve
              hizmet sağlayıcı Sniff Ekibi’dir.
            </p>
            <p>
              İletişim:{" "}
              <a
                href="mailto:info@kakadulabs.com"
                className="text-yellow-600 font-medium hover:underline"
              >
                info@kakadulabs.com
              </a>
            </p>
          </section>

          {/* 3. Uygulamanın Amacı ve Kapsamı */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Uygulamanın Amacı ve Kapsamı
            </h2>
            <p className="mb-2">
              Sniff şunları sunmayı amaçlayan bir platformdur:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500 mb-4">
              <li>Köpek sahiplerinin birbirleriyle bağlantı kurmasını,</li>
              <li>Konum tabanlı yürüyüş ve sosyal etkileşimleri,</li>
              <li>Köpek bakımıyla ilgili planlama ve takip özelliklerini.</li>
            </ul>
            <p className="italic text-gray-500 border-l-4 border-yellow-200 pl-4 py-1 bg-yellow-50/50">
              Sniff, sosyal etkileşim amaçlı bir platformdur; sağlık,
              veterinerlik veya profesyonel danışmanlık hizmeti sağlamaz.
            </p>
          </section>

          {/* 4. Hesap Oluşturma */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Hesap Oluşturma ve Kullanım Şartları
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500">
              <li>
                Sniff’i kullanabilmek için 18 yaşını doldurmuş olmanız gerekir.
              </li>
              <li>
                Kayıt sırasında verdiğiniz bilgilerin doğru, güncel ve size ait
                olması zorunludur.
              </li>
              <li>Tek bir kullanıcı yalnızca bir hesap oluşturabilir.</li>
              <li>Hesabınızdan yapılan tüm işlemlerden siz sorumlusunuz.</li>
              <li>
                Sniff, yanlış bilgi verdiği tespit edilen veya bu Koşulları
                ihlal eden kullanıcıların hesaplarını askıya alma veya kapatma
                hakkını saklı tutar.
              </li>
            </ul>
          </section>

          {/* 5. Kullanıcı Yükümlülükleri */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Kullanıcı Yükümlülükleri
            </h2>
            <p className="mb-2">
              Uygulamayı kullanırken aşağıdakileri kabul etmiş sayılırsınız:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500">
              <li>
                Yasa dışı, tehditkâr, taciz edici, ayrımcı, müstehcen veya
                şiddet içerikli davranışlarda bulunmamak,
              </li>
              <li>
                Başkalarının haklarını, gizliliğini veya güvenliğini ihlal
                etmemek,
              </li>
              <li>
                Sahte profil oluşturmamak veya başkası adına hesap kullanmamak,
              </li>
              <li>
                Uygulamanın güvenliğini, altyapısını veya işleyişini bozacak
                girişimlerde bulunmamak,
              </li>
              <li>Ticari reklam, spam veya yetkisiz tanıtım yapmamak.</li>
            </ul>
          </section>

          {/* 6. Kullanıcı İçerikleri */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Kullanıcı İçerikleri
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500">
              <li>
                Uygulama içinde paylaştığınız tüm içeriklerden siz sorumlusunuz.
              </li>
              <li>
                Sniff, kullanıcı içeriklerini önceden denetlemek zorunda
                değildir; ancak gerekli gördüğünde kaldırma, gizleme veya
                erişimi kısıtlama hakkını saklı tutar.
              </li>
              <li>
                Uygulamaya içerik yükleyerek, Sniff’e bu içerikleri Hizmetlerin
                sunulması amacıyla ücretsiz, dünya çapında ve devredilebilir
                şekilde kullanma, çoğaltma ve gösterme lisansı vermiş olursunuz.
              </li>
            </ul>
          </section>

          {/* 7. Ücretli Hizmetler */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Ücretli Hizmetler ve Abonelikler
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500">
              <li>
                Sniff, bazı özellikleri ücretli abonelikler veya uygulama içi
                satın alma seçenekleri aracılığıyla sunabilir.
              </li>
              <li>
                Ödemeler, uygulamanın indirildiği platformun (ör. Google Play
                Store veya Apple App Store) ödeme altyapısı üzerinden
                gerçekleştirilir.
              </li>
              <li>
                Abonelikler, ilgili uygulama mağazasının politikalarına uygun
                şekilde otomatik olarak yenilenebilir.
              </li>
              <li>
                Aboneliklerin iptali, yenilenmesi ve iade işlemleri;
                kullanıcının hesabının bağlı olduğu uygulama mağazasının kendi
                kural ve prosedürlerine tabidir.
              </li>
              <li>
                Sniff, yürürlükteki mevzuata ve ilgili uygulama mağazası
                kurallarına uygun olmak kaydıyla; fiyatlandırma, abonelik
                planları ve sunulan paketlerde değişiklik yapma hakkını saklı
                tutar.
              </li>
            </ul>
          </section>

          {/* 8. Fikri Mülkiyet */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Fikri Mülkiyet Hakları
            </h2>
            <p className="mb-2">
              Uygulama, yazılım, tasarım, logo, marka ve tüm içerikler Sniff’e
              veya lisans verenlerine aittir. Sniff’e ait hiçbir unsur;
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500">
              <li>
                Kopyalanamaz, değiştirilemez, ticari amaçla kullanılamaz,
                tersine mühendisliğe tabi tutulamaz.
              </li>
            </ul>
          </section>

          {/* 9. Hesabın Askıya Alınması */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Hesabın Askıya Alınması ve Feshi
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500">
              <li>
                Sniff, aşağıdaki durumlarda hesabınızı geçici veya kalıcı olarak
                kapatabilir: Kullanım Koşullarının ihlali, yasal yükümlülükler,
                güvenlik veya topluluk kurallarına aykırı davranışlar.
              </li>
              <li>
                Kullanıcı, dilediği zaman hesabını uygulama ayarlarından
                silebilir.
              </li>
            </ul>
          </section>

          {/* 10. Sorumluluğun Sınırlandırılması */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Sorumluluğun Sınırlandırılması
            </h2>
            <p className="mb-2">Sniff;</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500">
              <li>
                Kullanıcılar arasındaki etkileşimlerden, kullanıcı
                içeriklerinden,
              </li>
              <li>Hizmet kesintileri, veri kaybı veya teknik arızalardan,</li>
              <li>
                Doğrudan veya dolaylı zararlardan sorumlu tutulamaz
                (Yürürlükteki zorunlu mevzuat saklı kalmak kaydıyla).
              </li>
            </ul>
          </section>

          {/* 11. Gizlilik */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Gizlilik
            </h2>
            <p>
              Kişisel verilerin işlenmesine ilişkin esaslar Gizlilik
              Politikası’nda açıklanmıştır. Uygulamayı kullanarak Gizlilik
              Politikası’nı da kabul etmiş sayılırsınız.
            </p>
          </section>

          {/* 12. Koşullarda Değişiklik */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Koşullarda Değişiklik
            </h2>
            <p>
              Sniff, işbu Kullanım Koşulları’nı zaman zaman güncelleyebilir.
              Önemli değişiklikler uygulama içinden veya uygun iletişim
              kanallarıyla bildirilecektir. Güncellemeler sonrası Uygulamanın
              kullanılmaya devam edilmesi, yeni Koşulların kabul edildiği
              anlamına gelir.
            </p>
          </section>

          {/* 13. Uygulanacak Hukuk */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Uygulanacak Hukuk ve Yetki
            </h2>
            <p>
              Bu Koşullar, Türkiye Cumhuriyeti hukukuna tabidir. Taraflar
              arasında doğabilecek uyuşmazlıklarda Türkiye Cumhuriyeti yetkili
              mahkemeleri ve icra daireleri yetkilidir.
            </p>
          </section>

          {/* 14. İletişim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. İletişim
            </h2>
            <p className="mb-4">
              Kullanım Koşulları ile ilgili her türlü soru ve talebiniz için
              bizimle iletişime geçebilirsiniz:
            </p>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 inline-block">
              <a
                href="mailto:info@kakadulabs.com"
                className="text-yellow-600 font-bold text-lg hover:underline"
              >
                info@kakadulabs.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfUse;
