import { useState } from "react";
import { useTranslation } from "react-i18next";

import EnFlag from "../assets/Flags/En.png";
import TrFlag from "../assets/Flags/Tr.png";

export default function useLanguage() {
  const { i18n } = useTranslation();
  var cultereInfo = setCultereInfo();

  const getLang = () => {
    return getLangObj(cultereInfo);
  };

  const [lang, setLang] = useState(getLang());

  const saveLang = (cultereInfo) => {
    const langObj = getLangObj(cultereInfo);
    i18n.changeLanguage(langObj.cultereCode);
    sessionStorage.setItem("cultereInfo", cultereInfo);
    setLang(langObj);
  };

  return [lang, saveLang];
}

const setCultereInfo = () => {
  return (
    sessionStorage.getItem("cultereInfo") ??
    (navigator.language === "tr-TR" || navigator.language === "en-US"
      ? navigator.language
      : "en-US")
  );
};

const getLangObj = (cultereInfo) => {
  return {
    cultereInfo: cultereInfo,
    languageText: getLangAsText(cultereInfo),
    flag: getFlag(cultereInfo),
    cultereCode: getCultereCode(cultereInfo),
  };
};

const getLangAsText = (cultereInfo) => {
  return cultereInfo === "en-US" ? "English" : "Türkçe";
};

const getFlag = (cultereInfo) => {
  return cultereInfo === "en-US" ? EnFlag : TrFlag;
};

const getCultereCode = (cultereInfo) => {
  return cultereInfo.slice(0, 2);
};
