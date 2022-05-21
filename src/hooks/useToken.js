import { useState } from "react";
import { translate } from "../base/i18n/i18n";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    if (tokenString) {
      setUserSession(tokenString);
    }
    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", userToken);
    setToken(userToken);
  };

  return [token, saveToken];
}

const decodeToken = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

const setUserSession = (token) => {
  const decodedToken = decodeToken(token);
  checkToken(decodedToken);
  Object.entries(decodedToken).forEach(([key, value]) => {
    sessionStorage.setItem(key, value);
  });
};

const checkToken = (decodedToken) => {
  let dateNow = Date.now() / 1000;
  if (decodedToken.exp < dateNow) {
    alert(translate("Alert.ExpiredSession"));
    sessionStorage.clear();
  }
};
