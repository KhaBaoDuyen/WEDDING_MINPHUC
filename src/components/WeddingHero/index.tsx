import { useEffect, useState } from "react";

function WeddingHero() {
    const weddingDate = new Date("2026-05-02T00:00:00");

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date();
        const diff = weddingDate.getTime() - now.getTime();

        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const daysInMonth = 31;

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <style>
                {`
                @keyframes floatUpDown {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: floatUpDown 2.5s ease-in-out infinite;
                }
                `}
            </style>

            <img
                src="./images/SAM11610.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />

            <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                
                <div className="flex justify-end mb-2">
                    <p className="great-vibes-regular text-5xl animate-float">
                        Wedding
                    </p>
                </div>

                <div className="flex justify-end mb-6">
                    <div className="grid grid-cols-7 gap-3 text-center text-sm w-2/3">
                        {Array.from({ length: daysInMonth }, (_, i) => {
                            const day = i + 1;
                            const isWeddingDay = day === 2;

                            return (
                                <div
                                    key={day}
                                    className="relative w-8 h-8 flex items-center justify-center"
                                >
                                    {isWeddingDay && (
                                        <img
                                            src="./images/calen_heart_1.png"
                                            alt=""
                                            className="absolute w-10 h-10 object-contain"
                                        />
                                    )}

                                    <span className={`relative z-10 ${isWeddingDay ? "text-white font-bold" : ""}`}>
                                        {day}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <p className="italic mb-4 great-vibes-regular text-3xl">Chỉ còn....</p>

                    <div className="flex gap-3">
                        {[
                            { label: "ngày", value: timeLeft.days },
                            { label: "giờ", value: timeLeft.hours },
                            { label: "phút", value: timeLeft.minutes },
                            { label: "giây", value: timeLeft.seconds },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white text-black px-4 py-2 rounded-xl text-center min-w-[60px]"
                            >
                                <p className="font-bold">{item.value}</p>
                                <p className="text-xs">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WeddingHero;