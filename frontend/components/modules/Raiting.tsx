'use client'
const Raiting = () => {
    const percent = (4.7 / 5) * 100 
  return (
    <div className="flex gap-4 items-center text-sm">
      <div className="relative">
        <div className="flex text-gray-300 text-lg">★★★★★</div>

        <div
          className="text-lg absolute top-0 left-0 overflow-hidden text-shop_light_green"
          style={{ width: `${percent}%` }}
        >
          ★★★★★
        </div>
      </div>
      <span className="text-gray">{Math.ceil(Math.random() * 20)} Reviews</span>
    </div>
  );
};

export default Raiting;
