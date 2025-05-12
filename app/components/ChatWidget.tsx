"use client";
import { useState } from "react";
import { X } from "lucide-react"; // optional, or use text for close

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async (msg: string) => {
    setMessages((prev) => [...prev, `You: ${msg}`]);
    setInput("");
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: msg }),
    });
    const data = await res.json();
    const aiReply = data?.reply ?? "⚠️ Something went wrong.";
setMessages((prev) => [...prev, `AI: ${aiReply}`]);

  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          className="bg-blue-900/90 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Chat with us! 💬
        </button>
      </div>

      {/* Popup Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border rounded-xl shadow-lg z-50 flex flex-col">
          <div className="flex justify-between items-center p-3 border-b font-semibold">
            <span className="dark:text-black">Ask SoftSell AI</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <div className="p-3 h-48 overflow-y-auto text-sm space-y-1 dark:text-black ">
            {messages.map((m, i) => (
              <p key={i}>{m}</p>
            ))}
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              className="flex-1 border rounded px-2 py-1 text-sm dark:text-black "
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
            />
            <button
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
              onClick={() => sendMessage(input)}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
