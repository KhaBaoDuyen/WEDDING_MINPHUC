import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  { src: "/images/SAM11489.jpg", span: "col-span-2 row-span-2", ratio: "aspect-[3/4]" }, // ảnh cưới dọc
  { src: "/images/SAM11560.jpg", ratio: "aspect-[3/4]" },
  { src: "/images/SAM11610.jpg", ratio: "aspect-[3/4]" },
  { src: "/images/SAM11693.jpg", span: "col-span-3", ratio: "aspect-[16/9]" }, // ảnh ngang
  { src: "/images/ab-trai.jpg", ratio: "aspect-[3/4] object-contain" },
  { src: "/images/SAM11746.jpg", ratio: "aspect-[3/4]" },
  { src: "/images/ab-phai.jpg", ratio: "aspect-[3/4]" },
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const currentImg = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden cursor-pointer ${img.span || ""} ${img.ratio}`}
            onClick={() => setSelectedIndex(index)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative overflow-hidden mt-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
        viewport={{ once: true }}
      >
        <img
          src="/images/SAM11578.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-0 w-full text-white px-4 playfair-display-700">

          <p className="text-xl tracking-[0.3em] ">
            TRÂN TRỌNG
          </p>

          <p className="text-lg ml-[6rem] tracking-[0.5em]">
            &
          </p>

          <p className="text-xl text-right tracking-[0.3em]">
            BIẾT ƠN !
          </p>

        </div>
      </motion.div>
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            src={selectedImg}
            alt=""
            className="max-w-[90%] max-h-[90%] object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}{selectedIndex !== null && currentImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >

          <button
            className="absolute left-1 w-10 h-10 flex items-center justify-center 
  rounded-full bg-Red text-white text-2xl z-50
  shadow-lg backdrop-blur-sm transition"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) =>
                prev !== null ? (prev - 1 + images.length) % images.length : 0
              );
            }}
          >
            ←
          </button>

          <motion.img
            src={currentImg.src}
            alt=""
            className="max-w-[90%] max-h-[90%] object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-1 w-10 h-10 flex items-center justify-center 
  rounded-full bg-Red text-white text-2xl z-50
  shadow-lg backdrop-blur-sm transition"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) =>
                prev !== null ? (prev + 1) % images.length : 0
              );
            }}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;