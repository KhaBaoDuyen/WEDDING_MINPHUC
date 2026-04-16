import { useEffect, useState } from "react";
import "./style.css";
import { Heart } from "lucide-react";
import WeddingHero from "../../components/WeddingHero";
import RSVPForm from "../../components/RSVPForm";
import Gallery from "../../components/Gallery";
import WishLive from "../../components/WishLive";
import { motion } from "framer-motion";

function Home() {
  const [particles, setParticles] = useState<number[]>([]);
  const [guestName, setGuestName] = useState("Quý khách");
  const [showWish, setShowWish] = useState(false);

  useEffect(() => {
    setParticles(Array.from({ length: 30 }, (_, i) => i));
  }, []);


  const fadeDown = {
    initial: { opacity: 0, y: -80 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  };

  const fadeRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  };

  //SCROLL
  useEffect(() => {
    let autoScroll = true;

    const stopScroll = () => {
      autoScroll = false;
    };

    window.addEventListener("wheel", stopScroll);
    window.addEventListener("touchstart", stopScroll);

    const interval = setInterval(() => {
      if (autoScroll) {
        window.scrollBy({
          top: 1,
          behavior: "smooth",
        });
      }
    }, 20);

    return () => {
      clearInterval(interval);
      window.removeEventListener("wheel", stopScroll);
      window.removeEventListener("touchstart", stopScroll);
    };
  }, []);

  //KHACH
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rawName = params.get("name");

    if (rawName) {
      const decoded = decodeURIComponent(rawName);

      const formatted = decoded
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase());

      setGuestName(formatted);
    }
  }, []);

  return (
    <>

      <div className="relative w-full h-[80vh] overflow-hidden ">
        <img
          src="/images/SAM11489.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="pointer-events-none absolute inset-0 z-10">
          {particles.map((i) => {
            const left = Math.random() * 100;
            const duration = 5 + Math.random() * 5;
            const delay = Math.random() * 5;

            return (
              <span
                key={i}
                className="particle"
                style={{
                  left: `${left}%`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>

        <div className="relative z-20 h-full flex flex-col justify-end px-4 pb-[8%]">

          <motion.div className="flex flex-col items-end" {...fadeRight}>
            <div className="flex items-start justify-start gap-2">
              <p className="text-[3rem] text-luxury great-vibes-regular leading-none">
                Our
              </p>
              <p className="text-[6rem] text-luxury Bodoni leading-none">
                Love
              </p>
            </div>
            <p className="text-[6rem] text-luxury Bodoni leading-none">
              Begins
            </p>
          </motion.div>

          <div className="w-full flex justify-between items-center mt-4 text-Gold">

            <motion.div {...fadeDown} className="flex items-center gap-2">
              <span className="tracking-[0.2em] text-luxury font-bold">02</span>
              <Heart className="w-5 h-5 fill-Gold text-luxury text-luxury" />
              <span className="tracking-[0.2em] text-luxury font-bold">05</span>
            </motion.div>

            <motion.div {...fadeDown} className="flex items-center gap-2">
              <span className="tracking-[0.2em] text-luxury font-bold">2026</span>
            </motion.div>

          </div>

        </div>

      </div>


      <div className="p-10 flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-Bronze playfair-display-700 text-center"
        >
          INVITATION
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-Bronze playfair-display-700 text-center">
          TRÂN TRỌNG KÍNH MỜI
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-Red great-vibes-regular text-2xl">
          Kính mời: {guestName}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-Wine text-sm px-5">
          Chúng mình mong muốn được dành một khoảng thời gian ý nghĩa để cùng nhau trao gửi lời hứa thiêng liêng, sẽ luôn ghi nhớ và trân trọng tình yêu ấy suốt đời.
          Rất mong Bạn sẽ bớt chút thời gian đến tham dự, chứng kiến và chúc phúc cho chúng mình trong ngày trọng đại này.
        </motion.div>

        <img src="./images/line.png" alt="" className="w-full object-cover" />
      </div>

      <div className="p-5 flex flex-col bg-Red justify-center items-center gap-4">
        <Heart className="w-5 h-5 fill-Gold text-center text-luxury" />
        <h1 className="text-center text-Gold playfair-display-700 text-xl">
          MY LOVE
        </h1>

        <div className="">
          <div className="grid grid-cols-2 gap-5 ">
            <div className="">
              <div className="flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center text-Bronze playfair-display-700">
                  NHÀ TRAI
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="font-bold playfair-display-700 text-center text-xs text-Gold uppercase">
                  <p>ÔNG: Nguyễn Đình Thành </p>
                  <p>BÀ: Hoàng Thị Tám</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-xs text-center text-Gold  ">
                  Xóm 1-10, xã Trung Lộc, huyện Nghi Lộc, tỉnh Nghệ An
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-3 flex flex-col gap-3">
                <div className="w-full h-[281px] overflow-hidden">
                  <img
                    src="./images/trai.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="">
              <div className="flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center text-Bronze playfair-display-700">
                  NHÀ GÁI
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="font-bold text-center playfair-display-700 text-xs text-Gold uppercase">
                  <p>ÔNG: Võ Minh Dưỡng </p>
                  <p>BÀ: Thái Thị Mỹ Loan</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-xs text-center text-Gold">
                  Khóm 1, Ấp Thường Phước, huyện Hồng Ngự, tỉnh Đồng Tháp
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-3 flex flex-col gap-3">
                <div className="w-full h-[281px] overflow-hidden">
                  <img
                    src="./images/gai.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mt-2">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-Gold great-vibes-regular text-4xl">
              Đình Tài
            </motion.div>
            <img src="./images/hoa.png" alt="" className="w-20 h-20" />
            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-Gold great-vibes-regular text-4xl">
              Minh Phúc
            </motion.p>
          </div>

          <div className="flex flex-col justify-center items-center text-Gold gap-2 mt-4">
            <h1 className="text-xl">Vào lúc</h1>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} className="flex justify-center items-center gap-2 mt-2 text-2xl">
              <h1 className="text-center playfair-display-700">09:00</h1>
              <h1 className="text-center playfair-display-700">|</h1>
              <h1 className="text-center playfair-display-700">02.05.2026</h1>
              <h1 className="text-center playfair-display-700">|</h1>
              <h1 className="text-center playfair-display-700">Thứ Bảy</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-md">Tức ngày 16 tháng 03 năm 2026
            </motion.div>

            <h1 className="text-md font-bold">Tại</h1>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-center playfair-display-700 text-2xl">Tư Gia Nhà Gái</h1>
              <h1 className="text-md text-center"> Khóm 1, Ấp Thường Phước, huyện Hồng Ngự, tỉnh Đồng Tháp</h1>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=10.8082273,105.23993"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-[200px]"
              >
                <iframe
                  src="https://www.google.com/maps?q=10.8082273,105.23993&z=15&output=embed"
                  className="w-full h-full pointer-events-none"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div >

      <WeddingHero />

      <div className="">
        <p className="text-Red px-10 py-5 text-center">
          Chúng mình rất mong sự hiện diện của bạn để cùng nhau chung vui, sẻ chia niềm hạnh phúc và lưu lại những khoảnh khắc đáng nhớ trong ngày cưới
          Đừng quên để lại xác nhận tham dự để chúng mình chuẩn bị chu đáo hơn!
        </p>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-10/12 mx-auto">
          <RSVPForm />
        </motion.div>
      </div>

      <div className="mt-5 p-5">
        <div className="flex flex-col justify-center items-center">
          <Heart className="w-5 h-5 fill-Red text-center " />
          <p className="italic mb-4 great-vibes-regular text-3xl">Ablum ảnh</p>
        </div>
        <div className="">
          <Gallery />
        </div>
      </div>

      <div className="">
        {showWish && <WishLive />}

        <div className="fixed right-3 bottom-12 z-50">

          <div
            onClick={() => setShowWish(!showWish)}
            className="py-3 px-1 rounded-full overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.25)]
            cursor-pointer active:scale-95 transition-all duration-200 bg-Red ">

            <img
              src="./logo.png"
              className="w-8 h-8 object-cover"
            />

            <div className="flex flex-col items-center justify-center gap-2 mt-2">
              {showWish ? (
                <span className="text-white text-xl font-bold leading-none">
                  ✕
                </span>
              ) : (
                <div className="flex flex-col gap-[3px]">
                  <span className="w-5 h-[2px] bg-white rounded"></span>
                  <span className="w-5 h-[2px] bg-white rounded"></span>
                  <span className="w-5 h-[2px] bg-white rounded"></span>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </>

  );
}

export default Home;