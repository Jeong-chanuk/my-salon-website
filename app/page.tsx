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
        
       {/* 5. 서비스 카드 영역 */}
        <div className="w-full px-4 flex flex-col items-center">
          <ServiceCard
            title="似合わせカット＆スタイリング" // (맞춤 컷 & 스타일링)
            description="お客様一人ひとりの骨格や髪質に合わせたオーダーメイドのカット。まとまりのなかった髪を、ご自宅でも再現しやすい美しいシルエットへと導きます。"
            price="¥6,000"
            beforeImage="/images/Before_Hairstyling_and_Cut.png" 
            afterImage="/images/After_Hairstyling_and_Cut.png"   
          />
          <ServiceCard
            title="プレミアムカラー" // (프리미엄 컬러)
            description="髪へのダメージを最小限に抑えた上質なカラーリング。透明感のある艶やかな色味が長持ちし、立体感のある洗練されたスタイルを実現します。"
            price="¥10,000"
            beforeImage="/images/Before_coloring.png"
            afterImage="/images/After_coloring.png"
          />
          <ServiceCard
            title="髪質改善トリートメント" // (머릿결 개선 트리트먼트)
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
