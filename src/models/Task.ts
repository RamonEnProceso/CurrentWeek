export interface Task {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
  finalDate: string;
  todoList?: Record<string, boolean>;
}

export interface Difference {
  difference: number;
  hoursDifference: number;
  daysDifference: number;
  weeksDifference: number;
}
