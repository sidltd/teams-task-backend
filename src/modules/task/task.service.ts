import { Task } from "./task.model";
import { ITask } from "./task.model";

export const createTask = (data: Partial<ITask>) => {
  return Task.create(data);
};

export const getTasks = () => {
  return Task.find().populate("assignee", "name email");
};

export const updateTask = (id: string, data: Partial<ITask>) => {
  return Task.findByIdAndUpdate(id, data).populate("assignee");
};

export const deleteTask = (id: string) => {
  return Task.findByIdAndDelete(id);
};
