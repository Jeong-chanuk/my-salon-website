export default function Navbar() {
  return (
    // 💡 flex-wrap을 추가해서 자리가 모자라면 자연스럽게 아랫줄로 넘어가게 만들었습니다.
    // 💡 md:justify-between 은 PC에서만 양끝으로 벌리고, 모바일에서는 가운데 정렬(justify-center)을 합니다.
    <nav className="w-full flex justify-center md:justify-between items-center py-4 md:py-6 px-4 max-w-5xl mx-auto flex-wrap gap-4">
      
      {/* 왼쪽 메뉴 링크들 */}
      {/* 💡 모바일에서는 글씨 크기(text-xs)와 간격(gap-4)을 줄여서 예쁘게 들어맞게 합니다. */}
      <ul className="flex gap-4 md:gap-8 text-xs md:text-sm font-medium text-gray-700">
        <li className="hover:text-black cursor-pointer border-b-2 border-black pb-1">Services</li>
        <li className="hover:text-black cursor-pointer pb-1">Stylists</li>
        <li className="hover:text-black cursor-pointer pb-1">Gallery</li>
      </ul>
      
      {/* 오른쪽 예약 버튼 */}
      {/* 💡 whitespace-nowrap을 추가해서 버튼 안의 글씨가 절대 두 줄로 깨지지 않게 방어합니다. */}
      <button className="bg-[#a8d5c2] text-teal-900 px-5 py-2 md:px-6 rounded-full text-xs md:text-sm font-semibold hover:bg-[#8bc5ad] transition-colors whitespace-nowrap">
        Book Now
      </button>
      
    </nav>
  );
}

