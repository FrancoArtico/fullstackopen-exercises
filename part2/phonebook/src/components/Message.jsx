const Message = ({ message, messageType }) => {
  if (!message) {
    return null;
  }

  return (
    <div>
      <p className={messageType}>{message}</p>
    </div>
  );
};

export default Message;
