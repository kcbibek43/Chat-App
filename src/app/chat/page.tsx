"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Smile, Image as ImageIcon } from "lucide-react";
import { emojiList, gifList } from "./extras"; // Assuming you have these lists defined in a data file

export default function ChatPage() {
    type Message = {
        user: string;
        text: string;
        gif?: string;
    };

    const [messages, setMessages] = useState<Message[]>([
        { user: "Alice", text: "Hi everyone!" },
        { user: "Bob", text: "Hello Alice!" },
    ]);
    const [input, setInput] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);
    const [showGifs, setShowGifs] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSend = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { user: "You", text: input }]);
        setInput("");
        setShowEmojis(false);
        setShowGifs(false);
    };

    const handleEmojiClick = (emoji: string) => {
        setInput(input + emoji);
        setShowEmojis(false);
    };

    const handleGifClick = (gifUrl: string) => {
        setMessages([...messages, { user: "You", text: "", gif: gifUrl }]);
        setShowGifs(false);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 flex flex-col h-[80vh]">
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                    <MessageCircle className="text-purple-400" />
                    <h2 className="text-2xl font-bold text-white">Group Chat</h2>
                </div>
                {/* Chat messages */}
                <div className="flex-1 overflow-y-auto mb-4 flex flex-col" style={{ flexDirection: "column-reverse" }}>
                    <div>
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.user === "You" ? "justify-end" : "justify-start"} mb-2`}
                                style={{ marginBottom: "8px" }} // bigger gap
                            >
                                <div
                                    className={`px-5 py-3 rounded-lg max-w-md break-words ${msg.user === "You"
                                            ? "bg-purple-500 text-white"
                                            : "bg-white/20 text-white"
                                        }`}
                                >
                                    <span className="font-semibold">{msg.user}: </span>
                                    <span>{msg.text}</span>
                                    {msg.gif && (
                                        <img src={msg.gif} alt="gif" className="mt-2 rounded-lg max-w-[140px]" />
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
                {/* Emoji & GIF pickers */}
                <div className="flex gap-2 mb-2">
                    <button
                        type="button"
                        onClick={() => setShowEmojis(!showEmojis)}
                        className="bg-white/10 border border-white/20 rounded-lg p-2 text-white hover:bg-purple-500 transition-all"
                        title="Add emoji"
                    >
                        <Smile />
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowGifs(!showGifs)}
                        className="bg-white/10 border border-white/20 rounded-lg p-2 text-white hover:bg-blue-500 transition-all"
                        title="Add GIF"
                    >
                        <ImageIcon />
                    </button>
                </div>
                {showEmojis && (
                    <div className="flex flex-wrap gap-2 mb-2 bg-white/10 p-2 rounded-lg">
                        {emojiList.map((emoji, idx) => (
                            <button
                                key={idx}
                                type="button"
                                className="text-2xl"
                                onClick={() => handleEmojiClick(emoji)}
                            >
                                {emoji}
                            </button>
                        ))}
                    </div>
                )}
                {showGifs && (
                    <div className="flex gap-2 mb-2 bg-white/10 p-2 rounded-lg">
                        {gifList.map((gif, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => handleGifClick(gif)}
                                className="focus:outline-none"
                            >
                                <img src={gif} alt="gif" className="w-24 h-24 rounded-lg" />
                            </button>
                        ))}
                    </div>
                )}
                {/* Input box */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-5 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-base"
                        placeholder="Type your message..."
                        onKeyDown={e => e.key === "Enter" && handleSend()}
                    />
                    <button
                        onClick={handleSend}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all text-base"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}