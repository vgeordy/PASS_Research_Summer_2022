import React from 'react'
import useEth from "../../contexts/EthContext/useEth";

/*
uint256 paID;
        string  paType;
        bool isSigned;
        bytes32 signedPA;
*/

const CreateHPAForm = ({paType, setPaType, isSigned, setIsSigned, signature}) => {

    const { state: { contract, accounts } } = useEth();


 const handleSubmit = e => {
    e.preventDefault();
    console.log(contract);
    console.log(accounts);
    console.log(signature);
    const sigCopy = signature.toString();
    const value = contract.methods.createSimpleHPA(sigCopy).send({ from: accounts[0] });
    console.log(value);
 }

  return (
    <div>
        <h2>Create HPA form</h2>
        <form onSubmit={handleSubmit}>
          <button type="submit"> Submit </button>
        </form>
    </div>
  )
}


export default CreateHPAForm;