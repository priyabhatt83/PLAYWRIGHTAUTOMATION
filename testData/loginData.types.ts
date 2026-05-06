/**
 * Type definitions for Login Test Data
 */

/**
 * Basic credentials type - username and password
 */
export interface Credentials {
  username: string;
  password: string;
}

/**
 * Credentials with optional error message (for locked out users or negative tests)
 */
export interface CredentialsWithError extends Credentials {
  errorMessage?: string;
}

/**
 * Complete login data structure
 */
export interface LoginDataStructure {
  validCredentials: Credentials;
  invalidCredentials: CredentialsWithError;
  invalidUsername: CredentialsWithError;
  invalidPassword: CredentialsWithError;
  emptyCredentials: CredentialsWithError;
  emptyUsername: CredentialsWithError;
  emptyPassword: CredentialsWithError;
  specialCharacters: CredentialsWithError;
  problemUser: Credentials;
  performanceGlitchUser: Credentials;
  lockedOutUser: CredentialsWithError;
  error_user: Credentials;
  virtualUser: Credentials;
}
