import Navbar from '../components/Navbar';
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
        <Gallery />
        {/* 서비스 카드 영역 */}
        <div className="w-full px-4 flex flex-col items-center">
          <ServiceCard
            title="Hairstyling & Cut"
            description="High quality natural lighting photography for dull and uneven hair. Transform with a stylish hair treatment."
            price="¥6,000"
            beforeImage="/images/Before_Hairstyling_and_Cut.png" // 👈 여기 사진 이름을 수정하세요
            afterImage="/images/After_Hairstyling_and_Cut.png"   // 👈 여기 사진 이름을 수정하세요
          />
          <ServiceCard
            title="Coloring"
            description="Premium Color. High quality natural lighting photography and ensure slow fade. Balayage color transformation."
            price="¥10,000"
            beforeImage="/images/Before_coloring.png"
            afterImage="/images/After_coloring.png"
          />
          <ServiceCard
            title="Treatments"
            description="Deep Conditioning. High quality natural lighting. Protects shiny, healthy and conditioning hair."
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
