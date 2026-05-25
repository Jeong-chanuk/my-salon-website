export default function Footer() {
  return (
    <footer className="w-full bg-[#fdf6f5] py-8 px-12 mt-16 border-t border-red-50 text-sm text-gray-600 flex justify-between items-end">
      <div>
        <p className="font-semibold text-gray-800 mb-1">SAKURA Hair Salon</p>
        <p>T: 123 456 6789</p>
        <p>E-mail: sakura@gmail.com</p>
      </div>
      
      <div className="text-center pb-2">
        <p className="font-semibold">SNS 아이콘 영역</p>
      </div>

      <div className="cursor-pointer hover:text-black">
        Back to Top ↑
      </div>
    </footer>
  );
}

