export interface TodoGroup {
  title: string;
  items: TodoItem[];
}

export interface TodoItem {
  title: string;
  status: TodoStatus;
  description: string
}

export enum TodoStatus {
  NOT_STARTED,
  IN_PROGRESS,
  DONE
}
