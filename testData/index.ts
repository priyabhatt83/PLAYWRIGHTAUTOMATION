/**
 * Login Data Loader - provides typed access to login test data
 */
import { LoginDataStructure } from './loginData.types';

// Using require with explicit typing
const data = require('./loginData.json') as LoginDataStructure;

export const loginData: LoginDataStructure = data;

// Export individual datasets for easy access
export const {
  validCredentials,
  invalidCredentials,
  invalidUsername,
  invalidPassword,
  emptyCredentials,
  emptyUsername,
  emptyPassword,
  specialCharacters,
  problemUser,
  performanceGlitchUser,
  lockedOutUser,
  error_user,
  virtualUser,
} = data;
