import { type ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLogado(!!user);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return logado ? <>{children}</> : <p>Acesso negado</p>;
}
