function ErrorMessage({ message }) {
  //console.log(message);
  return (
    <p className="error">
      <span>⛔ </span>
      {message}
    </p>
  );
}

export default ErrorMessage;
