import React, { useState } from "react";
import { FaCopy } from "react-icons/fa"; // 문서 아이콘

const CopyButton = () => {
  const [textToCopy, setTextToCopy] = useState(
    "여기에 복사할 텍스트가 들어갑니다!"
  );
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy); // 텍스트 복사
      setCopySuccess("복사 완료!");
    } catch (err) {
      setCopySuccess("복사 실패");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <p>{textToCopy}</p>
      <button
        onClick={handleCopy}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FaCopy style={{ marginRight: "8px" }} /> 복사하기
      </button>
      {copySuccess && <p>{copySuccess}</p>}
    </div>
  );
};

export default CopyButton;
