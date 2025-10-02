import { type ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Loading from "../Loanding/Loading";

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

  if (loading) return <Loading />;

  return logado ? <>{children}</> : <p>Acesso negado</p>;
}
