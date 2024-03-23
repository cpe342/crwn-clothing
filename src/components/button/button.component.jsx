/*
    Button Types:
    -default
    -inverted
    -google sign-in
*/

import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const buttonTypeClass =
    buttonType in BUTTON_TYPE_CLASSES ? BUTTON_TYPE_CLASSES[buttonType] : "";
  return (
    <button className={`button-container ${buttonTypeClass}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
