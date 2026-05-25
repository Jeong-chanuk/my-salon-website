export default function Pricing() {
  return (
    <div className="w-full max-w-3xl mx-auto py-16 text-center">
      <h2 className="text-3xl font-serif text-gray-900 mb-10">Menu & Pricing</h2>
      
      {/* 2단 다단 편집(Grid)을 사용하여 메뉴를 정렬합니다 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 text-left px-8">
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-700">Cut & Blow Dry</span>
          <span className="font-semibold">¥7,000</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-700">Perm</span>
          <span className="font-semibold">¥14,000</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-700">Full Color</span>
          <span className="font-semibold">¥12,000</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-700">Head Spa (30min)</span>
          <span className="font-semibold">¥5,000</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-700">Plant Spa</span>
          <span className="font-semibold">¥14,000</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-700">Head Spa (60min)</span>
          <span className="font-semibold">¥8,000</span>
        </div>
      </div>
    </div>
  );
}
