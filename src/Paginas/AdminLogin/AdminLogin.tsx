import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import style from "./AdminLogin.module.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/admin/dashboard");
    } catch (err: any) {
      setErro("Login inválido. Verifique email/senha.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleLogin} className={style.form}>
        <h2 className={style.title}>Login</h2>

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={style.input}
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && <p className={style.erroMsg}>{erro}</p>}

        <button type="submit" className={style.button} disabled={loading}>
          {loading ? (
            <CircularProgress size={20} style={{ color: "white" }} />
          ) : (
            "Entrar"
          )}
        </button>
      </form>
    </div>
  );
}
