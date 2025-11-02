// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TavioCoin is ERC20, Ownable {
    uint256 public constant CLAIM_AMOUNT = 100 * 10 ** 18;
    mapping(address => bool) public hasClaimed;

    constructor(uint256 initialSupply) ERC20("TavioCoin", "TAV") Ownable(msg.sender) {
        // opcional: mint inicial al deployer
        _mint(msg.sender, initialSupply);
    }

    function claim() external {
        require(!hasClaimed[msg.sender], "Ya reclamaste tus tokens");
        hasClaimed[msg.sender] = true;
        _mint(msg.sender, CLAIM_AMOUNT);
    }
}
