import { useState } from "react";
import ProtectedRoute from "../../Components/ProtectedRoute/ProtectedRoute";
import { signOut } from "firebase/auth";
import { auth, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import style from './AdminDashboard.module.css';
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Slide, { type SlideProps } from "@mui/material/Slide";

// Função para animação de slide da esquerda
function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="right" />;
}

export default function AdminDashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [severity, setSeverity] = useState<"success" | "error">("success");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleLogout = () => {
    signOut(auth);
    window.location.href = "/admin/login";
  };

  const handleUpload = async () => {
    if (!file) {
      setSeverity("error");
      setMessage("Selecione um arquivo primeiro!");
      setOpenSnackbar(true);
      return;
    }

    try {
      setUploading(true);

      const storageRef = ref(storage, `uploads/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setUrl(downloadURL);

      setSeverity("success");
      setMessage("Upload concluído com sucesso!");
      setOpenSnackbar(true);
    } catch (err) {
      console.error(err);
      setSeverity("error");
      setMessage("Erro ao fazer upload.");
      setOpenSnackbar(true);
    } finally {
      setUploading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ProtectedRoute>
      <div className={style.container}>
        <div className={style.title}>
          <p>Painel Administrador</p>
          <span></span>
          <button onClick={handleLogout} className={style.button}>
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
            {uploading ? (
              <CircularProgress size={20} style={{ color: "white" }} />
            ) : (
              "Fazer Upload"
            )}
          </button>

          {/* Snackbar Pop-up */}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={10000} // 10 segundos
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            TransitionComponent={SlideTransition} // animação slide
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={severity}
              sx={{
                width: '100%',
                backgroundColor: severity === "success" ? "#4caf50" : "#f44336",
                color: "#fff",
              }}
            >
              {message}
              {url && severity === "success" && (
                <div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 underline ml-2"
                  >
                    Ver arquivo
                  </a>
                </div>
              )}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </ProtectedRoute>
  );
}
