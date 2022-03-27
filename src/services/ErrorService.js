export default function errorCodes(errorKey) {
  switch (errorKey) {
    case "USER_ALREADY_EXISTS":
      return "We couldn't create your account, try again.";
    case "USER_NOT_FOUND":
      return "Couldn't find account associated with that email.";
    case "BAD_CREDENTIALS":
      return "Invalid credentials.";
    default:
      return "An error occurred, please try again.";
  }
}
