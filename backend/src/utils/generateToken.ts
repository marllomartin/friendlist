import jwt from 'jsonwebtoken';

const secret = 'secret_key';

function generateToken(payload: object) {
  const token = jwt.sign({ data: payload }, secret, {
    expiresIn: '24h',
    algorithm: 'HS256',
  });

  return token;
}

export default generateToken;
