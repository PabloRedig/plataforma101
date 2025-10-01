import { useState } from "react";
import ProtectedRoute from "../../Components/ProtectedRoute/ProtectedRoute";
import { signOut } from "firebase/auth";
import { auth, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import style from './AdminDashboard.module.css'

export default function AdminDashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<string | null>(null);

  const handleLogout = () => {
    signOut(auth);
    window.location.href = "/admin/login";
  };

  const handleUpload = async () => {
    if (!file) return alert("Selecione um arquivo primeiro!");

    try {
      setUploading(true);

      // cria referência no Storage
      const storageRef = ref(storage, `uploads/${file.name}`);

      // faz upload
      await uploadBytes(storageRef, file);

      // pega a URL pública
      const downloadURL = await getDownloadURL(storageRef);
      setUrl(downloadURL);

      alert("Upload concluído!");
    } catch (err) {
      console.error(err);
      alert("Erro ao fazer upload.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <ProtectedRoute>
      <>
        <div className={style.container}>
          <div className={style.title}>
            <span></span>
            <p>Painel Administrador</p>
             <button
            onClick={handleLogout}
            className={style.button}
          >
            Sair
          </button>
          </div>

          <div className={style.menu}>
            <h2 className="text-xl font-semibold mb-2">Upload de Mídia</h2>
                
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mb-2"
            />

            <button
              onClick={handleUpload}
              disabled={uploading}
              className={style.button}
              id={style.Enviar}
            >
              {uploading ? "Enviando..." : "Fazer Upload"}
            </button>

            {url && (
              <div className="mt-4">
                <p className="text-green-600">Upload feito com sucesso!</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Ver arquivo
                </a>
              </div>
            )}
          </div>
        </div>
      </>
    </ProtectedRoute>
  );
}
