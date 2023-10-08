type Tareas = {
  tarea: string;
  borrarTarea: () => void;
};

export const Tarea = ({ tarea, borrarTarea }: Tareas) => {
  return (
    <div className="task">
      <span className="flex">{tarea}</span>
      <button onClick={borrarTarea}>Borrar</button>
    </div>
  );
};
