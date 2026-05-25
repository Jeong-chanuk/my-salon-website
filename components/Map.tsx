export default function Map() {
  return (
    <div className="w-full max-w-3xl mx-auto py-16 text-center px-4">
      <h2 className="text-3xl font-serif text-gray-900 mb-8">Location</h2>
      
      {/* 지도를 담을 둥근 모서리의 예쁜 박스입니다 */}
      <div className="w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
        <iframe
          // src 안의 엄청 길고 복잡한 주소가 바로 구글 지도의 고유 좌표입니다.
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7671248!3d35.6812362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2skr!4v1716300000000!5m2!1sen!2skr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      {/* 지도 아래에 간단한 텍스트 주소도 적어줍니다 */}
      <p className="mt-4 text-gray-600 text-sm">
        도쿄도 지요다구 마루노우치 1초메 (SAKURA 미용실 도쿄 본점)
      </p>
    </div>
  );
}
