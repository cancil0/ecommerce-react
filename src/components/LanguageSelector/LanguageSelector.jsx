import useLanguage from "../../hooks/useLanguage";
import "./LanguageSelector.css";
import Dropdown from "react-bootstrap/Dropdown";
import TrFlag from "../../assets/Flags/Tr.png";
import EnFlag from "../../assets/Flags/En.png";

const LanguageSelector = () => {
  const [lang, setLang] = useLanguage();

  const handleSelect = (cultereInfo) => {
    setLang(cultereInfo);
  };
  return (
    <>
      <Dropdown className="d-inline mx-2" onSelect={handleSelect}>
        <Dropdown.Toggle id="dropdown-autoclose-true">
          <img className="flag" src={lang.flag} alt="flag" />
          {lang.languageText}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="en-US">
            <img className="flag" src={EnFlag} alt="en flag" />
            English
          </Dropdown.Item>
          <Dropdown.Item eventKey="tr-TR">
            <img className="flag" src={TrFlag} alt="tr flag" />
            Türkçe
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default LanguageSelector;
