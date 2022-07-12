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
import PACreation from "../PACreation";

function Demo() {

  const { state, contract, accounts } = useEth();
  const [value, setValue] = useState("?");
  const [wid, setWid] = useState('');
  const [lastName, setLastName] = useState('');
  const [signature, setSignature] = useState('sdfs');
  const [paType, setPaType] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  

  const demo =
    <>
    
    <PACreation />
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
