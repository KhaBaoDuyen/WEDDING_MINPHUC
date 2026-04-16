import { useState } from "react";

type RSVPData = {
  name: string;
  status: "tham_gia" | "khong_tham_gia";
};

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz22q9wdfo8kd5mDV0f7q78QCPT8zbcNUh5H5mYnutOxAEM2kdLpwy2FBOJHYuuWMIQ/exec";

function RSVPForm() {
  const [form, setForm] = useState<RSVPData>({
    name: "",
    status: "tham_gia",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setMessage("Vui lòng nhập tên");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // 🔥 quan trọng
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          type: "rsvp", // 🔥 phân biệt dữ liệu
          name: form.name,
          status: form.status,
        }),
      });

      setMessage("Đã gửi xác nhận ❤️");
      setForm({ name: "", status: "tham_gia" });

    } catch {
      setMessage("Gửi thất bại 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-5 rounded-xl shadow"
      >
        <h2 className="text-center great-vibes-regular text-3xl font-semibold mb-6">
          Xác nhận tham dự
        </h2>

        <label className="text-sm mb-1 block">Họ và tên</label>
        <input
          type="text"
          placeholder="Nhập tên của bạn"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full border border-gray-300 p-3 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-Red"
        />

        <p className="text-sm mb-3">Bạn sẽ tham dự chứ?</p>

        <div className="flex flex-col gap-3 mb-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              checked={form.status === "tham_gia"}
              onChange={() =>
                setForm({ ...form, status: "tham_gia" })
              }
              className="accent-Red w-4 h-4"
            />
            <span>Chắc chắn rồi</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              checked={form.status === "khong_tham_gia"}
              onChange={() =>
                setForm({ ...form, status: "khong_tham_gia" })
              }
              className="accent-Red w-4 h-4"
            />
            <span>Xin lỗi, mình không tham dự được</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition ${
            loading
              ? "bg-gray-400"
              : "bg-Red hover:opacity-90"
          }`}
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Đang gửi...
            </>
          ) : (
            "Gửi xác nhận"
          )}
        </button>

        {message && (
          <p className="text-center text-sm mt-4 text-gray-600">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default RSVPForm;