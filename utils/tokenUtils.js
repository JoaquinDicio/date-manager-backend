import jwt from "jsonwebtoken";

export function generateToken(payload) {
  return jwt.sign(payload, process.env.__SECRET_WORD);
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.__SECRET_WORD);
    if (decoded) return decoded;
  } catch (err) {
    if (err) return false;
  }
}
