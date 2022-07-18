import React, {useEffect, useState, useContext} from 'react'
import {PAContext} from '../../contexts/PAContext';

export const FileUpload = () => {
    
  const {setID, setFirstName, setSubject, setDigitalSignature} = useContext(PAContext);

  const [file, setFile] = useState();
    useEffect(() => {
      console.log(file);
    },[file]);


  const uploadFile = (event)=>{

    const reader = new FileReader();
    if (/\.(json)$/i.test(event.target.files[0].name)) {
        // console.log("file name", event.target.files[0].name);
        // console.log("file data", event.target.files[0])
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
      } else {
        console.log("Wrong type of file entered. Try again!");
        // needs to work on the rejection part [TODO]
      }
    }
    
  function onReaderLoad(event) {
    const object = JSON.parse(event.target.result);
    console.log("JSON",object);
    setFile(object);
    setID(object.id);
    setFirstName(object.firstName.toString());
    setSubject(object.subject.toString());
    setDigitalSignature(object.digitalSignature.toString());

  }


  return (
    <div>
        <input type="file" accept=".json"
        onChange={uploadFile} />
        {file ? <div>HPA: {file.wid}, {file.firstName} {file.lastName}, {file.subject}, {file.digitalSignature} </div>: null}
    </div>
  )
}

