const Error = props => {
  // Destructuring props to pass only the error word in the span
  const { error } = props;

  return (
    <div className='error'>
      <span>{error}</span>
    </div>
  );
};

export default Error;
