// eslint-disable-next-line no-unused-vars
async function getUserCoordinates() {
    if (!navigator.geolocation) {
      throw new Error('Geolocation is not supported by this browser');
    }
  
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      return [ latitude, longitude ];
    } catch (error) {
      throw new Error(`Error getting location: ${error.message}`);
    }
  }

  // Вызов функции через async/await
// eslint-disable-next-line no-unused-vars
export async function main() {
    try {
      const coordinates = await getUserCoordinates();
        return coordinates
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
  
