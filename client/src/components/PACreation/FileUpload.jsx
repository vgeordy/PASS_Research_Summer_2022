import React, {useState} from 'react'

export const FileUpload = () => {
    const [file, setFile] = useState({});

    const uploadFile = (event)=>{
        const reader = new FileReader();
            reader.onload = function(){
            window.location.href = reader.result;
                }
        reader.readAsDataURL(event.target.files[0]);
        setFile(event.target.files[0]);
        console.log(file);
        }
    
  return (
    <div>
        <input type="file" accept=".json"
        onChange={uploadFile} />
    </div>
  )
}
