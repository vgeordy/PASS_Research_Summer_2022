import { useState } from 'react';
import {FileUpload} from './FileUpload';
import {Requester} from './Requester';
import {CreateHPAForm} from './CreateHPAForm';
import {PAContext} from '../../contexts/PAContext';

const PACreation = () => {

  const [id, setID] = useState("0000");
  const [firstName, setFirstName] = useState('Default First Name');
  const [subject, setSubject] = useState('Default Subject');
  const [digitalSignature, setDigitalSignature] = useState('Default Digital Signature');
  

  return (
    <>
    <PAContext.Provider value={{id,setID, firstName, setFirstName, subject, setSubject, digitalSignature, setDigitalSignature}}>
      <FileUpload/>
      <Requester/>
      <CreateHPAForm/>
    </PAContext.Provider>
    </>
  );
}

export default PACreation;