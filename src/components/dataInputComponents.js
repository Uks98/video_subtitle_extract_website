import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import useChatStore from "./store";

function DataComponents() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [messages, setMessages] = useState([]);
  const showChat = useChatStore((state) => state.showChat);
  return (
    <div className="flex flex-col items-center p-4 bg-black shadow-md rounded-lg w-full">
      {/* 📅 생년월일 선택 */}
      <div className="mb-4">
        <label className="block text-center text-xl font-medium mb-3 text-white">
          생년월일
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          maxDate={new Date()} // 오늘 날짜까지 선택 가능
          className="p-2 border rounded-md w-full text-lg"
        />
      </div>

      {/* ⏰ 시간 선택 */}
      <div className="mb-4">
        <label className="block text-lg text-center font-medium mb-3 text-white">
          시간 선택
        </label>
        <DatePicker
          selected={selectedTime}
          onChange={(time) => setSelectedTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeFormat="HH:mm"
          dateFormat="HH:mm"
          className="p-2 border rounded-md w-full items-center text-lg"
        />
      </div>

      {/* 📌 선택한 값 표시 */}
      <div className="mt-2 text-nm text-white pb-5">
        {selectedDate && (
          <p>📅 선택한 날짜: {format(selectedDate, "yyyy-MM-dd")}</p>
        )}
        {selectedTime && <p>⏰ 선택한 시간: {format(selectedTime, "HH:mm")}</p>}
      </div>
    </div>
  );
}

export default DataComponents;
