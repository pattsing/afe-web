import "./AFEButton.css";
import { useMediaQuery } from "react-responsive";

export interface AFEButtonData {
  title: String;
  isBlack: Boolean;
  onclick: () => void;
}

const AFEButton = (props: AFEButtonData) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div
      className={
        props.isBlack
          ? isMobile
            ? "afe-button-black-mobile"
            : "afe-button-black"
          : isMobile
          ? "afe-button-white-mobile"
          : "afe-button-white"
      }
      onClick={props.onclick}
    >
      {props.title.toUpperCase()}
    </div>
  );
};

export default AFEButton;
