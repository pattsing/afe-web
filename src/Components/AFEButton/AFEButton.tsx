import "./AFEButton.css";

export interface AFEButtonData {
  title: String;
  isBlack: Boolean;
  onclick: () => {};
}

const AFEButton = (props: AFEButtonData) => {
  return (
    <div
      className={props.isBlack ? "afe-button-black" : "afe-button-white"}
      onClick={props.onclick}
    >
      {props.title.toUpperCase()}
    </div>
  );
};

export default AFEButton;
