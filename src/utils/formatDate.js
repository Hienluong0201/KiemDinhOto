export const formatDate = (isoString) => {
  if (!isoString) return "—";

  const date = new Date(isoString);

  // Format thành dạng 26/01/2024 09:34
  const formatter = new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Ho_Chi_Minh",
  });

  return formatter.format(date);
};
