export default function Map() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-6">
      
      {/* 1. 우아한 전환을 위한 중앙 장식 (메뉴판과 동일한 디자인) */}
      <div className="flex flex-col items-center justify-center mb-16 text-center">
        <div className="w-px h-16 bg-gray-300 mb-4"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#8bb4a3] mb-8"></div>

        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3 tracking-wide">Access & Location</h2>
        <p className="text-[#8bb4a3] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
          サロンへのアクセス
        </p>
        
        <p className="text-gray-500 text-sm font-light leading-relaxed">
          都会の喧騒から離れた、穏やかなプライベート空間。<br className="hidden md:block" />
          皆様のご来店を心よりお待ちしております。
        </p>
      </div>

      {/* 2. 지도 카드 (반투명 유리 질감 적용) */}
      <div className="bg-white/60 backdrop-blur-md rounded-3xl p-4 md:p-8 shadow-sm border border-white">
        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-inner border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7671248!3d35.6812362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2skr!4v1716300000000!5m2!1sen!2skr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-800 font-medium mb-1">SAKURA Hair Salon 東京本店</p>
          <p className="text-gray-500 text-sm">東京都千代田区丸の内1丁目 (東京駅 徒歩3分)</p>
        </div>
      </div>
      
    </section>
  );
}
