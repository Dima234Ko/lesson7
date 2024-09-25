/* eslint-disable no-undef */
import { main, getUserCoordinates } from "./location";

describe("main function", () => {
  it("Проверка, что возвращается объект с координатами", async () => {
    const result = await main();
    expect(result).toBeInstanceOf(Object);
    expect(result).toHaveProperty("lat");
    expect(result).toHaveProperty("lon");
  });
});

describe("getUserCoordinates", () => {
  beforeEach(() => {
    // Mock the navigator.geolocation object
    global.navigator.geolocation = {
      getCurrentPosition: jest.fn(),
    };
  });

  afterEach(() => {
    // Reset the mock
    jest.resetAllMocks();
  });

  it("Возврат координат", async () => {
    global.navigator.geolocation.getCurrentPosition.mockImplementation(
      (success) => {
        success({
          coords: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        });
      },
    );

    const coordinates = await getUserCoordinates();
    expect(coordinates).toEqual([37.7749, -122.4194]);
  });

  it("сообщение об ошибке, если геолокация не поддерживается", async () => {
    global.navigator.geolocation = null;

    await expect(getUserCoordinates()).rejects.toThrowError(
      "Geolocation is not supported by this browser",
    );
  });
});
