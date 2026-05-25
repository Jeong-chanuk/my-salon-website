export default function Gallery() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      
      {/* 갤러리 제목 영역 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-gray-900 mb-3">Our Space & Moments</h2>
        <p className="text-sm text-gray-500 tracking-widest">自然と調和する安らぎの空間</p>
      </div>

      {/* 💡 모바일에서는 2칸(grid-cols-2), PC에서는 4칸(md:grid-cols-4)으로 분할합니다 */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 h-auto md:h-[600px]">
        
        {/* 1번 사진: 모바일 꽉 차게(2칸), PC 2x2칸 */}
        <div className="col-span-2 md:col-span-2 md:row-span-2 h-64 md:h-auto rounded-2xl overflow-hidden shadow-md group cursor-pointer">
          <img 
            src="/images/gallery1.png" 
            alt="Salon Interior" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
          />
        </div>

        {/* 2번 사진: 모바일 꽉 차게(2칸), PC 2x1칸 */}
        <div className="col-span-2 md:col-span-2 md:row-span-1 h-48 md:h-auto rounded-2xl overflow-hidden shadow-md group cursor-pointer">
          <img 
            src="/images/gallery2.png" 
            alt="Hair Styling" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
          />
        </div>

        {/* 3번 사진: 모바일 절반 차지(1칸), PC 1x1칸 */}
        <div className="col-span-1 md:col-span-1 md:row-span-1 h-40 md:h-auto rounded-2xl overflow-hidden shadow-md group cursor-pointer">
          <img 
            src="/images/gallery3.png" 
            alt="Mirror Space" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
          />
        </div>

        {/* 4번 사진: 모바일 절반 차지(1칸), PC 1x1칸 */}
        <div className="col-span-1 md:col-span-1 md:row-span-1 h-40 md:h-auto rounded-2xl overflow-hidden shadow-md group cursor-pointer">
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
