import { databaseConnection } from './connection';
import { UserRepository } from './repository/user-repository';

export const databaseModules = {
  databaseConnection,
  UserRepository
};
