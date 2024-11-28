"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

interface SwiperGalleryProps {
  imageUrls: string[];
}

const SwiperGallery: React.FC<SwiperGalleryProps> = ({ imageUrls }) => (
  <div className="rounded-xl">
    {imageUrls.length > 0 ? (
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        spaceBetween={10}
        slidesPerView={1}
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center p-4">
              <Image
                src={url}
                alt={`Foto ${index + 1}`}
                className="rounded-xl shadow-md"
                width={400}
                height={300}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      <div className="text-gray-400">Nenhuma imagem disponível</div>
    )}
  </div>
);

export default SwiperGallery;
