export const generateRandomString = (length: number) => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const generateCodeChallenge = async (codeVerifier: string) => {
  const digest = await crypto.subtle.digest(
    "SHA-256", 
    new TextEncoder().encode(codeVerifier)
  );

  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

export const generateUrlWithParams = (url: string, params: Record<string, string>) => {
  const baseUrl = new URL(url);
  baseUrl.search = new URLSearchParams(params).toString();

  return baseUrl.toString();
};
