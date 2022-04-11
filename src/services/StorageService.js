export function storeTokens(accessToken, refreshToken, rememberMe) {
  localStorage.setItem(rememberMe);
  // if (rememberMe) {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  // } else {
  // localStorage.setItem("accessToken", accessToken);
  // localStorage.setItem("refreshToken", refreshToken);
  // }
}
