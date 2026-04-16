import { motion } from "framer-motion";

const images = [
  { src: "/images/SAM11489.jpg", span: "col-span-2 row-span-2" },
  { src: "/images/SAM11560.jpg", span: "" },
  { src: "/images/SAM11610.jpg", span: "" },
  { src: "/images/SAM11693.jpg", span: "col-span-3" },
  { src: "/images/ab-trai.jpg", span: "" },
  { src: "/images/SAM11746.jpg", span: "" },
  { src: "/images/ab-phai.jpg", span: "" },
];

function Gallery() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-2 auto-rows-[200px] md:auto-rows-[200px]">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden ${img.span}`}
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
              className="w-full h-full object-cover"
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

        <div className="absolute bottom-6 left-0 w-8/12 text-white px-4 playfair-display-700">

          <p className="text-xl tracking-[0.3em]">
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
    </div>
  );
}

export default Gallery;