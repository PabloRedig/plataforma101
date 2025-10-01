import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import style from "./AdminLogin.module.css"

import TextField from '@mui/material/TextField';

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      window.location.href = "/admin/dashboard"; // redireciona
    } catch (err: any) {
      setErro("Login inválido. Verifique email/senha.");
    }
  };

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleLogin} className={style.form}>
          <h2 className={style.title}>Login</h2>

          <TextField id={style.input}
            label="Email"
            variant="outlined"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={style.input}
          />
          <TextField id={style.input}
            label="Senha"
            variant="outlined"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            
          />

          {erro && <p className={style.erroMsg}>{erro}</p>}
          <button type="submit" className={style.button}>
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}
