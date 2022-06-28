import { useState, useCallback } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import AccountInformation from "./AccountInformation";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import Desc from "./Desc";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import NoticeNoAccount from "./NoticeNoAccount";
import Certification from "./Certification";
import CreateHPAForm from "./CreateHPAForm";
import HPARetrieval from "./HPARetrieval";

function Demo() {
  const { state, contract, accounts } = useEth();
  const [value, setValue] = useState("?");
  const [wid, setWid] = useState('');
  const [lastName, setLastName] = useState('');
  const [signature, setSignature] = useState('sdfs');
  const [paType, setPaType] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  
  // const [hpas, setHpas] = useState([]);

  // const addToArray = useCallback(() => {
  //   const hpasCount = contract.simple_hpas_count;
  //     const hpas = [];
  //     for(var i = 0; i < hpasCount; i++) {
  //         const hpa = contract.simple_hpas(accounts[0], i);
  //         hpas.push(hpa);
  //     }
  // },[hpas]);

  /*
        uint256 paID;
        string  paType;
        bool isSigned;
        bytes32 signedPA;
*/

  const demo =
    <>
      <AccountInformation 
              accountAddress={state.accounts}
      
      />
      <Certification
        wid={wid}
        setWid={setWid}
        lastName={lastName}
        setLastName={setLastName} 
        signature={signature}
        setSignature={setSignature}
      />
      {/* <div className="contract-container">
       {/* <Contract value={value} /> */}
        {/* <ContractBtns setValue={setValue} /> */} 
        <CreateHPAForm
          paType={paType}
          setPaType={setPaType}
          isSigned={isSigned}
          setIsSigned={setIsSigned}
          signature={signature}
           />
          <HPARetrieval/>
      
    </>;

  return (
    <div className="demo">
      <Title />
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
           // !state.accountAddress ? <NoticeNoAccount />:
            demo
      }
    </div>
  );
}

export default Demo;
