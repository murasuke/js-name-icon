import "./IconMakerForm.css";
import React, { useState } from "react";
import iconMaker from "./iconMaker";
import NameIcon from "./NameIcon";

const IconMakerForm: React.FC = (props) => {
  const [iconData, setIconData] = useState(null);
  const [txtName, setTxtName] = useState("山田 太郎");
  const [numSize, setNumSize] = useState(32);

  // 画像ダウンロード
  const downloadCanvasImage = async () => {
    const imageUrl = await iconMaker(txtName, { size: numSize });
    setIconData(imageUrl);
    const dlLink = document.createElement("a");
    dlLink.href = imageUrl;
    dlLink.download = "nameicon.png";
    dlLink.click();
    dlLink.remove();
  };

  return (
    <>
      <div>
        <label>
          image size
          <input
            type="number"
            value={numSize}
            onChange={(e) => setNumSize(Number.parseInt(e.target.value))}
          ></input>
        </label>
        <label>
          icon text
          <input
            type="text"
            value={txtName}
            onChange={(e) => setTxtName(e.target.value)}
          ></input>
        </label>

        <button onClick={downloadCanvasImage}>アイコンをダウンロード</button>
      </div>
      <div>
        <img alt="icon" src={iconData} />
      </div>
      <div>
        <NameIcon userName="Taka Nii" />
      </div>
    </>
  );
};

export default IconMakerForm;
