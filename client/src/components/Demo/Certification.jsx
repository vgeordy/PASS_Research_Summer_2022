import axios from 'axios';

const Certification = ({wid, setWid, lastName, setLastName, signature, setSignature}) => {
    
    //const [certInfos, setCertInfos] = useState([]);

    // handle the click when wid is entered by the user
    // this will send wid to the url
    const handleRequestClick = e => {
      e.preventDefault();
      const req = {
        wid: wid,
        lastName: lastName,
      };

      axios.get('http://localhost:3001/certification/',req)
      .then(response => {
          console.log(response);
          const sigresponse = response.data[0].signature;
          setSignature(sigresponse);
      }).catch(function (error) {
              console.log(error);
      });
    };
  
    // sets wid
    const handleWidChange = e => {
      e.preventDefault()
      if (/^\d+$|^$/.test(e.target.value)) {
        setWid(e.target.value);
      }
      
    };

  return (
    <div>
      <h3>Certification</h3>
      <form onSubmit={handleRequestClick}>
      <label>
        Enter wid:<input
          type="text"
          placeholder="wid"
          value={wid}
          onChange={handleWidChange}
       />
      </label>
      <label>
        Enter lastName:<input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
       />
      </label>
      <input 
      type="submit" 
      value="Send Request"
      />
    </form>
      {
        !signature ? <h2>not signed</h2> : <h2>returned signature is {signature}</h2>
      }
    </div>
    );
  }

  export default Certification;