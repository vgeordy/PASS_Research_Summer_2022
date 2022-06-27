import { useRef, useEffect } from "react";

function Contract({ value }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  return (
    <div>
      <code>
      {`contract HPA {
  struct PA {
    uint256 paID;
    string  paType;
    bool isSigned;
    bytes32 signedPA;
  } `}


      {`;

  function getCertifiedHPA(uint _id) public view returns (PA memory hpa) {
          return certified_hpas[msg.sender][_id];
  }

  function createCertifiedHPA(uint256 _paID, string memory  _paType, bool isSigned, bytes32 _signedPA, address certifier) public {
          uint hpa_count = hpas_count[msg.sender];
          certified_hpas[msg.sender][hpa_count] = PA(_paID,_paType,isSigned, _signedPA);
          emit Certified(msg.sender, certifier, isSigned);
          hpas_count[msg.sender]++;
  }

}`}
  </code>
  <div className="getResults">
  <span className="secondary-color" ref={spanEle}>
  <strong>{value}</strong>
  </span>
  </div>
  
</div>
    
  );
}

export default Contract;
