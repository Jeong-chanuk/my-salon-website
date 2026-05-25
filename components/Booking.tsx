export default function Booking() {
  return (
    <div className="w-full max-w-3xl mx-auto py-16 text-center">
      <h2 className="text-3xl font-serif text-gray-900 mb-8">Appointment Booking</h2>
      
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 text-left justify-center inline-flex">
        
        {/* 왼쪽: 가짜 달력 영역 */}
        <div className="w-64">
          <div className="flex justify-between items-center mb-4 font-semibold text-gray-900">
            <span>&lt;</span>
            <span>May 2026</span>
            <span>&gt;</span>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 mb-2">
            <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700">
            {/* 임의의 날짜들 */}
            <div className="text-gray-300">26</div><div className="text-gray-300">27</div><div className="text-gray-300">28</div><div className="text-gray-300">29</div><div className="text-gray-300">30</div>
            <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>
            <div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div>16</div>
            <div className="bg-[#a8d5c2] rounded-full w-6 h-6 flex items-center justify-center mx-auto text-teal-900">17</div>
            <div>18</div><div>19</div><div>20</div><div>21</div><div>22</div><div>23</div><div>24</div>
          </div>
        </div>

        {/* 오른쪽: 시간 선택 영역 */}
        <div className="w-48">
          <p className="font-semibold text-gray-900 mb-4">Times</p>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-100 py-1 rounded text-sm text-gray-600 hover:bg-[#a8d5c2] hover:text-teal-900">10:00</button>
            <button className="bg-[#a8d5c2] py-1 rounded text-sm text-teal-900 font-medium">12:00</button>
            <button className="bg-gray-100 py-1 rounded text-sm text-gray-600 hover:bg-[#a8d5c2] hover:text-teal-900">14:00</button>
            <button className="bg-gray-100 py-1 rounded text-sm text-gray-600 hover:bg-[#a8d5c2] hover:text-teal-900">16:00</button>
            <button className="bg-gray-100 py-1 rounded text-sm text-gray-600 hover:bg-[#a8d5c2] hover:text-teal-900">18:00</button>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <button className="bg-[#8bb4a3] text-white px-10 py-3 rounded-full text-sm font-semibold hover:bg-[#739b8a] transition-colors shadow-md">
          Book Now
        </button>
      </div>
    </div>
  );
}
