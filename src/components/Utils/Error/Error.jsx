const Error = (props) => {
  const {error} = props;

  return (
    <div className="error">
      <span>{error}</span>
    </div>
  );
}

export default Error;
