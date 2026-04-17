import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
    onFinish: () => void;
    onStartAudio: () => void;
};

export default function Landing({ onFinish, onStartAudio }: Props) {
    const [scene, setScene] = useState<1 | 2>(1);
    const [started, setStarted] = useState(false);

    const DURATION = 5;

    useEffect(() => {
        ["/images/SAM11560.jpg", "/images/SAM11489.jpg"].forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        if (!started) return;

        if (scene === 1) {
            const t = setTimeout(() => setScene(2), DURATION * 1000);
            return () => clearTimeout(t);
        }

        if (scene === 2) {
            const t = setTimeout(() => onFinish(), DURATION * 1000);
            return () => clearTimeout(t);
        }
    }, [scene, onFinish, started]);

    return (
        <div className="absolute inset-0 h-screen z-50 overflow-hidden bg-black">
            {!started && (
                <div
                    className="absolute inset-0 z-50"
                    onClick={() => {
                        setStarted(true);
                        onStartAudio();
                    }}
                >
                    <img
                        src="/images/SAM11579.jpg"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
                    <div className="absolute inset-0 flex flex-col items-center justify-between text-white py-10">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-25 h-25 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        />

                        <div className="flex flex-col justify-center items-center gap-3">
                            <button className="bg-white text-black hover:text-white text-sm tracking-[0.3em] px-6 py-2 rounded-full border border-white
                             hover:bg-white/10 transition shadow-lg shadow-black/50 ">
                                Chạm để mở thiệp
                            </button>
                            <p className="playfair-display-700">Trân trọng kính mời bạn tham dự</p>

                            <div className="flex justify-center items-center gap-5 playfair-display-700">
                                <p className="text-md font-bold tracking-[0.3em] text-center">THÁNG 05</p>

                                <p className="text-[3rem] tracking-[0.3em] text-center">02</p>

                                <p className="text-md font-bold tracking-[0.3em] text-center">NĂM 2026</p>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {started && (
                <AnimatePresence mode="sync">
                    {scene === 1 && (
                        <motion.div
                            key="scene1"
                            className="absolute inset-0"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.img
                                src="/images/SAM11560.jpg"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ x: "5%", scale: 1.1 }}
                                animate={{ x: "-5%", scale: 1.1 }}
                                transition={{ duration: DURATION, ease: "easeOut" }}
                            />

                            <div className="absolute inset-0 bg-black/40" />

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white ">
                                <div className="flex flex-col justify-center items-left">
                                    <motion.h1
                                        initial={{ x: 40, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        className="text-[clamp(3rem,7vw,5rem)] playfair-display-700"
                                    >
                                        LOVE OF
                                    </motion.h1>

                                    <div className="flex items-center gap-6">
                                        <motion.h1
                                            initial={{ x: -80, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                            className="text-[clamp(3rem,7vw,5rem)] playfair-display-700"
                                        >
                                            LIFE
                                        </motion.h1>

                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: 70 }}
                                            transition={{ duration: 1, delay: 0.6 }}
                                            className="h-[2px] bg-white"
                                        />
                                    </div>
                                </div>

                                <div className="font-bold w-full px-8 flex justify-between text-white text-[0.6rem] tracking-[0.3em]">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 1 }}
                                    >
                                        WEDDING
                                    </motion.span>

                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 1 }}
                                    >
                                        INVITATION
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {scene === 2 && (
                        <motion.div
                            key="scene2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0"
                        >
                            <motion.img
                                src="/images/SAM11489.jpg"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.4 }}
                                transition={{ duration: DURATION, ease: "easeOut" }}
                            />

                            <div className="absolute inset-0 bg-black/40" />

                            <div className="absolute inset-0 text-white flex flex-col justify-center items-center">
                                <div className="flex flex-col justify-center items-right">
                                    <motion.h1
                                        initial={{ x: -40, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.6 }}
                                        className="text-[clamp(3rem,7vw,5rem)] playfair-display-700"
                                    >
                                        BLESSING
                                    </motion.h1>

                                    <div className="flex items-center gap-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: 70 }}
                                            transition={{ duration: 1, delay: 0.9 }}
                                            className="h-[2px] bg-white"
                                        />

                                        <motion.h1
                                            initial={{ x: 80, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 1, delay: 1.2 }}
                                            className="text-[clamp(3rem,7vw,5rem)] playfair-display-700 text-shadow"
                                        >
                                            BEGINS
                                        </motion.h1>
                                    </div>
                                </div>

                                <div className="font-bold w-full px-8 flex justify-between text-white text-[0.6rem] tracking-[0.3em]">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 1 }}
                                    >
                                        WEDDING
                                    </motion.span>

                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 1 }}
                                    >
                                        INVITATION
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
}