//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import "./IWalletFactory.sol";
import "./ECDSAWallet.sol";

contract SmartWalletFactory is IWalletFactory {
      mapping(bytes32 => uint256) nonces;

      event WalletCreated(address indexed _wallet, bytes32 indexed _callID);

      function createWallet(address _impl, bytes memory _call) external payable returns (IWallet) {
            require(msg.value > 0, "user needs to fund wallet on creaton");
            bytes32 callID = keccak256(_call);

            // salt is derived from call hash and nonce, this is to allow the same user to
            // create and control multiple SmartWallets with the same private key
            ERC1967Proxy wallet_ = new ERC1967Proxy{salt: keccak256(abi.encode(callID, nonces[callID]++))}(
                  address(_impl),
                  _call
            );

            emit WalletCreated(address(wallet_), callID);
            IWallet wallet = IWallet(payable(wallet_));

            (bool ok, ) = address(wallet).call{value: msg.value}("");
            require(ok, "SmartWallet: Failed to creation Fee");

            return wallet;
      }

      function walletAddress(address _impl, bytes memory _call, uint256 _nonce) public view returns (address) {
            bytes32 callID = keccak256(_call);
            return
                  address(
                        uint160(
                              uint(
                                    keccak256(
                                          abi.encodePacked(
                                                bytes1(0xff),
                                                address(this),
                                                keccak256(abi.encode(callID, _nonce)),
                                                keccak256(
                                                      abi.encodePacked(
                                                            type(ERC1967Proxy).creationCode,
                                                            abi.encode(_impl, _call)
                                                      )
                                                )
                                          )
                                    )
                              )
                        )
                  );
      }
}
