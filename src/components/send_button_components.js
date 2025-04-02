const SendMessageButton = ({ setMessages }) => {
    const sendMessage = async () => {
      const userMessage = { id: Date.now(), text: "사용자 메시지", sender: "user" };
      setMessages((prev) => [...prev, userMessage]); // ✅ 상태 업데이트
  
      try {
        const response = await fetch("http://localhost:3002/fortuneTell", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
        setMessages((prev) => [...prev, botMessage]); // ✅ 상태 업데이트
      } catch (error) {
        console.error("실패:", error);
      }
    };
  
    return (
      <button
        onClick={sendMessage}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        전송
      </button>
    );
  };
  
  export default SendMessageButton;
  