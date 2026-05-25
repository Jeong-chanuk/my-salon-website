export default function Navbar() {
  return (
    // 💡 끝부분에 `relative z-50`을 추가해서 메뉴바를 화면의 가장 맨 위층으로 끌어올렸습니다!
    <nav className="w-full flex justify-between items-center py-4 md:py-6 px-4 max-w-5xl mx-auto relative z-50">
      
      {/* 왼쪽 메뉴 링크들 */}
      <ul className="flex gap-3 sm:gap-4 md:gap-8 text-xs md:text-sm font-medium text-gray-700">
        <li className="hover:text-black cursor-pointer border-b-2 border-black pb-1">Services</li>
        <li className="hover:text-black cursor-pointer pb-1">Stylists</li>
        <li className="hover:text-black cursor-pointer pb-1">Gallery</li>
      </ul>
      
      {/* 오른쪽 예약 버튼 */}
      <button className="bg-[#a8d5c2] text-teal-900 px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-[#8bc5ad] transition-colors whitespace-nowrap shadow-sm">
        Book Now
      </button>
      
    </nav>
  );
}
