// "SPDX-License-Identifier: MIT"
pragma solidity 0.6.12;
 
import "./MockERC20.sol";


contract USDC is MockERC20 {
	constructor() MockERC20("USDC", "USDC", 18) public {}
}