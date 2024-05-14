// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract SimpleStorage {
    mapping (address => string[]) data;

    function set(string calldata _text) external {
        data[msg.sender].push(_text);
    }

    function get() view external returns (string[] memory)  {
        return data[msg.sender];
    }
}