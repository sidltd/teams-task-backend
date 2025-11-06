import { User } from "./user.model";

export const getAssignees = async () => {
  return User.where({role: "user"})
};
