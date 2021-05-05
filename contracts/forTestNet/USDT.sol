// "SPDX-License-Identifier: MIT"
pragma solidity 0.6.12;
 
import "./MockERC20.sol";


contract USDT is MockERC20 {
	constructor() MockERC20("USDT test token", "USDT", 6) public {}
}