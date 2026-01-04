export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "doing" | "done";
  finalDate: string;
  todoList?: Record<string, boolean>;
}
