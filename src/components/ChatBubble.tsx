export default function ChatBubble({
  text,
  receivingMessage,
}: {
  text: string;
  receivingMessage: boolean;
}) {
  return (
    <div className={`chat ${receivingMessage ? "chat-end" : "chat-start"}`}>
      <div
        className={`chat-bubble ${
          receivingMessage ? "chat-bubble-primary" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
}
