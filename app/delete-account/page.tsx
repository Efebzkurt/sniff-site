import React from "react";

const DeleteAccount = () => {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- BAŞLIK --- */}
        <div className="mb-10 border-b border-gray-100 pb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Hesap Silme
          </h1>
          <p className="text-gray-500 text-lg">
            Sizi aramızdan ayrılırken görmek bizi üzer, ancak kararınıza saygı
            duyuyoruz.
          </p>
        </div>

        {/* --- İÇERİK --- */}
        <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
          <p>
            Hesabınızı silmek istiyorsanız, güvenliğiniz ve veri doğrulama
            süreçlerimiz gereği manuel bir talep oluşturmanız gerekmektedir.
            Lütfen aşağıdaki adımları takip edin.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. E-posta Gönderme
            </h2>
            <p className="mb-3">
              Hesap sahibi olarak, kayıtlı e-posta adresiniz üzerinden silme
              talebinizi aşağıdaki adrese iletmelisiniz:
            </p>
            <p className="font-bold text-gray-900 mb-3">info@kakadulabs.com</p>
            <p className="text-gray-600">
              Lütfen e-postanızın konu kısmına{" "}
              <strong className="text-gray-900">
                &quot;Hesap Silme Talebi&quot;
              </strong>{" "}
              yazmayı unutmayın.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. Ek Bilgiler
            </h2>
            <p className="mb-2">
              Hesabın güvenliğini sağlamak ve işlemi yapanın gerçekten siz
              olduğunuzu doğrulamak için e-posta içeriğine şunları ekleyin:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sniff Hesabınızdaki Mail Adresiniz</li>
              <li>Kimliğinizi doğrulayabilecek ek bilgiler</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Onay ve İşlem Süreci
            </h2>
            <p className="mb-2">
              Gönderdiğiniz e-posta ekibimiz tarafından alındıktan sonra,
              talebiniz en kısa sürede değerlendirilecektir. Onay alındıktan
              sonra; kişisel verileriniz, yüklediğiniz fotoğraflar ve mesaj
              geçmişiniz sistemlerimizden <strong>kalıcı olarak</strong>{" "}
              silinecektir.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-red-600 mb-2">Dikkat</h2>
            <p>
              Hesap silme işlemi geri alınamazdır. Lütfen işlem öncesinde önemli
              bilgilerinizi veya dosyalarınızı yedeklediğinizden emin olun.
            </p>
          </section>

          <p className="text-gray-500 text-sm pt-4">Sniff Ekibi</p>
        </div>
      </div>
    </main>
  );
};

export default DeleteAccount;
