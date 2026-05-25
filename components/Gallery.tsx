export default function Gallery() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      
      {/* 갤러리 제목 영역 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-gray-900 mb-3">Our Space & Moments</h2>
        <p className="text-sm text-gray-500 tracking-widest uppercase">「自然と調和する安らぎの空間」</p>
      </div>

      {/* 비대칭 그리드 레이아웃 (PC에서는 4칸 분할, 모바일에서는 1칸씩) */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        
        {/* 1번 사진: 가장 큰 메인 인테리어 (가로 2칸, 세로 2칸 차지) */}
        <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-md group cursor-pointer">
          <img 
            src="/images/gallery1.png" 
            alt="Salon Interior" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
          />
        </div>

        {/* 2번 사진: 우측 상단 가로로 긴 사진 (가로 2칸, 세로 1칸 차지) */}
        <div className="md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden shadow-md group cursor-pointer hidden md:block">
          <img 
            src="/images/gallery2.png" 
            alt="Hair Styling" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
          />
        </div>

        {/* 3번 사진: 우측 하단 작은 사진 1 (가로 1칸, 세로 1칸 차지) */}
        <div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden shadow-md group cursor-pointer hidden md:block">
          <img 
            src="/images/gallery3.png" 
            alt="Mirror Space" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
          />
        </div>

        {/* 4번 사진: 우측 하단 작은 사진 2 (가로 1칸, 세로 1칸 차지) */}
        <div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden shadow-md group cursor-pointer hidden md:block">
          <img 
            src="/images/gallery4.png" 
            alt="Blow Drying" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
          />
        </div>

      </div>
    </section>
  );
}
