import React from "react";


const Convertion = ({
  handleChanges,
  handleSubmit,
  ableSymbols,
  results,
  goback,
}) => {

  const { from, to, amount, result } = results;

  return (
    <div className="convert_box">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          placeholder='Enter the amount'
          onChange={handleChanges}
          value={amount}
        />
        <select name="to" onChange={handleChanges} value={to}>
          <option value="">No selected</option>
          {ableSymbols.map((element) => (
            <option key={element} value={element} >{element}</option>
          ))}
        </select>
        <button type="submit">Convert</button>
      </form>
      <div>
        <p>{from}</p>
        <p>{to}</p>
        <p>{amount}</p>
        <p>{result}</p>
      </div>
      <button onClick={goback}>Go back</button>
    </div>
  )
};

export default Convertion;