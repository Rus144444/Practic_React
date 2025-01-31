function Controls(props) {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={props.onIncrement}>
        Увеличеть на 1
      </button>
      <button type="button" onClick={props.onDecrement}>
        Уменьшить на 1
      </button>
    </div>
  );
}

export default Controls;
