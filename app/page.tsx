import Navbar from '../components/Navbar';
import BrandStory from '../components/BrandStory';
import Gallery from '../components/Gallery';
import ServiceCard from '../components/ServiceCard';
import Pricing from '../components/Pricing';
import Booking from '../components/Booking';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf6f5] to-[#e6f4f1] font-sans">
      <Navbar />

      <div className="flex flex-col items-center pt-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif tracking-widest text-gray-900 mb-2">SAKURA</h1>
          <p className="text-sm tracking-widest text-gray-500 uppercase">Hair Salon</p>
        </div>

        <BrandStory />

        <Gallery />
        
        {/* ========================================= */}
        {/* 4. 우아한 전환을 위한 징검다리 (에디토리얼 스타일) */}
        {/* ========================================= */}
        <div className="w-full flex flex-col items-center mt-32 mb-16 px-4 text-center">
          
          {/* 세로형 그라데이션 선 (시선을 아래로 부드럽게 유도합니다) */}
          <div className="w-px h-24 bg-gradient-to-b from-gray-400 to-transparent mb-10"></div>
          
          <h2 className="text-4xl font-serif text-gray-900 mb-3 tracking-widest">Signature Styles</h2>
          <p className="text-[#8bb4a3] text-xs font-semibold tracking-[0.3em] uppercase mb-8">
            サクラの特別メニュー
          </p>
          
          <p className="text-gray-500 text-sm md:text-base leading-loose max-w-2xl font-light">
            お客様の骨格や髪質、ライフスタイルに合わせて、<br className="hidden md:block" />
            本来の美しさを引き出す最適なスタイルをご提案します。<br />
            確かな技術とセンスで、あなたの「なりたい」を叶えます。
          </p>
        </div>

        {/* 5. 서비스 카드 영역 (카드들 사이의 간격도 gap-8로 조금 더 넓혀서 여유를 줍니다) */}
        <div className="w-full px-4 flex flex-col items-center gap-8 mb-20">
          <ServiceCard
            title="似合わせカット＆スタイリング" 
            description="お客様一人ひとりの骨格や髪質に合わせたオーダーメイドのカット。まとまりのなかった髪を、ご自宅でも再現しやすい美しいシルエットへと導きます。"
            price="¥6,000"
            beforeImage="/images/Before_Hairstyling_and_Cut.png" 
            afterImage="/images/After_Hairstyling_and_Cut.png"   
          />
          <ServiceCard
            title="プレミアムカラー" 
            description="髪へのダメージを最小限に抑えた上質なカラーリング。透明感のある艶やかな色味が長持ちし、立体感のある洗練されたスタイルを実現します。"
            price="¥10,000"
            beforeImage="/images/Before_coloring.png"
            afterImage="/images/After_coloring.png"
          />
          <ServiceCard
            title="髪質改善トリートメント" 
            description="髪の芯から潤いを満たす、最高級のディープコンディショニング。パサつきやダメージを根本から補修し、シルクのような滑らかで健康的な艶髪へ。"
            price="¥8,000"
            beforeImage="/images/Before_Treatments.png"
            afterImage="/images/After_Treatments.png"
          />
        </div>
      </div>

      {/* 새롭게 추가된 가격표, 예약 달력, 푸터 컴포넌트들 */}
      <Pricing />
      <Map />
      <Booking />
      <Footer />

    </main>
  );
}
