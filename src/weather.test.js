/* eslint-disable no-console */
 
/* eslint-disable no-undef */
import {
  getCondition,
  getTempCity,
  getWindSpeed,
  getHumidity,
  getPressure,
} from "./weather";

describe("weatherFunctions", () => {
  const data = {
    list: [
      {
        main: {
          temp: 283.15,
          humidity: 60,
          pressure: 1013,
        },
        wind: {
          speed: 5,
        },
      },
    ],
  };

  it("getTempCity should return correct temperature", () => {
    expect(getTempCity(data)).toBe("10");
  });

  it("getWindSpeed should return correct wind speed", () => {
    expect(getWindSpeed(data)).toBe(5);
  });

  it("getHumidity should return correct humidity", () => {
    expect(getHumidity(data)).toBe(60);
  });

  it("getPressure should return correct pressure", () => {
    expect(getPressure(data)).toBe("1000");
  });
});

describe("getCondition", () => {
  it("Проверка, что значение облачно", () => {
    const data = {
      list: [
        {
          weather: [
            {
              main: "Clouds",
            },
          ],
        },
      ],
    };

    expect(getCondition(data)).toBe("Облачно");
  });

  it("Проверка, что значение ясно", () => {
    const data = {
      list: [
        {
          weather: [
            {
              main: "Clear",
            },
          ],
        },
      ],
    };

    expect(getCondition(data)).toBe("Ясно");
  });

  it("Проверка, что значение дождь", () => {
    const data = {
      list: [
        {
          weather: [
            {
              main: "Rain",
            },
          ],
        },
      ],
    };

    expect(getCondition(data)).toBe("Дождь");
  });

  it("should return correct condition for снег", () => {
    const data = {
      list: [
        {
          weather: [
            {
              main: "Snow",
            },
          ],
        },
      ],
    };

    expect(getCondition(data)).toBe("Снег");
  });

  it("Проверка, что значение не определено", () => {
    const data = {
      list: [
        {
          weather: [
            {
              main: "Unknown",
            },
          ],
        },
      ],
    };

    jest.spyOn(console, "log");

    getCondition(data);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("Undefined");
  });
});
