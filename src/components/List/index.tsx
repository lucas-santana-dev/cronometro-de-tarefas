import style from "./list.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefa";

function List({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Tarefas do dia</h2>

      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} tarefa={item.tarefa} tempo={item.tempo} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
