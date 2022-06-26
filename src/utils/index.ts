import { sign, verify } from 'jsonwebtoken';
import { ObjectID } from 'typeorm';

const createToken = (id: ObjectID) => {
  const token = sign({ id }, process.env.JWT_SECRET);

  return token;
};

const verifyToken = (token: string) => {
  const decoded = verify(token, process.env.JWT_SECRET);

  return decoded;
};

export { createToken, verifyToken };
