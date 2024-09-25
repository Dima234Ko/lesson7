export async function openweathermapApi(city) {
  let response = await fetch(
    getAdminURL() +
      "q=" +
      city +
      "&limit=1&appid=" +
      "&appid=" +
      getKeyAdminAPI(),
    { method: "GET" },
  );
  if (checkResponse) {
    return await response.json();
  }
}

export async function openweathergeoApi(coords) {
  let response = await fetch(
    getUserURL() +
      "lat=" +
      coords[0] +
      "&lon=" +
      coords[1] +
      `&limit=1&appid=${getKeyUserAPI()}`,
    { method: "GET" },
  );

  if (checkResponse) {
    return await response.json();
  }
}

export function getAdminURL() {
  return "https://openweathermap.org/data/2.5/find?";
}

export function getKeyAdminAPI() {
  return "439d4b804bc8187953eb36d2a8c26a02&_=1726339180386";
}

export function getUserURL() {
  return "https://api.openweathermap.org/geo/1.0/reverse?";
}

export function getKeyUserAPI() {
  return "813c35b4fc3ef7e0c16420d3e7bfdce6";
}

export function checkResponse(response) {
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  } else return true;
}
