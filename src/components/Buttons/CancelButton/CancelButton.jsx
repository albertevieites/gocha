function CancelButton({handleCancelBtn}) {
  return (
    <div className="cancel--btn">
      <button onClick={handleCancelBtn}>Cancel</button>
    </div>
  );
}

export default CancelButton;
