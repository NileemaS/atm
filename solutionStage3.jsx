
const ATMDeposit = ({ onChange, isDeposit, isSubmit }) => {
  const choice = ["Deposit", "Withdraw", "Fast Cash"];

  return (    
    <label className="label huge">
      <h5> {choice[Number(!isDeposit)]}</h5>
      <div className="input-box">
        <input type="number" id="idAmount" width="200"  onChange={onChange} 
            placeholder="Enter the Amount..">
        </input>
      </div>
      <div className="submit-button">
        <button type="submit" width="200" value="Submit" disabled={ isSubmit }>
          Submit</button>
      </div>
    </label>   
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true); 
  const [isSubmit, setIsSubmit] = React.useState(true);
  const [showAlert, setShowAlert] = React.useState("alert");
    
  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);    
    if (deposit > 0) setIsSubmit(false) ;
  };

  const handleSubmit = () => {    
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;  

    if (newTotal < 0 ) {
      if (isDeposit === false) {
        setShowAlert("Balance is insufficient to withdraw!");
        event.preventDefault();  
      }
    } else {
      setTotalState(newTotal);
      setIsSubmit(true);
      //form.input
      event.preventDefault();  
    }        
  }


  return (
    <div className="main">
    <div className="nav-bar">
      Gold Bank ATM
    </div>
    <div className="container">
      <div className="atm-display">
      

        <form className="form" onSubmit={handleSubmit}>
          <div>
            <h2>Welcome to ATM</h2>
            <br />
            <button className="btnTransactn" onClick={() => setIsDeposit(true)}>Deposit</button>
            <button className="btnTransactn" onClick={() => setIsDeposit(false)}>Withdraw</button>
            <button className="btnTransactn">Fast Cash</button>
          </div>
          <br />
          <br />
          <h3 id="total">{status}</h3>
         
          <div id="idAlert" style={{color:"red"}}> {showAlert} </div>
          <br />
          <br />
          <div>
            <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isSubmit={isSubmit} >
            </ATMDeposit>
          </div>
        </form>
      </div>

      <div className="t-detail">
        <h4>Choose Account</h4>
        <h4>Choose Notes</h4>
        <h4>Choose Fast Cash</h4>
        <h4>Summary</h4>
      </div>
    </div>
    
    </div>
    
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
