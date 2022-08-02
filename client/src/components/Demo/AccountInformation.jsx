import { useNavigate } from "react-router-dom";



const AccountInformation = ({accountAddress}) => {

  const navigate = useNavigate();


  const handlePALookupButton = (e) => {
    e.preventDefault();
    navigate("/PALookup");
  }

  const handlePACreationButton = (e) => {
    e.preventDefault();
    navigate("/PACreation");
  }

  return (
    <>
    <p>
      Account address:
      <span className="code">{accountAddress}</span>
    </p>

    <button onClick={handlePACreationButton}>Take me to PA Creation</button>
    <button onClick={handlePALookupButton}>Take me to PA Lookup</button>
    
    </>
    
  );
}

export default AccountInformation;
