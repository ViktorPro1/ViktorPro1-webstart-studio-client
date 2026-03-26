import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import API from "../../api/api";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (password !== confirm) {
      setStatus("error");
      setMessage("Паролі не збігаються");
      return;
    }
    if (password.length < 8) {
      setStatus("error");
      setMessage("Пароль мінімум 8 символів");
      return;
    }

    const token = searchParams.get("token");
    if (!token) {
      setStatus("error");
      setMessage("Токен відсутній");
      return;
    }

    setStatus("loading");
    try {
      await API.post("/auth/reset-password", { token, password });
      setStatus("success");
      setMessage("Пароль успішно змінено!");
      setTimeout(() => navigate("/"), 2000);
    } catch (err: any) {
      setStatus("error");
      setMessage(err.response?.data?.error || "Помилка. Спробуйте пізніше.");
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
      <h2 style={{ color: "#3b3486" }}>Новий пароль</h2>

      {status === "success" ? (
        <p style={{ color: "#3b3486" }}>{message}</p>
      ) : (
        <>
          <input
            type="password"
            placeholder="Новий пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="password"
            placeholder="Повторіть пароль"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
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
            {status === "loading" ? "Збереження..." : "Змінити пароль"}
          </button>
          {status === "error" && <p style={{ color: "#e53e3e" }}>{message}</p>}
        </>
      )}
    </div>
  );
}
