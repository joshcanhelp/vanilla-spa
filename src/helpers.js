export const nowInSeconds = () => Math.floor(Date.now() / 1000);

export const getUrlParams = () => {
  const urlQuery = window.location.search.replace(/^(\?)/, "").split("&");
  const urlParms = {};
  urlQuery.forEach((element) => {
    const paramParts = element.split("=");
    urlParms[paramParts[0]] = paramParts[1];
  });
  return urlParms;
};

export const getRandomString = () => {
  return crypto.getRandomValues(new Uint8Array(24)).join("");
};

export const convertVerifierToChallenge = async (value) => {
  const arrayBuffer = stringToArrayBuffer(value);
  const digest = await crypto.subtle.digest("SHA-256", arrayBuffer);
  const stringified = arrayBufferToString(digest);
  const base64string = window.btoa(stringified);
  return base64string
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
};

export const isAuthenticated = () => {
  return false;
};

const stringToArrayBuffer = (string) => {
  return new TextEncoder().encode(string);
};

const arrayBufferToString = (buffer) => {
  const uIntArray = new Uint8Array(buffer);
  return String.fromCharCode.apply(null, uIntArray);
};
