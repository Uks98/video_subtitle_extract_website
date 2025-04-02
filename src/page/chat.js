import { useState } from "react";
import useChatStore from "../components/store"; // Zustand 상태 가져오기
import DataComponents from "../components/dataInputComponents";

const Chat = () => {
  const { isChatVisible, showChat } = useChatStore(); // Zustand 상태 사용
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    showChat(); // 🚀 Zustand 상태 업데이트 → DataComponents 사라짐

    const userMessage = {
      id: Date.now(),
      text: "오늘의 운세가 뭐야?",
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("http://localhost:3002/fortuneTell", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: userMessage.text }),
      });

      if (!response.ok) throw new Error("요청 실패");

      const data = await response.json();
      console.log("서버 응답:", data);

      const botMessage = {
        id: Date.now() + 1,
        text: data.assistant,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("운세 가져오기 실패:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col p-4">
      <p className="text-2xl font-bold text-white text-center pb-3 pt-10">
        운세 보는 팬더도사
      </p>
      <p className="text-lg font-base text-white text-center">
        중국에서 점술가로 유명한 팬더에게 오늘의 운세를 물어보세요
      </p>

      {/* 팬더 이미지 */}
      <div>
        <img
          className="center max-w-[500px] m-5 rounded-lg"
          src="panda.png"
          alt="Panda"
        />
      </div>

      {/* 🚀 Zustand 상태에 따라 DataComponents 보이거나 숨김 */}
      {!isChatVisible && <DataComponents />}

      {/* 채팅 메시지 출력 */}
      <div className="flex flex-col space-y-2 overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 rounded-lg max-w-xs ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* 🚀 Zustand 상태에 따라 버튼 표시 */}
      {!isChatVisible && (
        <button
          onClick={sendMessage}
          className="w-full text-white rounded-md font-bold text-xl bg-gray-600 p-3"
        >
          무료로 운세보기
        </button>
      )}
    </div>
  );
};

export default Chat;
