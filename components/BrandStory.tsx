export default function BrandStory() {
  return (
    <section className="w-full max-w-5xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-16">
      
      {/* 왼쪽 텍스트 영역 (일본어 적용) */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-snug">
          日常に、<br />
          洗練された<span className="text-[#8bb4a3] italic">優雅さ</span>を。
        </h2>
        
        {/* 고급스러운 얇은 장식 선 */}
        <div className="w-12 h-px bg-gray-400 mb-8 mx-auto md:mx-0"></div>
        
        <p className="text-gray-600 leading-loose text-sm md:text-base font-light">
          SAKURA Hair Salonは、単なるスタイリングを超え、<br className="hidden md:block" />
          お客様が本来持つ「隠れた美しさ」を引き出すプライベート空間です。<br /><br />
          東京トップクラスのスタイリストが、厳選された製品と<br className="hidden md:block" />
          繊細なタッチで、日々の疲れが溜まった髪と心に極上の癒しをお届けします。<br /><br />
          あなただけの贅沢な時間が流れる場所で、<br className="hidden md:block" />
          SAKURAならではの特別なおもてなしをご体験ください。
        </p>
      </div>

      {/* 오른쪽 감성 사진 영역 */}
      <div className="flex-1 w-full">
        <div className="relative h-[450px] w-full rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-xl border-4 border-white">
          <img 
            src="/images/gallery1.png" 
            alt="Salon Story" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      
    </section>
  );
}
