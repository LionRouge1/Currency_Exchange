import React, { useContext } from "react";
import { BsArrowLeftCircle } from 'react-icons/bs';
import { screenContext } from "./screenContex";

const Convertion = ({
  handleChanges,
  handleSubmit,
  ableSymbols,
  results,
  goback,
}) => {

  const { from, to, amount, result } = results;
  const screenWidth = useContext(screenContext);

  return (
    <div className="form_box" style={{paddingTop: screenWidth ? '30px' : ''}}>
      <form onSubmit={handleSubmit}>
        <div className="form_info">
          <input
            type="number"
            name="amount"
            placeholder='Enter the amount'
            onChange={handleChanges}
            value={amount}
          />
          <select
            name="to"
            onChange={handleChanges}
            value={to}
            style={{ width: screenWidth ? '100px' : '' }}
          >
            <option value="">No selected</option>
            {ableSymbols.map((element) => (
              <option key={element} value={element} >{element}</option>
            ))}
          </select>
          <button
            type="submit"
            style={
              {
                width: screenWidth ? '100px' : '',
                fontSize: screenWidth ? '16px' : ''
              }
            }
          >
            Convert
          </button>
        </div>
        <div className="form_result">
          <span>{amount}</span>
          <span>{from}</span> to
          <span>{to}</span>
          <span className="result">Result: <span>{result}</span></span>
        </div>
      </form>
      <button onClick={goback}> <BsArrowLeftCircle /> Go back</button>
    </div>
  )
};

export default Convertion;