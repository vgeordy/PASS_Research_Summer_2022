import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Select from 'react-select'


export const Requester = () => {

  const [url, setURL] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [selectedInstitution, setSelectedInstituion] = useState('');

  const options = [
    { value: 'http://localhost:3004/institutions/mercycollege', label: 'Mercy College'}
  ]

  const handleChange = (selectedOption) => {
      console.log(selectedOption)
      setURL(selectedOption.value);
      setSelectedInstituion(selectedOption.label);
      setRefresh(true);
  }

  return (
    <>
    <Select 
    options={options}
    onChange={handleChange} />

    {refresh ?<Redirect 
                url={url}
                selectedInstitution={selectedInstitution}
                /> : null}
    
    </>
    
  )
}

const Redirect = ({url, selectedInstitution}) => {
  
  // const redirec = () => {
  //   axios.get('http://localhost:3004/institutions/')
  //   .then((res) => setSignature(res.data));
  // }

  return (
    <div>
      {/* <input 
      type="button"
      value="Redirect"
      onClick={redirec}
      /> */}
      <a target="_blank" rel="noopener noreferrer"  href={url}>Click to be redirected to {selectedInstitution}</a>
    </div>
  )

}


// export const Requester = () => {

//   const [url, setUrl] = useState("");

//   const handleButton = (e) => {
//    e.preventDefault();
//    axios.get('http://localhost:3001/url')
//     .then((res) => setUrl(res.data[0]))
//     .catch((err) => console.log(err))
  
//   }
  
//   useEffect(() => {
//     console.log(url);
//   },[url]);
  
  

//   return (
//     <div>
//         <button type="submit" onClick={handleButton}>
//                 Request URL
//         </button>
//         {url ? <Redirect url={url} />: null }
//     </div>
    

//   )
// }
