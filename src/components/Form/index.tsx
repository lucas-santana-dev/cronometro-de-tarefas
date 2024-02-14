import React from "react";
import Buttom from "../Buttom";
import style from "./form.module.scss";
import { ITarefa } from "../../types/tarefa";

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };
  adicionarTarefa(evento: React.FormEvent) {
    evento.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state },
    ]);
  }

  render(): React.ReactNode {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione uma nova tarefa</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(newValue) =>
              this.setState({ ...this.state, tarefa: newValue.target.value })
            }
            id="tarefa"
            placeholder="Qual tarefa de hoje?"
            required
          ></input>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo para tarefa</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(newValue) =>
              this.setState({ ...this.state, tempo: newValue.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          ></input>
        </div>
        <Buttom texto="Adicionar" type="submit" />
      </form>
    );
  }
}

export default Form;
