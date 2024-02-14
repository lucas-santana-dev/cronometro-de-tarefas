import Buttom from "../Buttom";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e dê start no contrometro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Buttom texto="Start" />
    </div>
  );
}
