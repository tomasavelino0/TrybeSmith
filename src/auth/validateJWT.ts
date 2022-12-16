import jwt from 'jsonwebtoken';

const jwtConfig: object = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export default function generationToken(userEmail: string) {
  return jwt.sign(
    { data: userEmail },
    process.env.JWT_SECRET as string,
    jwtConfig,
  );
}
