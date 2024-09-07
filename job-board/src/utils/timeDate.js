function convertUnixTimestamp(unixTimestamp) {
  // Create a new Date object using the Unix timestamp (in milliseconds)
  const date = new Date(unixTimestamp * 1000);

  // Get day, month, year
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const year = date.getFullYear();

  // Get hours, minutes, seconds
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Format the date and time as DD/MM/YYYY, HH:MM:SS
  return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}

export default convertUnixTimestamp;
