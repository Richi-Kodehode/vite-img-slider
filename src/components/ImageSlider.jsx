import { useState } from "react";
import { carImages } from "./data/carimages";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextIndex() {
    setCurrentIndex((prev) => (prev < carImages.length - 1 ? prev + 1 : 0));
  }
  function previousIndex() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : carImages.length - 1));
  }

  return (
    <div className="max-w-[1024px] m-auto py-3 px-4 relative group rounded-2xl flex justify-center">
      <div className="aspect-5/4 flex overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${carImages.length * 100}%`,
          }}
        >
          {carImages.map((image, index) => (
            <img
              key={index}
              className="w-full h-full object-cover"
              src={image.src}
              alt=""
            />
          ))}
        </div>
      </div>

      <div
        onClick={previousIndex}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer "
      >
        <BsChevronCompactLeft size={30} />
      </div>

      <div
        onClick={nextIndex}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}
