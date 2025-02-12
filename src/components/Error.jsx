import "../styles/error.css";

const Error = ({ message }) => {
  return (
    <div className="error">
      <p className="errorMessage">{message}</p>
    </div>
  );
};

export default Error;
