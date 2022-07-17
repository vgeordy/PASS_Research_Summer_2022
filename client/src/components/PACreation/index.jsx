import { useState } from 'react';
import {FileUpload} from './FileUpload';
import {Requester} from './Requester';
import {URLOptions} from './URLOptions';
import {CreateHPAForm} from './CreateHPAForm';

import {PAContext} from '../../contexts/PAContext';

const PACreation = () => {

  const [firstName, setFirstName] = useState('Default First Name');
  const [subject, setSubject] = useState('Default Subject');
  const [digitalSignature, setDigitalSignature] = useState('Default Digital Signature');
  

  return (
    <>
    <PAContext.Provider value={{firstName, setFirstName, subject, setSubject, digitalSignature, setDigitalSignature}}>
      <URLOptions/>
      <FileUpload/>
      <Requester/>
      <CreateHPAForm
          
        />
    </PAContext.Provider>
    </>
  );
}

export default PACreation;