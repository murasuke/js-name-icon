import './IconMakerForm.css';
import React, { useState } from 'react';
import iconMaker from './iconMaker';

const IconMakerForm: React.FC = (props) => {
  const [iconData, setIconData] = useState(null);
  const [txtName, setTxtName] = useState('山田 太郎');

  // 画像ダウンロード
  const downloadCanvasImage = async() => {
    const imageUrl = await iconMaker(txtName);
    setIconData(imageUrl);
    const dlLink = document.createElement("a"); 
    dlLink.href = imageUrl;
    dlLink.download = 'nameicon.png';
    dlLink.click();
    dlLink.remove();  
  };

  return (
  <>
    <div>
      <input type="text" value={txtName} onChange={(e) => setTxtName(e.target.value)}></input>      
      <button onClick={downloadCanvasImage}>アイコンをダウンロード</button>
    </div>
    <div>
      <img alt='icon' src={iconData} />
    </div>
  </>
  );
};

export default IconMakerForm;
