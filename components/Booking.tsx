export default function Booking() {
  return (
    <section className="w-full max-w-4xl mx-auto pb-32 px-6">
      
      {/* 1. 우아한 전환을 위한 중앙 장식 */}
      <div className="flex flex-col items-center justify-center mb-16 text-center mt-8">
        <div className="w-px h-16 bg-gray-300 mb-4"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#8bb4a3] mb-8"></div>

        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3 tracking-wide">Reservation</h2>
        <p className="text-[#8bb4a3] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
          ご予約・お問い合わせ
        </p>
        
        <p className="text-gray-500 text-sm font-light leading-relaxed">
          ご希望の日時を選択してください。<br className="hidden md:block" />
          専属スタイリストが心を込めて対応させていただきます。
        </p>
      </div>

      {/* 2. 예약 카드 (반투명 유리 질감 및 고급스러운 달력 UI 적용) */}
      <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-sm border border-white flex flex-col items-center">
        
        <div className="flex flex-col md:flex-row gap-12 text-left justify-center w-full max-w-2xl">
          
          {/* 왼쪽: 달력 영역 */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6 font-medium text-gray-800">
              <span className="cursor-pointer hover:text-[#8bb4a3]">&lt;</span>
              <span>May 2026</span>
              <span className="cursor-pointer hover:text-[#8bb4a3]">&gt;</span>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-400 mb-4">
              <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
            </div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-sm text-gray-700">
              <div className="text-gray-300">26</div><div className="text-gray-300">27</div><div className="text-gray-300">28</div><div className="text-gray-300">29</div><div className="text-gray-300">30</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">1</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">2</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">3</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">4</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">5</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">6</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">7</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">8</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">9</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">10</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">11</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">12</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">13</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">14</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">15</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">16</div>
              {/* 선택된 날짜 (민트색 배경) */}
              <div className="bg-[#a8d5c2] rounded-full text-white font-medium py-1 shadow-sm">17</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">18</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">19</div>
              <div className="hover:bg-gray-100 rounded-full cursor-pointer py-1">20</div>
            </div>
          </div>

          {/* 오른쪽: 시간 선택 영역 */}
          <div className="w-full md:w-48">
            <p className="font-medium text-gray-800 mb-6 text-center md:text-left">Available Times</p>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white border border-gray-200 py-2 rounded-lg text-sm text-gray-600 hover:border-[#a8d5c2] hover:text-[#8bb4a3] transition-colors">10:00</button>
              <button className="bg-[#8bb4a3] py-2 rounded-lg text-sm text-white font-medium shadow-md">12:00</button>
              <button className="bg-white border border-gray-200 py-2 rounded-lg text-sm text-gray-600 hover:border-[#a8d5c2] hover:text-[#8bb4a3] transition-colors">14:00</button>
              <button className="bg-white border border-gray-200 py-2 rounded-lg text-sm text-gray-600 hover:border-[#a8d5c2] hover:text-[#8bb4a3] transition-colors">16:00</button>
            </div>
          </div>
        </div>

        {/* 하단 예약하기 버튼 (블랙으로 포인트를 주어 눈에 띄게 합니다) */}
        <div className="mt-12 w-full max-w-sm">
          <button className="w-full bg-gray-900 text-white py-4 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors shadow-lg tracking-widest">
            予約する (BOOK NOW)
          </button>
        </div>

      </div>
      
    </section>
  );
}
