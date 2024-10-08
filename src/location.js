export async function getUserCoordinates() {
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported by this browser");
  }

  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    return [latitude, longitude];
  } catch (error) {
    throw new Error(`Error getting location: ${error.message}`);
  }
}

export async function main() {
  try {
    const coordinates = await getUserCoordinates();
    return coordinates;
  } catch (error) {
    return { lat: null, lon: null, error: error.message };
  }
}
