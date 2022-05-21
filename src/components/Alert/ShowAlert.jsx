import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

/**
 *
 * @param {string} data.header Header Text
 * @param {string} data.body Body Text
 * @param {string} data.closeButtonText Text on Close Button
 * @param {string} data.closeButtonText Text on Open Button
 * @returns Shows an Alert
 */
const ShowAlert = ({ data }) => {
  const [show, setShow] = useState(true);
  const { t } = useTranslation();
  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>{data.header ?? t("Alert.Notification")}</Alert.Heading>
        <p>{data.body}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            {data.closeButtonText ?? t("Alert.Close")}
          </Button>
        </div>
      </Alert>

      {!show && (
        <Button onClick={() => setShow(true)}>{data.openButtonText ?? t("Alert.Okey")}</Button>
      )}
    </>
  );
};

export default ShowAlert;
