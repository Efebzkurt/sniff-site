import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- SAYFA BAŞLIĞI --- */}
        <div className="mb-16 border-b border-gray-100 pb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4 tracking-tight">
            Gizlilik Politikası
          </h1>
          <p className="text-gray-500 text-sm">
            YÜRÜRLÜK TARİHİ:{" "}
            <span className="font-medium text-gray-900">20 Ocak 2026</span>
          </p>
        </div>

        {/* --- İÇERİK ALANI --- */}
        <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Güveninizi Önemsiyoruz
            </h2>
            {/* Metin Alanı */}
            <div className=" text-gray-500 text-base">
              Sniff olarak, hem sizin hem de patili dostlarınızın güvenliğine
              önem veriyoruz. Köpek sahiplerini güvenli ve keyifli bir şekilde
              bir araya getiren bir platform olarak, sunduğumuz tüm hizmetleri
              ve özellikleri kişisel verilerinizin gizliliğini gözeterek
              tasarlıyoruz. Bu sayede Sniff’i güvenle kullanabilir, köpeğinizle
              birlikte daha sosyal ve keyifli deneyimlere odaklanabilirsiniz.
              Kişisel verilerinizi bizimle paylaştığınız için teşekkür ederiz.
              Bu güvenin farkındayız ve gizliliğinizi asla hafife almıyoruz.
              Gizliliğinizi göz ardı eden hiçbir karar almamaya özen
              gösteriyoruz. Bilgilerinizi nasıl topladığımız ve kullandığımız
              konusunda şeffaf olmaya önem veriyoruz. Biz de günlük hayatımızda
              çeşitli dijital hizmetler kullanan bir ekip olarak, karmaşık ve
              anlaşılması zor gizlilik metinlerinin kullanıcılar için ne kadar
              yorucu olabildiğinin farkındayız. Bu nedenle Gizlilik Politikamızı
              açık, sade ve anlaşılır bir dille hazırladık. Amacımız,
              politikamızı gerçekten okumanız ve kişisel verilerinizin Sniff’te
              nasıl işlendiğini net bir şekilde anlayabilmenizdir.
            </div>
          </section>
          {/* GİRİŞ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Giriş</h2>
            {/* Metin Alanı */}
            <div className=" text-gray-500 text-base">
              Sniff Gizlilik Politikası’na hoş geldiniz. Gizlilik Politikamızı
              incelemeye zaman ayırdığınız için teşekkür ederiz. Kişisel
              verilerinizi bizimle paylaştığınız için minnettarız ve bu güvene
              her zaman layık olmayı amaçlıyoruz. Bu Gizlilik Politikası,
              Sniff’i kullandığınız süre boyunca kişisel verilerinizin nasıl
              işlendiğini, nasıl korunduğunu ve gizliliğinize ilişkin
              haklarınızı açık ve anlaşılır bir dille açıklamayı hedefler. Yasal
              ve teknik ifadeler mümkün olduğunca asgari düzeyde tutulmuştur.
              Yürürlük Tarihi: 20.01.2026
            </div>
          </section>

          {/* GİZLİLİK POLİTİKASININ GEÇERLİ OLDUĞU ALANLAR */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Gizlilik Politikasının Geçerli Olduğu Alanlar
            </h2>

            <div className="text-gray-500 text-base">
              {/* Giriş Paragrafı */}
              <p className="mb-4">
                Bu Gizlilik Politikası, Sniff tarafından sunulan mobil uygulama
                ve bu uygulama ile bağlantılı tüm hizmetler için geçerlidir.
                Basitlik adına, bu politika kapsamında yer alan tüm hizmetler
                “Hizmetler” olarak anılacaktır. Daha fazla netlik sağlamak
                amacıyla, Sniff tarafından sunulan tüm ilgili alanlarda ve
                uygulama içinde bu Gizlilik Politikası’na erişim sağlayan
                bağlantılara yer verilmiştir.
              </p>

              {/* Maddeler Listesi */}
              {/* space-y-2: Maddeler arasına boşluk koyar */}
              <ul className="space-y-2 font-medium">
                <li>1. Hakkımızda</li>
                <li>2. Topladığımız Bilgiler</li>
                <li>3. Hizmet Kullanımı Sırasında Topladığımız Bilgiler</li>
                <li>4. Başkalarından Aldığımız Bilgiler</li>
                <li>5. Bilgileri Kullanma Amacımız</li>
                <li>6. Tanımlama Bilgileri ve Benzer Teknolojiler</li>
                <li>7. Bilgilerinizi Paylaşma Şeklimiz</li>
                <li>8. Haklarınız</li>
                <li>9. Bilgilerinizi Elimizde Tutma Süremiz</li>
                <li>10. Çocukların Mahremiyeti</li>
                <li>11. Gizlilik Politikası Değişiklikler</li>
                <li>12. Bizimle İletişime Geçin</li>
              </ul>
            </div>
          </section>

          {/* 1. HAKKIMIZDA */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Hakkımızda
            </h2>
            <div className=" text-gray-500 text-base">
              Sniff, bağımsız bir geliştirici ekibi tarafından işletilmektedir
              ve bu kapsamda kişisel verilerin işlenmesinden Sniff Ekibi
              sorumludur. Türkiye’de ikamet ediyorsanız, bu Gizlilik Politikası
              uyarınca kişisel verilerinizden sorumlu olan veri sorumlusu (“veri
              denetçisi”), Sniff Ekibi’dir.
            </div>
          </section>

          {/* 2. TOPLADIĞIMIZ BİLGİLER */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Topladığımız Bilgiler
            </h2>
            <div className=" text-gray-500 text-base">
              Hizmetlerimizi sunabilmek ve deneyiminizi iyileştirmek amacıyla
              aşağıdaki bilgileri toplarız: Hesap Bilgileri: Kayıt olurken
              e-posta adresiniz, cinsiyetiniz ve doğum tarihiniz gibi temel
              bilgileri paylaşırsınız. Profil Bilgileri: Kendinizi ve köpeğinizi
              tanıtmak için isim, ilgi alanları, yaşam tarzı bilgileri ve
              fotoğraflar ekleyebilirsiniz. Fotoğraf veya video eklemek için
              kameranıza veya galerinize erişim izni vermeniz gerekir. Takvim ve
              Planlama: Köpeğinizin aşı, ilaç veya bakım rutinlerini takvime
              eklediğinizde, size hatırlatıcı gönderebilmemiz için bu bilgileri
              işleriz. İletişim Bilgileri: Destek ekibimizle temas kurduğunuzda
              paylaştığınız geri bildirimler ve etkileşimler kaydedilir. Özel ve
              Hassas Bilgiler: Bazı bilgiler (ör. etnik köken, dini inanç,
              cinsel yönelim) bazı bölgelerde “özel nitelikli kişisel veri”
              olarak kabul edilir. Bunları vermeyi seçerek işlenmesine izin
              vermiş olursunuz. Ödeme Bilgileri: Ücretli hizmet aboneliklerinde,
              ödeme sağlayıcısı aracılığıyla finansal bilgileriniz (banka veya
              kredi kartı numarası gibi) toplanır. Anket ve Etkinlik Katılımı:
              Ürün ve hizmetlerimizle ilgili içgörüler sağlamak için
              katıldığınız anket ve etkinliklerde verdiğiniz bilgiler toplanır.
            </div>
          </section>

          {/* 3. HİZMET KULLANIMI SIRASINDA TOPLADIĞIMIZ BİLGİLER */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Hizmet Kullanımı Sırasında Topladığımız Bilgiler
            </h2>
            <div className=" text-gray-500 text-base">
              Sniff’i kullandığınızda sistemimiz bazı verileri otomatik olarak
              toplar; bu veriler hizmeti size daha iyi sunmamıza ve uygulamanın
              düzgün çalışmasına yardımcı olur: Kullanım Bilgileri: Uygulamada
              yaptığınız aramalar, kaydırmalar (eşleşmeler), tıkladığınız
              özellikler ve diğer kullanıcılarla olan etkileşimleriniz
              kaydedilir. Cihaz Bilgileri: IP adresi, cihaz kimliği ve türü,
              işletim sistemi, uygulama çökmeleri ve reklam kimlikleri
              (IDFA/AAID) gibi teknik veriler toplanır. Bu sayede uygulamanın
              performansını takip edebilir ve sorunları düzeltebiliriz. Sağlık
              ve Aktivite Sensörleri: Adım sayısı, yürüyüş mesafesi ve hız gibi
              istatistikleri oluşturmak için cihazınızdaki sensörlerden veri
              alırız. Bu veriler, yürüyüşlerinizi takip etmemize ve size
              kişiselleştirilmiş geri bildirimler sunmamıza olanak tanır. Konum
              Bilgileri Sniff, konum tabanlı bir uygulamadır; bu nedenle
              izninizle aşağıdaki bilgileri toplarız: Kesin Konum: Yakındaki
              köpek sahiplerini göstermek ve yürüyüş rotanızı haritada çizmek
              için enlem ve boylam verilerini kullanırız. Arka Planda Konum:
              Yürüyüş başlatıldığında, uygulama kapalı olsa dahi (izin
              verdiğiniz sürece) rotanızın kesintisiz olarak takip edilmesini
              sağlar. Konum izni verilmezse, yakındaki kullanıcıları görme ve
              yürüyüş takibi gibi temel özellikler çalışmaz. Bu izin,
              uygulamanın temel işlevlerini kullanabilmeniz için gereklidir.
            </div>
          </section>

          {/* 4. BAŞKALARINDAN ALDIĞIMIZ BİLGİLER */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Başkalarından Aldığımız Bilgiler
            </h2>
            <div className=" text-gray-500 text-base">
              Diğer Kullanıcılar: Sniff’i kullanırken diğer kullanıcılar sizinle
              ilgili veriler paylaşabilir. Örneğin, sizinle iletişime geçmek
              istediklerinde veya hizmet içinde sizi bildirdiklerinde bu
              verilerialabiliriz. Sosyal Medya: Apple, Google veya diğer sosyal
              medya hesaplarınızla giriş yaptığınızda, oturum açmak için gerekli
              temel profil verileri bizimle paylaşılır. Bu sayede başka bir
              kullanıcı adı ve şifre hatırlamanıza gerek kalmaz ve sosyal medya
              hesabınızdaki bazı bilgiler hizmeti kişiselleştirmek için
              kullanılabilir. Ortaklar: Reklam ve teknik iş ortaklarımızdan
              sizinle ilgili veriler gelebilir. Örneğin, bir kampanya veya
              reklamın başarısını ölçmek amacıyla anonim veya toplu kullanım
              verileri paylaşılabilir. Bu veriler, hizmetimizi size daha iyi
              sunmak, güvenliğinizi sağlamak ve deneyiminizi geliştirmek için
              kullanılır. Hassas veya özel nitelikli kişisel verilerinizi
              izinsiz paylaşmayız.
            </div>
          </section>

          {/* 5. BİLGİLERİ KULLANMA AMACIMIZ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Bilgileri Kullanma Amacımız
            </h2>
            <div className=" text-gray-500 text-base">
              Sniff olarak, kişisel verilerinizi toplarken ve işlerken hem size
              en iyi deneyimi sunmayı hem de yasal yükümlülüklerimizi yerine
              getirmeyi amaçlıyoruz. İşte bilgilerinizi kullanma şekillerimiz ve
              dayandığımız yasal temeller: Sniff Deneyimini Sağlamak ve
              İyileştirmek Bağlantı Kurmak: Profilinizi diğer uygun
              kullanıcılara göstermek ve sizi onlarla eşleştirmek. Hizmeti
              Yürütmek: Yürüyüş istatistiklerini hesaplamak, takvim
              hatırlatıcılarını göndermek ve teknik hataları gidermek. Güvenliği
              Sağlamak: Dolandırıcılık, taciz veya uygunsuz içerikleri saptamak
              ve topluluğumuzu korumak. İyileştirme: Kullanıcı davranışlarını
              analiz ederek yeni özellikler ve hizmetler geliştirmek. Pazarlama
              ve Kişiselleştirilmiş Teklifler Çekiliş, yarışma, indirim ve diğer
              özel teklifleri uygulama içinde size sunmak. Hizmetlerimiz ve
              diğer platformlar üzerinde ilgi alanlarınıza özel içerik ve
              reklamlar geliştirmek, göstermek ve performansını takip etmek.
              E-posta, telefon, sosyal medya veya mobil cihaz yoluyla,
              ilgilenebileceğinizi düşündüğümüz ürün ve hizmetlerle ilgili
              iletişim kurmak. Pazarlama amaçlı verilerinizi kullanmamız
              yalnızca sizin verdiğiniz izin ve tercihlerinize bağlıdır.
              İstediğiniz zaman bu izinleri ayarlarınızdan güncelleyebilir veya
              iptal edebilirsiniz. Hizmetleri İyileştirmek ve Yeni Özellikler
              Geliştirmek Odak grubu ve anketler uygulayarak geri bildirim
              toplamak. Kullanıcı davranışlarını analiz ederek, özelliklerin
              görünümünü veya işleyişini iyileştirmek. Kullanıcı taleplerine
              dayalı olarak yeni ilgi tabanlı özellikler veya hizmetler
              geliştirmek. Güvenlik ve Dolandırıcılıkla Mücadele Platform
              üzerinde ve dışında gerçekleşen uygunsuz, yasa dışı veya izinsiz
              etkinlikleri saptamak ve önlemek. Dolandırıcılık faaliyetlerini
              önlemek ve tekrarını engellemek için ilgili verileri kaydetmek.
              Veri analizi ile riskleri daha iyi anlamak ve karşı tedbirler
              tasarlamak. Yasal Uyumu Sağlamak Yasal gerekliliklere uymak ve
              kolluk kuvvetlerine destek olmak. Şartlarımızı uygulamak veya
              haklarımızı kullanmak için gerekli olduğunda verilerinize
              başvurmak. Yasal Temeller Hizmeti Sunmak: Çoğu zaman kişisel
              verilerinizi işlememizin nedeni sizinle yaptığımız kontratın
              gereğini yerine getirmektir. Örneğin, anlamlı bağlantılar
              kurabilmeniz için hesabınızı ve profilinizi diğer kullanıcılar
              açısından görünür hâle getirmek. Meşru Çıkarlar: Sunumlarımızı
              iyileştirmek, hizmeti geliştirmek, dolandırıcılığı saptamak, yasal
              amaçları yerine getirmek ve size ilgilenebileceğiniz teklifler
              sunmak gibi durumlarda kişisel verilerinizi meşru çıkarlarımız
              doğrultusunda kullanabiliriz. İzin: Bazı spesifik kullanım
              durumları için sizden açık izin isteyebiliriz. Bu izni istediğiniz
              zaman geri çekebilirsiniz; detaylar Gizlilik Politikasının sonunda
              yer alan iletişim adresinde bulunmaktadır.
            </div>
          </section>

          {/* 6. TANIMLAMA BİLGİLERİ VE BENZER TEKNOLOJİLER */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Tanımlama Bilgileri ve Benzer Teknolojiler
            </h2>
            <div className=" text-gray-500 text-base">
              Sniff, sizi ve/veya cihazınızı tanımak, hizmetlerimizi optimize
              etmek ve güvenliği sağlamak için çeşitli teknolojiler kullanır:
              çerezler, web işaretçileri, pikseller ve mobil uygulama içi
              SDK’lar. Neden Kullanıyoruz? Kimliğinizi doğrulamak, dil ve
              uygulama tercihlerinizi hatırlamak. Uygulama trafiğini analiz
              ederek hangi özelliklerin daha çok kullanıldığını ve sevildiğini
              anlamak. Reklam kampanyalarımızın etkinliğini ölçmek. Sosyal medya
              paylaşım özelliklerini sorunsuz çalıştırmak. Mobil Cihaz
              Tanımlayıcıları: Mobil uygulamada, tarayıcı çerezleri yerine
              cihazınıza özgü rastgele numaralar olan Reklam Kimlikleri (Apple
              için IDFA, Google için AAID) kullanılabilir. Bu kimlikleri cihaz
              ayarlarınızdan dilediğiniz zaman sıfırlayabilir veya takibi
              sınırlandırabilirsiniz. İzleme Sinyalleri: Bazı web tarayıcıları,
              çevrimiçi etkinliğinizin takip edilmesini istemediğinizi belirten
              DNT sinyalleri gönderir. Dünya genelinde ortak bir standart henüz
              oluşmadığından, Sniff şu anda DNT sinyallerine otomatik olarak
              yanıt vermez. Bu teknolojiler, hizmetlerimizi geliştirmek ve
              kullanıcı deneyimini iyileştirmek için kullanılır; sizin izniniz
              olmadan hassas bilgileriniz üçüncü taraflarla paylaşılmaz.
            </div>
          </section>

          {/* 7. BİLGİLERİNİZİ PAYLAŞMA ŞEKLİMİZ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Bilgilerinizi Paylaşma Şeklimiz
            </h2>
            <div className=" text-gray-500 text-base">
              Sniff’te, kullanıcıların anlamlı bağlantılar kurmasına yardımcı
              olmak ve hizmetlerimizi güvenli, etkin ve sürdürülebilir şekilde
              sunmak amacıyla bazı kişisel verilerin paylaşılması gerekebilir.
              Kişisel verileriniz, aşağıda belirtilen durumlar ve amaçlarla
              paylaşılabilir. Diğer Kullanıcılar ile Paylaşım: Hizmet üzerinde
              gönüllü olarak paylaştığınız kişisel veriler (herkese açık
              profiliniz dâhil), diğer kullanıcılar tarafından görülebilir.
              Paylaştığınız içerikler üzerinde, paylaşım sonrasında üçüncü
              kişilerin yapacağı kullanımlar üzerinde ne sizin ne de Sniff’in
              tam kontrolü bulunmamaktadır. Profilinizin tamamı veya belirli
              bölümleri için görünürlük ayarları yaparak hedef kitleyi
              sınırlandırabilirsiniz; bilgileriniz yalnızca seçtiğiniz
              görünürlük ayarları kapsamında paylaşılır. Hizmet Sağlayıcılarımız
              ve İş Ortaklarımız ile Paylaşım: Sniff uygulaması; uygulama
              performansının izlenmesi, hataların tespiti, analiz yapılması ve
              bildirimlerin gönderilmesi amacıyla Firebase ve Google hizmetleri
              gibi üçüncü taraf SDK ve hizmet sağlayıcılardan yararlanabilir. Bu
              kapsamda bazı kişisel veriler, yurt dışında bulunan sunuculara
              aktarılabilir. Bu tür yurt dışı veri aktarımları, 6698 sayılı
              Kişisel Verilerin Korunması Kanunu’nun 9. maddesi ve Genel Veri
              Koruma Tüzüğü (GDPR) hükümleri uyarınca; açık rızanıza dayanarak
              veya ilgili mevzuatta öngörülen yeterli güvenceler sağlanarak
              gerçekleştirilmektedir. Hizmetlerimizin sunulması ve
              geliştirilmesi amacıyla veri barındırma, analitik, müşteri destek
              hizmetleri, pazarlama, reklam, ödeme işlemleri ve güvenlik
              alanlarında üçüncü taraf hizmet sağlayıcılarla çalışılabilir.
              Reklam ve dağıtım ortaklarıyla yapılan paylaşımlar, gerekli ve
              sınırlı olmak kaydıyla, şifrelenmiş veya makine tarafından
              okunabilir formatta gerçekleştirilir. Kurumsal İşlemler: Sniff’in
              faaliyetlerinin bir şirket çatısı altına alınması, şirket
              kurulması, birleşme, devralma, bölünme, yeniden yapılandırma,
              tasfiye, iflas veya hizmetlerin yönetim ve kontrolünde değişiklik
              olması hâlinde, kişisel verileriniz ilgili işlem taraflarına,
              yürürlükteki mevzuata uygun olarak aktarılabilir. Yasal
              Gereklilikler ve Hakların Korunması: Mahkeme kararları, yasal
              talepler, kamu kurumları veya kolluk kuvvetlerinin talepleri
              doğrultusunda; suçun önlenmesi veya tespiti, kamu güvenliğinin ya
              da herhangi bir kişinin hak ve güvenliğinin korunması amacıyla
              kişisel verileriniz paylaşılabilir. Ayrıca Sniff’in yasal
              haklarını korumak, sözleşmelerin uygulanmasını sağlamak,
              dolandırıcılık veya kötüye kullanım faaliyetlerini araştırmak,
              önlemek veya bunlara karşı önlem almak amacıyla veri paylaşımı
              yapılabilir. Açık Rıza ile Paylaşım: Bazı durumlarda kişisel
              verileriniz üçüncü taraflarla paylaşımı için açık rızanız talep
              edilebilir. Bu hâllerde paylaşımın amacı, kapsamı ve tarafları
              size açık ve anlaşılır şekilde bildirilir. Kişisel olmayan
              bilgiler ile kişisel veriler, şifrelenmiş ve makine tarafından
              okunabilir biçimde; hizmetlerimizin veya üçüncü taraf
              platformların analiz, raporlama ve hedef odaklı reklam
              faaliyetlerinde kullanılabilir. Hassas veya özel nitelikli kişisel
              verileriniz, açık izniniz olmaksızın üçüncü taraflarla
              paylaşılmaz. Sniff, kişisel verilerin gizliliğini ve bütünlüğünü
              korumak amacıyla verinin niteliğine uygun olarak şifreleme, erişim
              kısıtlamaları ve düzenli güvenlik kontrolleri gibi teknik ve idari
              önlemler uygular.
            </div>
          </section>

          {/* 8. HAKLARINIZ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Haklarınız
            </h2>
            <div className=" text-gray-500 text-base">
              Sniff’te, uygulama üzerindeki kontrol tamamen sizdedir. Bu
              kapsamda aşağıdaki araçlar ve haklar size sunulmaktadır: Hesap
              Silme: Ayarlar bölümünden “Hesabımı Sil” seçeneğini kullanarak;
              profil bilgileriniz, fotoğraflarınız, yürüyüş kayıtlarınız ve
              takvim verileriniz sistemlerimizden kalıcı ve geri döndürülemez
              şekilde silinir. Hesabınızın silinmesiyle birlikte, diğer
              kullanıcıların erişebildiği tüm kişisel verileriniz de kaldırılır.
              Yasal yükümlülükler gereği saklanması zorunlu olan veriler hariç
              olmak üzere, kişisel verileriniz talebiniz doğrultusunda imha
              edilir. Bilgiye Erişim ve Güncelleme: Kişisel verilerinize
              uygulama üzerinden erişebilir, bu verileri güncelleyebilir veya
              tarafımızdan işlenen kişisel verilerinize ilişkin bir kopya talep
              edebilirsiniz. Talep edilen veriler, yapılandırılmış, yaygın
              olarak kullanılan ve makine tarafından okunabilir bir formatta
              sunulur. Cihaz İzinleri ve Bildirimler: Mobil cihazınız üzerinden
              konum, rehber ve anlık bildirimler gibi verilere ilişkin izinleri
              dilediğiniz zaman yönetebilir veya geri çekebilirsiniz. Açık
              rızaya dayalı veri işleme faaliyetleri, rızanın geri çekilmesi
              hâlinde durdurulur. Bazı izinlerin devre dışı bırakılması,
              uygulamanın belirli işlevlerinin sınırlı çalışmasına neden
              olabilir. İşlemeye İtiraz ve Kısıtlama: Kişisel verilerinizin
              işlenmesine itiraz edebilir veya ilgili mevzuat kapsamında
              verilerinizin işlenmesinin kısıtlanmasını talep edebilirsiniz.
              Talepleriniz, veri işlemenin hukuki dayanağı dikkate alınarak
              değerlendirilir. Kimlik ve Güvenlik: Kişisel veri taleplerinizin
              güvenli şekilde sonuçlandırılabilmesi için kimlik doğrulaması
              talep edilebilir. Hukuka aykırı nitelikte olan veya üçüncü
              kişilerin hak ve özgürlüklerini ihlal edebilecek talepler
              reddedilebilir. Uygulama Kaldırma: Uygulamanın cihazınızdan
              kaldırılması, yeni veri toplanmasını durdurur. Uygulamanın yeniden
              yüklenmesi hâlinde yalnızca teknik zorunluluklar kapsamında,
              kişisel veri niteliği taşımayan anonim tanımlayıcılar
              kullanılabilir ve bu tanımlayıcılar silinmiş kişisel verilerle
              ilişkilendirilmez. Yetkili Otoriteye Başvuru Hakkı: Kişisel
              verilerinizin işlenmesine ilişkin taleplerinizin karşılanmaması
              durumunda, KVKK kapsamında Kişisel Verileri Koruma Kurulu’na, GDPR
              kapsamında ise yetkili veri koruma otoritesine şikâyette
              bulunabilirsiniz. Başvuru Süreleri: Tarafımıza iletilen talepler,
              ilgili mevzuat uyarınca en geç otuz (30) gün içinde
              değerlendirilerek sonuçlandırılır.
            </div>
          </section>

          {/* 9. BİLGİLERİNİZİ ELİMİZDE TUTMA SÜREMİZ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Bilgilerinizi Elimizde Tutma Süremiz
            </h2>
            <div className=" text-gray-500 text-base">
              Kişisel verileriniz, hesabınız aktif olduğu sürece veya yasal
              yükümlülükler gerektirdiği müddetçe saklanır. Hesap silme sonrası
              veriler silinir veya anonimleştirilir. Yasal Gereklilikler:
              Geçerli yasaya uymak için bilgileri tutmamız gerekiyorsa, bazı
              veriler (örneğin trafik verileri) hukuki veri saklama
              yükümlülüklerine uygun olarak bir yıl süreyle saklanır. Yasal Uyum
              Kanıtı: Geçerli yasaya uyumumuzu kanıtlamak için belirli kayıtları
              tutmamız gerekebilir (örneğin, Şartlarımız ve Mahremiyet
              Politikamıza ilişkin izinlerin kayıtları beş yıl süreyle
              saklanır). Çözülmemiş Hak Talepleri veya Anlaşmazlıklar: Çözülene
              kadar ilgili bilgileri elimizde tutmamız gerekebilir. Meşru İş
              Amaçları: Dolandırıcılığı önleme ve kullanıcı güvenliğini sağlama
              gibi meşru iş amaçlarımız doğrultusunda bilgilerin tutulması
              gerekebilir. Örneğin, güvenli olmayan davranışlar veya güvenlik
              olayları nedeniyle yasaklanmış bir kullanıcının yeni hesap
              açmasını önlemek için bilgiler saklanabilir. Sistemlerimiz,
              yukarıdaki yönergeler uyarınca veri silme işlemlerini yürütmek
              üzere tasarlanmış olsa da, teknik kısıtlamalar nedeniyle spesifik
              bir zaman dilimi içerisinde tüm verilerin silineceğinin
              garantisini veremeyiz.
            </div>
          </section>

          {/* 10. ÇOCUKLARIN MAHREMİYETİ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Çocukların Mahremiyeti
            </h2>
            <div className=" text-gray-500 text-base">
              Sniff, yalnızca 18 yaş ve üzeri kullanıcılar için tasarlanmıştır.
              18 yaş altındaki bireylerin verilerini bilerek toplamayız. Bazı
              özellikler, yalnızca 18 yaş ve üzeri kullanıcılar için
              erişilebilir olup, bu yaş sınırı güvenli ve doğru bir deneyim
              sağlamak amacıyla uygulanmaktadır.
            </div>
          </section>

          {/* 11. GİZLİLİK POLİTİKASI DEĞİŞİKLİKLER */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Gizlilik Politikası Değişiklikler
            </h2>
            <div className=" text-gray-500 text-base">
              Sniff, kullanıcılarına her zaman daha iyi bir deneyim sunmayı
              amaçlamaktadır. Bu nedenle Gizlilik Politikamız zaman içinde
              güncellenebilir. Önemli değişiklikler öncesinde sizi
              bilgilendirerek, inceleme fırsatı vereceğiz.
            </div>
          </section>

          {/* 12. BİZİMLE İLETİŞİME GEÇİN */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Bizimle İletişime Geçin
            </h2>
            <div className=" text-gray-500 text-base">
              Bu Gizlilik Politikası Türkçe olarak hazırlanmıştır. Herhangi bir
              çeviri ile Türkçe metin arasında bir çelişki olması halinde,
              Türkçe metin esas alınır. KVKK ve GDPR kapsamındaki tüm
              talepleriniz ile gizlilik uygulamalarımız veya bu Gizlilik
              Politikası hakkındaki soru ve talepleriniz için bizimle aşağıdaki
              iletişim adresi üzerinden iletişime geçebilirsiniz:
              {/* Örnek İletişim Kutusu (Opsiyonel kullanabilirsin) */}
              <div className="mt-4 bg-gray-50 p-6 rounded-xl border border-gray-200 ">
                <p className="font-bold text-gray-900">Sniff Destek</p>
                <a
                  href="mailto:info@kakadulabs.com"
                  className="text-yellow-600 hover:underline"
                >
                  info@kakadulabs.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
