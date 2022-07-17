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

      axios.get('http://localhost:3004/institutions',req)
      .then(response => {
          console.log("response data", response.data.certificate)
          setSignature(response.data.certificate);
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
      
    <h2>returned signature is {signature}</h2>
      
    </div>
    );
  }

  export default Certification;