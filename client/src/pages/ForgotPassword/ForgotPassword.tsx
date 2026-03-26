import { useState } from "react";
import API from "../../api/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email) return;
    setStatus("loading");
    try {
      await API.post("/auth/forgot-password", { email });
      setStatus("success");
      setMessage(
        "Якщо email існує в системі — лист надіслано. Перевірте пошту.",
      );
    } catch {
      setStatus("error");
      setMessage("Помилка. Спробуйте пізніше.");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#3b3486" }}>Забули пароль?</h2>
      <p>Введіть ваш email — ми надішлемо посилання для скидання паролю.</p>

      {status === "success" ? (
        <p style={{ color: "#3b3486" }}>{message}</p>
      ) : (
        <>
          <input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            style={{
              background: "#3b3486",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {status === "loading" ? "Надсилаємо..." : "Надіслати"}
          </button>
          {status === "error" && <p style={{ color: "#e53e3e" }}>{message}</p>}
        </>
      )}
    </div>
  );
}
