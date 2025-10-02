import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={style.loadingContainer}>
      <div className={style.spinner}></div>      
    </div>
  );
}
