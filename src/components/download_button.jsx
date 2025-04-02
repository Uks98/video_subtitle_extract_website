import React from "react";
import { Download } from "lucide-react";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  Font,
  BlobProvider,
  View,
} from "@react-pdf/renderer";
import NotoSansKRMedium from "../asset/fonts/NotoSansKR-Light.ttf";

Font.register({
  family: "NotoSansKR-Light",
  src: NotoSansKRMedium,
});

const buttonStyles = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  dark: "bg-gray-900 hover:bg-gray-800 text-white",
  txt: "bg-white hover:bg-gray-100 text-black border border-gray-300",
  pdf: "bg-[#C40C0C] hover:bg-gray-100 hover:text-black text-white border border-gray-300",
};

const sizeStyles = {
  small: "p-2 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  text: {
    fontFamily: "NotoSansKR-Light",
    fontSize: 16,
    marginBottom: 10,
  },
});

const MyDocument = ({ subtitles }) => (
  <Document>
    <Page style={styles.page}>
      {subtitles.map((subtitle, index) => (
        <Text key={index} style={styles.text}>
          {subtitle.text}
        </Text>
      ))}
    </Page>
  </Document>
);

const DownloadButton = ({
  size = "medium",
  theme = "primary",
  iconOnly = false,
  text,
  subtitles,
  fileName,
}) => {
  if (theme === "pdf") {
    return (
      <BlobProvider document={<MyDocument subtitles={subtitles} />}>
        {({ url, loading, error }) => {
          if (loading) return "PDF 생성 중...";
          if (error) return "PDF 생성 실패";

          return (
            <a href={url} download={`${fileName}.pdf`}>
              <button
                className={`flex items-center justify-center rounded-lg shadow-md transition-all ${
                  buttonStyles[theme]
                } ${sizeStyles[size]} ${iconOnly ? "w-10 h-10" : "gap-2"}`}
              >
                <Download className="w-5 h-5" />
                {!iconOnly && <span>{text}</span>}
              </button>
            </a>
          );
        }}
      </BlobProvider>
    );
  }

  // TXT 파일 저장 함수
  const saveAsTxt = (subtitles, fileName) => {
    if (subtitles != null) {
      const txtContent = subtitles.map((s) => s.text).join("\n \n");
      const blob = new Blob([txtContent], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${fileName}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    if (subtitles == null) {
      alert("txt 파일을 제공하지 않습니다.");
    }
  };

  const onHandleDownload = () => {
    if (theme === "txt") {
      saveAsTxt(subtitles, fileName);
    }
  };

  return (
    <button
      onClick={onHandleDownload}
      className={`flex items-center justify-center rounded-lg shadow-md transition-all ${
        buttonStyles[theme]
      } ${sizeStyles[size]} ${iconOnly ? "w-10 h-10" : "gap-2"}`}
    >
      <Download className="w-5 h-5" />
      {!iconOnly && <span>{text}</span>}
    </button>
  );
};

export default DownloadButton;
