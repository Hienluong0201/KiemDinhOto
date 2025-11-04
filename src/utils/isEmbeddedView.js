export const checkIsEmbedded = (url) => {
  const parsedUrl = new URL(url);
  return parsedUrl.searchParams.get("isEmbedded") === "true";
};
