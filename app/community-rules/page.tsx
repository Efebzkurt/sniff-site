import { HeartHandshake } from "lucide-react";
import React from "react";

// Topluluk vurgusu için ikon

const CommunityRules = () => {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- SAYFA BAŞLIĞI --- */}
        <div className="mb-12 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-3 mb-2">
            <HeartHandshake className="text-yellow-500 w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Topluluk Kuralları
            </h1>
          </div>
          <p className="text-xl text-gray-500 font-medium pl-1">
            Sniff Mobil Uygulaması
          </p>
        </div>

        {/* --- GİRİŞ METNİ --- */}
        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6 mb-12">
          <p className="text-gray-700 leading-relaxed text-lg">
            Sniff, köpek sahiplerinin güvenli, saygılı ve keyifli bir ortamda
            bir araya gelmesini amaçlayan bir topluluktur. Bu kurallar, hem
            sizin hem de patili dostlarımızın güvenliğini sağlamak için
            oluşturulmuştur. <br />
            <br />
            <span className="font-semibold">
              Sniff’i kullanarak aşağıdaki Topluluk Kuralları’nı kabul etmiş
              sayılırsınız.
            </span>
          </p>
        </div>

        {/* --- KURALLAR LİSTESİ --- */}
        <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
          {/* 1. Saygılı ve Nazik Olun */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-gray-100 text-gray-900 w-8 h-8 flex items-center justify-center rounded-full text-sm">
                1
              </span>
              Saygılı ve Nazik Olun
            </h2>
            <ul className="list-disc pl-12 space-y-2 marker:text-yellow-500">
              <li>
                Diğer kullanıcılara karşı her zaman saygılı, kibar ve anlayışlı
                davranın.
              </li>
              <li>
                Hakaret, aşağılama, tehdit, zorbalık veya küçümseyici dil
                kullanmayın.
              </li>
              <li>
                Fikir ayrılıkları olabilir; ancak tartışmalar saygı çerçevesinde
                yürütülmelidir.
              </li>
            </ul>
          </section>

          {/* 2. Sıfır Tolerans */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-gray-100 text-gray-900 w-8 h-8 flex items-center justify-center rounded-full text-sm">
                2
              </span>
              Taciz, Nefret ve Ayrımcılığa Sıfır Tolerans
            </h2>
            <p className="mb-2 pl-12">
              Aşağıdaki davranışlara kesinlikle izin verilmez:
            </p>
            <ul className="list-disc pl-12 space-y-2 marker:text-red-500">
              <li>
                Cinsiyet, cinsel yönelim, etnik köken, din, engellilik durumu
                veya benzeri özelliklere yönelik nefret söylemi,
              </li>
              <li>Israrlı mesaj gönderme, rahatsız etme veya takip etme,</li>
              <li>Cinsel içerikli, tehditkâr veya rahatsız edici mesajlar.</li>
            </ul>
            <p className="mt-3 pl-12 text-red-500 font-medium text-base">
              Bu tür davranışlar derhal hesap askıya alma veya kalıcı yasaklama
              ile sonuçlanabilir.
            </p>
          </section>

          {/* 3. Güvenlik Önceliğimizdir */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-gray-100 text-gray-900 w-8 h-8 flex items-center justify-center rounded-full text-sm">
                3
              </span>
              Güvenlik Önceliğimizdir
            </h2>
            <ul className="list-disc pl-12 space-y-2 marker:text-yellow-500">
              <li>
                Kendinizin veya başkalarının kişisel bilgilerini (adres, telefon
                numarası, kimlik bilgileri vb.) herkese açık alanlarda
                paylaşmayın.
              </li>
              <li>
                Şüpheli davranışları, sahte profilleri veya uygunsuz içerikleri
                uygulama içindeki bildirme özelliğiyle bize iletin.
              </li>
              <li>
                Gerçek hayatta yapılacak buluşmalar tamamen kullanıcıların
                sorumluluğundadır; Sniff bu buluşmalara taraf değildir.
              </li>
            </ul>
          </section>

          {/* 4. Sahte Profiller */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-gray-100 text-gray-900 w-8 h-8 flex items-center justify-center rounded-full text-sm">
                4
              </span>
              Sahte Profiller ve Yanıltıcı Davranışlar
            </h2>
            <ul className="list-disc pl-12 space-y-2 marker:text-yellow-500">
              <li>Başkası adına profil oluşturmak,</li>
              <li>Yanıltıcı bilgi vermek,</li>
              <li>
                Sahte veya size ait olmayan fotoğraflar kullanmak yasaktır.
              </li>
            </ul>
            <p className="mt-2 pl-12 italic text-gray-500 text-base">
              Sniff, kullanıcıların gerçek ve güvenilir profillerle etkileşim
              kurmasını hedefler.
            </p>
          </section>

          {/* 5. Uygunsuz ve Yasaklı İçerikler */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-gray-100 text-gray-900 w-8 h-8 flex items-center justify-center rounded-full text-sm">
                5
              </span>
              Uygunsuz ve Yasaklı İçerikler
            </h2>
            <p className="mb-2 pl-12">
              Aşağıdaki içeriklerin paylaşılması yasaktır:
            </p>
            <ul className="list-disc pl-12 space-y-2 marker:text-red-500">
              <li>Müstehcen veya pornografik içerik,</li>
              <li>
                Şiddet, istismar veya yasa dışı faaliyetleri teşvik eden
                içerikler,
              </li>
              <li>
                Hayvanlara zarar verilmesini özendiren veya normalleştiren
                paylaşımlar,
              </li>
              <li>Nefret söylemi veya propaganda.</li>
            </ul>
            <p className="mt-2 pl-12 font-medium">
              Uygunsuz içerikler kaldırılır ve gerekli durumlarda hesap
              işlemleri uygulanır.
            </p>
          </section>

          {/* 6. Reklam ve Spam */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-gray-100 text-gray-900 w-8 h-8 flex items-center justify-center rounded-full text-sm">
                6
              </span>
              Reklam, Spam ve Ticari Kullanım
            </h2>
            <ul className="list-disc pl-12 space-y-2 marker:text-yellow-500">
              <li>
                İzinsiz reklam, ürün tanıtımı veya spam mesajlar gönderilemez.
              </li>
              <li>
                Sniff, kişisel ve sosyal kullanım amacıyla tasarlanmıştır;
                ticari kullanım Sniff’in yazılı izni olmadan yasaktır.
              </li>
            </ul>
          </section>

          {/* 7. Köpekler ve Hayvan Refahı */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-gray-100 text-gray-900 w-8 h-8 flex items-center justify-center rounded-full text-sm">
                7
              </span>
              Köpekler ve Hayvan Refahı
            </h2>
            <p className="mb-2 pl-12">
              Sniff topluluğu, hayvan refahına büyük önem verir:
            </p>
            <ul className="list-disc pl-12 space-y-2 marker:text-yellow-500">
              <li>
                Köpeklere kötü muameleyi teşvik eden veya normalleştiren
                davranışlar kabul edilemez.
              </li>
              <li>Köpeğinizle ilgili paylaşımlarda dürüst ve sorumlu olun.</li>
              <li>
                Sniff, veterinerlik veya profesyonel sağlık tavsiyesi sunmaz.
              </li>
            </ul>
          </section>

          {/* 8. Kuralların İhlali ve Yaptırımlar */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-gray-100 text-gray-900 w-8 h-8 flex items-center justify-center rounded-full text-sm">
                8
              </span>
              Kuralların İhlali ve Yaptırımlar
            </h2>
            <p className="mb-2 pl-12">
              Bu kurallara uyulmaması durumunda Sniff aşağıdaki adımları
              atabilir:
            </p>
            <ul className="list-disc pl-12 space-y-2 marker:text-red-500 font-medium">
              <li>Uyarı</li>
              <li>İçerik kaldırma</li>
              <li>Hesap geçici olarak askıya alma</li>
              <li>Hesabı kalıcı olarak kapatma</li>
            </ul>
            <p className="mt-2 pl-12 text-sm text-gray-500">
              Sniff, topluluğun güvenliği için gerekli gördüğü durumlarda
              önceden bildirimde bulunmaksızın işlem yapma hakkını saklı tutar.
            </p>
          </section>

          {/* 9. Bildirim ve İtiraz */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-gray-100 text-gray-900 w-8 h-8 flex items-center justify-center rounded-full text-sm">
                9
              </span>
              Bildirim ve İtiraz
            </h2>
            <p className="pl-12 mb-4">
              Uygunsuz davranışları uygulama içinden bildirebilirsiniz.
              Hesabınızla ilgili alınan kararlara itiraz etmek için bizimle
              iletişime geçebilirsiniz:
            </p>
            <div className="pl-12">
              <a
                href="mailto:info@kakadulabs.com"
                className="text-yellow-600 font-bold hover:underline"
              >
                info@kakadulabs.com
              </a>
            </div>
          </section>

          {/* 10. Son Söz */}
          <section className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Son Söz</h2>
            <p className="text-gray-600 mb-2">
              Sniff, güvenli ve pozitif bir topluluk yaratmayı hedefler.
            </p>
            <p className="font-medium text-gray-800">
              Bu ortamı birlikte koruyabiliriz. Kurallara uyarak hem kendiniz
              hem de patili dostlarımız için daha keyifli bir deneyim yaratmış
              olursunuz. 🐾
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CommunityRules;
