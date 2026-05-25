export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-8 max-w-5xl mx-auto">
      {/* 왼쪽 메뉴 링크들 */}
      <ul className="flex gap-8 text-sm font-medium text-gray-700">
        <li className="hover:text-black cursor-pointer border-b-2 border-black pb-1">Services</li>
        <li className="hover:text-black cursor-pointer pb-1">Stylists</li>
        <li className="hover:text-black cursor-pointer pb-1">Gallery</li>
      </ul>
      
      {/* 오른쪽 예약 버튼 (민트색) */}
      <button className="bg-[#a8d5c2] text-teal-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#8bc5ad] transition-colors">
        Book Now
      </button>
    </nav>
  );
}
