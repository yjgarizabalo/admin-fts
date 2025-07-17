export interface toDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface Column {
  title: string;
  todos: toDo[];
}
