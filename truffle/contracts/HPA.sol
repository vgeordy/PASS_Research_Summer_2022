// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HPA  {

    // struct PA {
    //     uint256 paID;
    //     string  paType;
    //     bool isSigned;
    //     bytes32 signedPA;
    // }


     struct PA {
        uint id;
        string firstName;
        string subject;
        string signature;
    }


    // trigger event when a pa is certified
    event Certified(address user, string subject, string signature);
    
    // gives each structure a unique ID
    // mapping (address => mapping(uint => PA)) public certified_hpas;
    // mapping (address => uint) public hpas_count;
    
    mapping (address => mapping(uint => PA)) public hpas;
    mapping (address => uint) public hpas_count;
    // constructor is only called once
    
    constructor() {
        
    }

    // get certifiedHPA of a user(address already set)
    // function getCertifiedHPA(uint _id) public view returns (PA memory hpa) {
    //     return certified_hpas[msg.sender][_id];
    // }

    // function createCertifiedHPA(
    //     string memory  _paType,
    //     bool isSigned,
    //     bytes32 _signedPA
    //    // address certifier
    //    ) 
    // public {
    //    uint hpa_count = hpas_count[msg.sender];
    //    certified_hpas[msg.sender][hpa_count] = PA(hpa_count,_paType,isSigned, _signedPA);
    //    emit Certified(msg.sender);
    //    hpas_count[msg.sender]++;
    // }

    function createHPA(uint id, string memory firstName, string memory subject, string memory signature) public {
            uint hpa_count = hpas_count[msg.sender];
            hpas[msg.sender][hpa_count] = PA(id, firstName, subject, signature);
            emit Certified(msg.sender, subject, signature);
            hpas_count[msg.sender]++;
        }

   
}

