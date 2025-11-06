import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  status: "pending" | "in_progress" | "done";
  assignee: mongoose.Types.ObjectId;
}

const taskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "in_progress", "done"],
    default: "pending"
  },
  assignee: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { 
  timestamps: true,
  toJSON: {
    transform(doc, ret: any) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      delete ret.__v;
    },
  },
 });

export const Task = mongoose.model<ITask>("Task", taskSchema);
