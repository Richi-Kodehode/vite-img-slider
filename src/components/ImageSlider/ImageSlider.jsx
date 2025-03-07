import { useState } from "react";
import { currentImages } from "./data/currentImages";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaCircle } from "react-icons/fa6";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextIndex() {
    setCurrentIndex((prev) => (prev < currentImages.length - 1 ? prev + 1 : 0));
  }
  function previousIndex() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : currentImages.length - 1));
  }

  return (
    <div className="max-w-[1080px] m-auto py-3 px-4 relative group rounded-2xl flex justify-center grow-0 shrink-0">
      <div className="flex overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${currentImages.length * 100}%`,
          }}
        >
          {currentImages.map((image, index) => (
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
      <span className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {currentImages.map((_, index) => {
          return (
            <button
              className="cursor-pointer text-white/50 flex flex-row justify-center"
              key={index}
              onClick={() => setCurrentIndex(index)}
            >
              <FaCircle className="hover:scale-80" />
            </button>
          );
        })}
      </span>
    </div>
  );
}
