import React from "react";
export default function PlayCard({ title, banner }) {
  return (
    <div
      className="h-96 md:h-[40rem] object-cover bg-cover bg-center bg-no-repeat py-8 md:py-16 "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex justify-center items-center  w-full h-full p-6">
        <p className="bg-white text-baseColor font-semibold text-4xl md:text-5xl px-8 py-6 md:px-32 md:py-8 lg:px-40 lg:py-12 ">
          {title}
        </p>
      </div>
    </div>
  );
}
