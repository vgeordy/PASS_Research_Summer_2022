import React, {useState, useEffect, useMemo} from 'react';
import useEth from "../../contexts/EthContext/useEth";

const HPAs = (props) => {
  console.log("HPAS at HPA component", props.hpas);
    return (
      <ul>
      { props.hpas.map(({id, firstName, subject, signature}) => 
          <li key={id}>HPA: {firstName}, {subject}, {signature}</li>
      )}
     </ul>
    )
  };


export const HPARetrieval = () => {

    const { state: { contract, accounts } } = useEth();
    const [hpas, setHpas] = useState([]);
    const [pressed, setPressed] = useState(false);
    


    const loadHPAs = async () => {
        const hpaObjectArray = [];
        const hpasCount = await contract.methods.hpas_count(accounts[0]).call({ from: accounts[0]});
        
        for (var i = 0; i < hpasCount; i++) {
            const hpa = await contract.methods.hpas(accounts[0], i).call({ from: accounts[0]});
           hpaObjectArray.push(hpa);
            
        }

        // const values = hpaObjectArray.filter((index) => {
        //         return index < 3;
          
        // })

      return hpaObjectArray;
}


    const filterByNumber = (obj) => {    
      if (typeof (obj) === 'number') {    
          return true;    
      } else {    
      
          return false;    
      }    
  }

const handleClick = () => {
      loadHPAs().then((res) => {
        console.log(res);
        setHpas(res);
      });

};

return (
    <div>
        <h2>Vertified Portfolio Artificats</h2>
        <button onClick={handleClick}>List My Portfolio Artifacts</button>
        {hpas.length > 0 ? <HPAs hpas={hpas}/>: null}
    </div>
  )
}


