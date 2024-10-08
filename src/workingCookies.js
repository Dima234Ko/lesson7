/* eslint-disable no-unused-vars */
 
 

export function setCookie(name, value) {
  const cookieString = `${name}_${new Date().getTime()}=${value};`;
  document.cookie = cookieString;
}

export function deleteCookieWithValue(value) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieValue === value) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
    }
  }
}

export function getCookieValuesWithButton() {
  const cookies = document.cookie.split(";");
  const buttonCookies = [];
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName.includes("button")) {
      buttonCookies.push(cookieValue);
    }
  }
  return buttonCookies;
}

export function clearAllCookies(buttons) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [cookieName] = cookie.split("=");
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
  }
}
