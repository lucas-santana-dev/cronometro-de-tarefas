import React from "react";
import style from "./buttom.module.scss";
class Buttom extends React.Component<{
  texto: string;
  type?: "submit" | "reset" | "button" | undefined;
}> {
  render(): React.ReactNode {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.botao}>
        {this.props.texto}
      </button>
    );
  }
}

export default Buttom;
