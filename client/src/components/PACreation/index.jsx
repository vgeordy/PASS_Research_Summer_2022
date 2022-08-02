import { useState } from 'react';
import {Requester} from './Requester';
import {CreateHPA} from './CreateHPA';
import { UploadHPA } from './UploadHPA';
import {PAContext} from '../../contexts/PAContext';
import { Container } from './PACreationStyles';
import {SubmitHPA} from './SubmitHPA';
// import { Container } from './PACreationStyles';
// import {CreateHPA} from "./CreateHPA";

const PACreation = () => {

  const [id, setID] = useState("0000");
  const [firstName, setFirstName] = useState('Default First Name');
  const [subject, setSubject] = useState('Default Subject');
  const [digitalSignature, setDigitalSignature] = useState('Default Digital Signature');
  

  return (
    <>
    <PAContext.Provider value={{id, setID, firstName, setFirstName, subject, setSubject, digitalSignature, setDigitalSignature}}>
        <Container>
          <UploadHPA/>
        <SubmitHPA />
        </Container>
        
        
    </PAContext.Provider>
    </>
  );
}

export default PACreation;