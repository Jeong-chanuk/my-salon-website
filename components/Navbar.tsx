export default function Navbar() {
  return (
    // 💡 justify-center와 flex-wrap을 지우고, 모든 화면에서 'justify-between(양끝 정렬)'을 하도록 수정했습니다.
    <nav className="w-full flex justify-between items-center py-4 md:py-6 px-4 max-w-5xl mx-auto">
      
      {/* 왼쪽 메뉴 링크들 */}
      {/* 💡 모바일에서 글씨가 너무 꽉 차지 않도록 간격을 gap-3으로 살짝 더 줄였습니다. */}
      <ul className="flex gap-3 sm:gap-4 md:gap-8 text-xs md:text-sm font-medium text-gray-700">
        <li className="hover:text-black cursor-pointer border-b-2 border-black pb-1">Services</li>
        <li className="hover:text-black cursor-pointer pb-1">Stylists</li>
        <li className="hover:text-black cursor-pointer pb-1">Gallery</li>
      </ul>
      
      {/* 오른쪽 예약 버튼 */}
      {/* 💡 버튼 크기도 모바일에 맞게 위아래 여백(py-1.5)을 조금 다듬었습니다. */}
      <button className="bg-[#a8d5c2] text-teal-900 px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-[#8bc5ad] transition-colors whitespace-nowrap">
        Book Now
      </button>
      
    </nav>
  );
}
