import {useState, useContext} from 'react';
import useEth from "../../../contexts/EthContext/useEth";
import {PAContext} from '../../../contexts/PAContext';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { SubmitContainer } from './SubmitHPAStyles';
export const SubmitHPA = () => {

  const { state: { contract, accounts } } = useEth();
  const {firstName, subject, digitalSignature} = useContext(PAContext);
  // const [IDCounter, setIDCounter] = useState(0);

  const generateRandomID = () => {
    return Math.floor(Math.random() * 1000)

  }


 const handleSubmit = e => {
    e.preventDefault();
    console.log(contract);
    console.log(accounts);
    console.log("Digital Signature", digitalSignature);
    console.log("Subject", subject);
    console.log("First Name", firstName);
    const id = generateRandomID();
    const firstNameString = firstName.toString();
    const subjectString = subject.toString();
    const digitalSignatureString = digitalSignature.toString();
    try {
      const value = contract.methods.createHPA(id, firstNameString, subjectString, digitalSignatureString).send({ from: accounts[0] });
      console.log("value: ",value);
    } catch(e) {
       console.log("error: ", e);
    }
   
 
  }

  return (
    <SubmitContainer>
      <form onSubmit={handleSubmit}>
          
          <Button type="submit" variant="contained" endIcon={<ArrowUpwardIcon />}>Submit HPA</Button>
        </form>
    </SubmitContainer>
  )
}
