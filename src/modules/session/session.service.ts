import jwt from "jsonwebtoken";

export const generateToken = async (email: string, password: string) => {
  const token = jwt.sign(
    {id: "123", role: "admin", email: "asd@asd.com"},
    process.env.JWT_SECRET!,
    {expiresIn: "1d"}
  )

  return token;
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string)
}
