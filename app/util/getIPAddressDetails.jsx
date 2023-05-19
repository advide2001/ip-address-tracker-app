export default async function fetchIPData(ipAddress) {
  const apiUrl = `http://ip-api.com/json/${ipAddress}?fields=58356`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
