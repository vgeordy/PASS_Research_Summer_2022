import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");
  const [inputID, setInputID] = useState("");

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const handleIDChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputID(e.target.value);
    }
  };

  const read = async (e) => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputID === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newID = parseInt(inputID);
    const value = await contract.methods.getCertifiedHPA(newID).call({ from: accounts[0] });
    setValue(value);
  };

  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    await contract.methods.createCertifiedHPA(newValue).send({ from: accounts[0]});
  };

  return (
    <div className="btns">

      <div onClick={read}>
        getHPA(
        <input
          type="text"
          placeholder="uint"
          value={inputID}
          onChange={handleIDChange}
        />)
      </div>

      <div 
      onClick={write} 
      className="input-btn">
        setHPA(<input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleIDChange}
        />)
      </div>
      

    </div>
  );
}

export default ContractBtns;
