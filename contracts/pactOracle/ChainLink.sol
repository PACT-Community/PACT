pragma solidity 0.6.12;

import "../vendors/interfaces/IAggregatorV3.sol";

contract PriceConsumerV3 {

    IAggregatorV3 internal priceFeed;

    /**
     * Network: Kovan
     * Aggregator: ETH/USD
     * Address: 0xdCA36F27cbC4E38aE16C4E9f99D39b42337F6dcf
     */
    constructor(address chainLinkOracle) public {
        priceFeed = IAggregatorV3(chainLinkOracle);
    }


    function decimals() public view returns(uint){
        return priceFeed.decimals();
    }

    /**
     * Returns the latest price
     */
    function getThePrice() public view returns (uint) {
        ( , int price, , , ) = priceFeed.latestRoundData();
        return uint(price);
    }
}