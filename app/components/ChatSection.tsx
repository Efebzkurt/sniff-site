import React from "react";
import Image from "next/image";
import { Calendar, Check } from "lucide-react";

const ChatSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* --- SOL TARAF: CHAT UI --- */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[380px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-50 overflow-hidden">
              {/* Chat Header (Sadeleştirildi) */}
              <div className="bg-gray-50 px-6 py-4 flex items-center border-b border-gray-100">
                <div className="flex items-center gap-3">
                  {/* Avatar (İkili Profil) */}
                  <div className="relative w-12 h-12 mr-1">
                    {/* 1. İNSAN FOTOSU */}
                    <div className="relative w-10 h-10 rounded-full border-3 border-yellow-400 overflow-hidden shadow-sm">
                      <Image
                        src="https://images.unsplash.com/photo-1739133783212-e1c93795d9c7?auto=format&fit=crop&crop=faces&w=600&h=450&q=80"
                        alt="Pelin"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* 2. KÖPEK FOTOSU */}
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-3 border-yellow-400 overflow-hidden shadow-md bg-white z-10">
                      <Image
                        src="https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?auto=format&fit=crop&crop=faces&w=800&h=300&q=80"
                        alt="Oscar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* İsim Kısmı (Çevrimiçi yazısı kaldırıldı) */}
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      Pelin & Oscar
                    </h4>
                  </div>
                </div>

                {/* Sağdaki Video/Telefon ikonları tamamen kaldırıldı */}
              </div>

              {/* Mesaj Alanı */}
              <div className="p-6 space-y-6 bg-white min-h-[400px]">
                {/* 1. Mesaj (Karşı Taraf - Gri) */}
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-[10px] text-blue-600 font-bold mb-1">
                    P
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-5 py-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm leading-relaxed relative">
                    <p>
                      Merhaba, Riko ve sen müsaitseniz yarın sabah 10.00 gibi
                      yürüyüşe çıkalım mı? 🌳🐕
                    </p>
                    <span className="text-[10px] text-gray-400 absolute bottom-1 right-3">
                      09:41
                    </span>
                  </div>
                </div>

                {/* 2. Mesaj (Ben - Sarı) */}
                <div className="flex items-end justify-end gap-2">
                  <div className="bg-yellow-400 text-black px-5 py-3 rounded-2xl rounded-tr-none max-w-[85%] text-sm leading-relaxed shadow-sm relative">
                    <p>Süper, Riko da biraz eğlenmiş olur! 🐾</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-black/60">09:42</span>
                      {/* Check ikonu kaldırıldı */}
                    </div>
                  </div>
                </div>

                {/* 3. Sistem Mesajı (Yürüyüş Planlandı) */}
                <div className="flex justify-center py-2">
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-4 w-full max-w-[90%] shadow-sm">
                    <div className="bg-yellow-100 p-2.5 rounded-lg text-yellow-600">
                      <Calendar size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Yürüyüş Planlandı
                      </p>
                      <p className="text-gray-900 font-bold text-sm">
                        Yarın, 10:00
                      </p>
                    </div>
                    <div className="text-green-500">
                      <Check size={20} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Alanı */}
              <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                  +
                </div>
                <div className="flex-1 h-10 bg-white rounded-full border border-gray-200 px-4 text-xs flex items-center text-gray-400">
                  Mesaj yaz...
                </div>
              </div>
            </div>
          </div>

          {/* --- SAĞ TARAF: TEXT CONTENT --- */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-6">
              Mesajlaş
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Yürüyüşünü Planla ve <br />
              <span className="text-yellow-500">Harekete Geç</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Eşleşmelerinle mesajlaş, ortak yürüyüş planla. Patili dostunla
              olan rutin yürüyüşlerini sosyal bir aktiviteye dönüştür.
            </p>

            <ul className="space-y-4 text-gray-700 mx-auto md:mx-0 max-w-md">
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full text-green-600">
                  <Check size={16} />
                </div>
                <span>Uçtan uca güvenli mesajlaşma</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full text-green-600">
                  <Check size={16} />
                </div>
                <span>Otomatik takvim hatırlatıcıları</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full text-green-600">
                  <Check size={16} />
                </div>
                <span>Konum paylaşımı ile kolay buluşma</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
