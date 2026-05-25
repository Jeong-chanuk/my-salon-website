// 맨 위에 Next.js 이미지 도구를 다시 불러옵니다.
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  beforeImage: string;
  afterImage: string; 
}

export default function ServiceCard({ title, description, price, beforeImage, afterImage }: ServiceCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center w-full max-w-3xl mb-6">
      
      <div className="flex gap-2 shrink-0">
        
        {/* Before 사진 (Next.js Image로 변경) */}
        <div className="relative w-32 h-40 rounded-lg overflow-hidden bg-gray-200 shadow-inner">
          <Image 
            src={beforeImage} 
            alt="Before" 
            fill 
            className="object-cover" 
            quality={90} // 화질을 높게 유지하는 옵션 추가
          />
          <div className="absolute bottom-0 w-full bg-black/30 py-1 text-center text-xs text-white font-medium">
            Before
          </div>
        </div>

        {/* After 사진 (Next.js Image로 변경) */}
        <div className="relative w-32 h-40 rounded-lg overflow-hidden bg-gray-200 shadow-inner">
          <Image 
            src={afterImage} 
            alt="After" 
            fill 
            className="object-cover" 
            quality={90} // 화질을 높게 유지하는 옵션 추가
          />
          <div className="absolute bottom-0 w-full bg-black/30 py-1 text-center text-xs text-white font-medium">
            After
          </div>
        </div>

      </div>

      <div className="flex-1 text-left mt-4 md:mt-0">
        <h2 className="text-2xl font-serif text-gray-900 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
        <p className="text-xl font-semibold text-gray-900">{price} ~</p>
      </div>
    </div>
  );
}
