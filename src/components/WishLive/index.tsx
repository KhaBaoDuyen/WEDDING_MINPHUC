import { useEffect, useState } from "react";
import "./style.css";
import { Heart } from "lucide-react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz22q9wdfo8kd5mDV0f7q78QCPT8zbcNUh5H5mYnutOxAEM2kdLpwy2FBOJHYuuWMIQ/exec";

export default function WishLive() {
    const [messages, setMessages] = useState<any[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ name: "", text: "" });
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState("");

    const showToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(""), 2500);
    };

    useEffect(() => {
        const fetchMessages = async () => {
            const res = await fetch(`${SCRIPT_URL}?type=wish`);
            const data = await res.json();

            setMessages((prev) => {
                const newData = data.slice(-10);

                if (JSON.stringify(prev) === JSON.stringify(newData)) {
                    return prev;
                }

                return newData;
            });
        };

        fetchMessages();
        const interval = setInterval(fetchMessages, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleSend = async () => {
        if (!form.name || !form.text) {
            showToast("Nhập đầy đủ nha 😢");
            return;
        }

        if (loading) return;

        try {
            setLoading(true);

            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify({
                    type: "wish",
                    name: form.name,
                    message: form.text,
                }),
            });

            showToast("Đã gửi lời chúc ❤️");
            setForm({ name: "", text: "" });
            setShowForm(false);
        } catch {
            showToast("Gửi thất bại 😢");
        } finally {
            setTimeout(() => setLoading(false), 500);
        }
    };

    return (
        <>
            {toast && (
                <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg">
                    {toast}
                </div>
            )}

            {/* 🔥 LIST CHẠY */}
            <div className="fixed bottom-20 left-2 z-50 w-[70%] h-[200px] overflow-hidden pointer-events-none">
                <div className="scroll-track">
                    {[...messages, ...messages].map((msg, i) => (
                        <div key={i} className="comment-item">
                            <span className="font-bold text-Gold">{msg.name}: </span>
                            {msg.message}
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={() => setShowForm(true)}
                className="fixed bottom-6 left-4 z-50 bg-Red text-white px-4 py-2 rounded-full shadow-lg"
            >
                Gửi lời chúc...
            </button>

            {showForm && (
                <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
                    <div className="bg-white w-full max-w-[430px] rounded-t-3xl p-6 relative">

                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute right-4 top-4 text-gray-400"
                        >
                            ✕
                        </button>

                        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                            <Heart className="w-16 h-16 text-Red fill-Red text-center " />
                        </div>

                        <h2 className="text-center text-xl font-semibold mt-8 mb-6">
                            Lời chúc
                        </h2>

                        <input
                            disabled={loading}
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            placeholder="Tên của bạn"
                            className="w-full border border-Red p-3 rounded-lg mb-4"
                        />

                        <textarea
                            disabled={loading}
                            value={form.text}
                            onChange={(e) =>
                                setForm({ ...form, text: e.target.value })
                            }
                            placeholder="Lời chúc của bạn"
                            className="w-full border border-Red p-3 rounded-lg mb-6"
                            rows={3}
                        />

                        <button
                            onClick={handleSend}
                            disabled={loading}
                            className={`w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-Red hover:scale-[1.02] active:scale-[0.98]"
                                } text-white`}
                        >
                            {loading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    Đang gửi...
                                </>
                            ) : (
                                "Gửi Lời Chúc"
                            )}
                        </button>

                    </div>
                </div>
            )}
        </>
    );
}