import { useState, useEffect, useCallback } from "react";
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
//import CreateHPAForm from "../PACreation/CreateHPAForm";
import PACreation from "../PACreation";
import PALookup from "../PALookup";


function Demo() {

  const { state, contract, accounts } = useEth();
  const [value, setValue] = useState("?");
  const [wid, setWid] = useState('');
  const [lastName, setLastName] = useState('');
  const [signature, setSignature] = useState('');
  const [paType, setPaType] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  
  useEffect(() => {
    console.log(signature);
  }, [signature])
  
  const demo =
    <>
      <AccountInformation accountAddress={state.accounts}/>
      <PACreation/>
      <PALookup/>
    </>

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
