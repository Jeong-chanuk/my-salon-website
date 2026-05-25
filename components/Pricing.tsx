export default function Pricing() {
  return (
    // py-24로 위아래 여백을 주어 숨 쉴 틈을 만듭니다.
    <section className="w-full max-w-4xl mx-auto py-24 px-6">
      
      {/* 1. 우아한 전환을 위한 중앙 장식 (선과 점) */}
      <div className="flex flex-col items-center justify-center mb-16 text-center">
        <div className="w-px h-16 bg-gray-300 mb-4"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#8bb4a3] mb-8"></div>

        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3 tracking-wide">Menu & Pricing</h2>
        <p className="text-[#8bb4a3] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
          基本メニュー
        </p>
        
        <p className="text-gray-500 text-sm font-light leading-relaxed">
          シグネチャースタイル以外にも、お客様の髪の状態や<br className="hidden md:block" />
          ご希望に合わせた多彩なメニューをご用意しております。
        </p>
      </div>

      {/* 2. 메뉴판 카드 (반투명 유리 질감으로 고급스럽게 감싸기) */}
      <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-14 shadow-sm border border-white">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 text-left">
          
          <div className="flex justify-between border-b border-gray-200/60 pb-3">
            <span className="text-gray-700">カット＆ブロー (Cut & Blow Dry)</span>
            <span className="font-semibold text-gray-900">¥7,000</span>
          </div>
          
          <div className="flex justify-between border-b border-gray-200/60 pb-3">
            <span className="text-gray-700">パーマ (Perm)</span>
            <span className="font-semibold text-gray-900">¥14,000</span>
          </div>
          
          <div className="flex justify-between border-b border-gray-200/60 pb-3">
            <span className="text-gray-700">フルカラー (Full Color)</span>
            <span className="font-semibold text-gray-900">¥12,000</span>
          </div>
          
          <div className="flex justify-between border-b border-gray-200/60 pb-3">
            <span className="text-gray-700">ヘッドスパ 30分 (Head Spa)</span>
            <span className="font-semibold text-gray-900">¥5,000</span>
          </div>
          
          <div className="flex justify-between border-b border-gray-200/60 pb-3">
            <span className="text-gray-700">オーガニックカラー (Organic Color)</span>
            <span className="font-semibold text-gray-900">¥14,000</span>
          </div>
          
          <div className="flex justify-between border-b border-gray-200/60 pb-3">
            <span className="text-gray-700">ヘッドスパ 60分 (Premium Spa)</span>
            <span className="font-semibold text-gray-900">¥8,000</span>
          </div>

        </div>
      </div>
      
    </section>
  );
}
