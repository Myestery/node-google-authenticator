import { cleanEnv, port, str } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    JWT_SECRET: str(),
    MONGO_URL: str(),
    TWO_FACTOR_AUTHENTICATION_APP_NAME: str(),
    PORT: port(),
  });
}

export default validateEnv;
