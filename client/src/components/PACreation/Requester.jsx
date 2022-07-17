import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Redirect = ({url}) => {
  
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
      <a href={url}>Click to be redirected</a>
    </div>
  )

}


export const Requester = () => {

  const [url, setUrl] = useState("");

  const handleButton = (e) => {
   e.preventDefault();
   axios.get('http://localhost:3001/url')
    .then((res) => setUrl(res.data[0]))
    .catch((err) => console.log(err))
  
  }
  
  useEffect(() => {
    console.log(url);
  },[url]);
  
  

  return (
    <div>
        <button type="submit" onClick={handleButton}>
                Request URL
        </button>
        {url ? <Redirect url={url} />: null }
    </div>
    

  )
}
