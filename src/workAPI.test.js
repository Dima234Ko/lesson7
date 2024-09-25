/* eslint-disable no-undef */
import {
  getAdminURL,
  getKeyAdminAPI,
  getUserURL,
  getKeyUserAPI,
  checkResponse,
} from "./workAPI";

describe("getAdminURL function", () => {
  it("Проверка, что возвращаемое значение строка", () => {
    expect(typeof getAdminURL()).toBe("string");
  });
});

describe("getKeyAdminAPI function", () => {
  it("Проверка, что возвращаемое значение строка", () => {
    expect(typeof getKeyAdminAPI()).toBe("string");
  });
});

describe("getUserURL function", () => {
  it("Проверка, что возвращаемое значение строка", () => {
    expect(typeof getUserURL()).toBe("string");
  });
});

describe("getKeyUserAPI function", () => {
  it("Проверка, что возвращаемое значение строка", () => {
    expect(typeof getKeyUserAPI()).toBe("string");
  });
});

describe("checkResponse function", () => {
  it("Проверка, что статус ответа 200", () => {
    const response = { ok: true, status: 200 };
    expect(checkResponse(response)).toBe(true);
  });
});
