// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HPA  {

    struct PA {
        uint256 paID;
        string  paType;
        bool isSigned;
        bytes32 signedPA;
    }


     struct SimplePA {
        uint id;
        string firstName;
        string subject;
        string signature;
    }


    // trigger event when a pa is certified
    event Certified(address user);
    
    // gives each structure a unique ID
    mapping (address => mapping(uint => PA)) public certified_hpas;
    mapping (address => uint) public hpas_count;
    
    mapping (address => mapping(uint => SimplePA)) public simple_hpas;
    mapping (address => uint) public simple_hpas_count;
    // constructor is only called once
    constructor() {
        
    }

    // get certifiedHPA of a user(address already set)
    function getCertifiedHPA(uint _id) public view returns (PA memory hpa) {
        return certified_hpas[msg.sender][_id];
    }

    function createCertifiedHPA(
        string memory  _paType,
        bool isSigned,
        bytes32 _signedPA
       // address certifier
       ) 
    public {
       uint hpa_count = hpas_count[msg.sender];
       certified_hpas[msg.sender][hpa_count] = PA(hpa_count,_paType,isSigned, _signedPA);
       emit Certified(msg.sender);
       hpas_count[msg.sender]++;
    }

    function createSimpleHPA(uint256 id, string memory firstName, string memory subject, string memory signature) public {
            uint simple_hpa_count = simple_hpas_count[msg.sender];
            simple_hpas[msg.sender][simple_hpa_count] = SimplePA(id, firstName, subject, signature);
            emit Certified(msg.sender);
            simple_hpas_count[msg.sender]++;
        }

   
}

