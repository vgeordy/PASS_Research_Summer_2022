import React, {useState, useEffect} from 'react';
import useEth from "../../contexts/EthContext/useEth";
import { HPAs } from './HPAs';
/*
looks at the mapping data structure and lists all the hpas in the storage

1. access the mapping data structure[check]
2. retrieve the information and store it an array[check]
3. display the array[]


*/
const HPARetrieval = () => {

    const { state: { contract, accounts } } = useEth();
    const [hpas, setHpas] = useState([]);

    const loadHPAs = async () => {
        const hpasCount = await contract.methods.simple_hpas_count(accounts[0]).call({ from: accounts[0] });
        for (var i = 0; i < hpasCount; i++) {
            const hpa = await contract.methods.simple_hpas(accounts[0], i).call({ from: accounts[0]});
            hpas.push(hpa);
        }
        return hpas;
    };


    const handleClick = (e) => {
        e.preventDefault();
        console.log(loadHPAs());
        
    }
    
return (
    <div>
        <h2>HPARetrieval</h2>
        <button onClick={handleClick}>click</button>

        <HPAs hpas={hpas}/>
    
    </div>
  )
}


export default HPARetrieval;