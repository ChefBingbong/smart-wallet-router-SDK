export const smartWalletAbi = [
  {
       inputs: [
            {
                 internalType: "string",
                 name: "message",
                 type: "string",
            },
       ],
       name: "InsufficentAllowance",
       type: "error",
  },
  {
       inputs: [
            {
                 internalType: "string",
                 name: "message",
                 type: "string",
            },
       ],
       name: "InsufficentFeeAsset",
       type: "error",
  },
  {
       inputs: [
            {
                 internalType: "string",
                 name: "message",
                 type: "string",
            },
       ],
       name: "InvalidAllowanceOpNonce",
       type: "error",
  },
  {
       inputs: [
            {
                 internalType: "string",
                 name: "message",
                 type: "string",
            },
       ],
       name: "InvalidBridgeOppNonce",
       type: "error",
  },
  {
       inputs: [
            {
                 internalType: "string",
                 name: "message",
                 type: "string",
            },
       ],
       name: "InvalidDomain",
       type: "error",
  },
  {
       inputs: [
            {
                 internalType: "string",
                 name: "message",
                 type: "string",
            },
       ],
       name: "InvalidSigChain",
       type: "error",
  },
  {
       inputs: [
            {
                 internalType: "string",
                 name: "message",
                 type: "string",
            },
       ],
       name: "InvalidSignature",
       type: "error",
  },
  {
       inputs: [
            {
                 internalType: "string",
                 name: "message",
                 type: "string",
            },
       ],
       name: "InvalidSigner",
       type: "error",
  },
  {
       inputs: [
            {
                 internalType: "string",
                 name: "message",
                 type: "string",
            },
       ],
       name: "InvalidWalletOpNonce",
       type: "error",
  },
  {
       inputs: [
            {
                 internalType: "string",
                 name: "message",
                 type: "string",
            },
       ],
       name: "SignatureExpired",
       type: "error",
  },
  {
       anonymous: false,
       inputs: [
            {
                 indexed: false,
                 internalType: "address",
                 name: "previousAdmin",
                 type: "address",
            },
            {
                 indexed: false,
                 internalType: "address",
                 name: "newAdmin",
                 type: "address",
            },
       ],
       name: "AdminChanged",
       type: "event",
  },
  {
       anonymous: false,
       inputs: [
            {
                 indexed: true,
                 internalType: "address",
                 name: "owner",
                 type: "address",
            },
            {
                 indexed: true,
                 internalType: "address",
                 name: "token",
                 type: "address",
            },
            {
                 indexed: true,
                 internalType: "address",
                 name: "spender",
                 type: "address",
            },
            {
                 indexed: false,
                 internalType: "uint160",
                 name: "amount",
                 type: "uint160",
            },
            {
                 indexed: false,
                 internalType: "uint48",
                 name: "expiration",
                 type: "uint48",
            },
       ],
       name: "Approval",
       type: "event",
  },
  {
       anonymous: false,
       inputs: [
            {
                 indexed: true,
                 internalType: "address",
                 name: "beacon",
                 type: "address",
            },
       ],
       name: "BeaconUpgraded",
       type: "event",
  },
  {
       anonymous: false,
       inputs: [
            {
                 indexed: false,
                 internalType: "uint8",
                 name: "version",
                 type: "uint8",
            },
       ],
       name: "Initialized",
       type: "event",
  },
  {
       anonymous: false,
       inputs: [
            {
                 indexed: true,
                 internalType: "address",
                 name: "_contract",
                 type: "address",
            },
            {
                 indexed: false,
                 internalType: "uint256",
                 name: "_value",
                 type: "uint256",
            },
            {
                 indexed: false,
                 internalType: "bytes",
                 name: "_data",
                 type: "bytes",
            },
       ],
       name: "LogCall",
       type: "event",
  },
  {
       anonymous: false,
       inputs: [
            {
                 indexed: true,
                 internalType: "address",
                 name: "_from",
                 type: "address",
            },
            {
                 indexed: false,
                 internalType: "uint256",
                 name: "_amount",
                 type: "uint256",
            },
       ],
       name: "LogReceivedEther",
       type: "event",
  },
  {
       anonymous: false,
       inputs: [
            {
                 indexed: true,
                 internalType: "address",
                 name: "owner",
                 type: "address",
            },
            {
                 indexed: true,
                 internalType: "address",
                 name: "token",
                 type: "address",
            },
            {
                 indexed: true,
                 internalType: "address",
                 name: "spender",
                 type: "address",
            },
            {
                 indexed: false,
                 internalType: "uint160",
                 name: "amount",
                 type: "uint160",
            },
            {
                 indexed: false,
                 internalType: "uint48",
                 name: "expiration",
                 type: "uint48",
            },
            {
                 indexed: false,
                 internalType: "uint48",
                 name: "nonce",
                 type: "uint48",
            },
       ],
       name: "Permit",
       type: "event",
  },
  {
       anonymous: false,
       inputs: [
            {
                 indexed: true,
                 internalType: "address",
                 name: "implementation",
                 type: "address",
            },
       ],
       name: "Upgraded",
       type: "event",
  },
  {
       anonymous: false,
       inputs: [
            {
                 indexed: true,
                 internalType: "address",
                 name: "signer",
                 type: "address",
            },
            {
                 indexed: false,
                 internalType: "bytes32",
                 name: "dataHash",
                 type: "bytes32",
            },
            {
                 indexed: false,
                 internalType: "bytes",
                 name: "signature",
                 type: "bytes",
            },
            {
                 indexed: false,
                 internalType: "address",
                 name: "wallet",
                 type: "address",
            },
            {
                 indexed: false,
                 internalType: "uint256",
                 name: "nonce",
                 type: "uint256",
            },
       ],
       name: "WalletOpRecoveryResult",
       type: "event",
  },
  {
       inputs: [],
       name: "ECDSA_WALLET_STORAGE_POSITION",
       outputs: [
            {
                 internalType: "bytes32",
                 name: "",
                 type: "bytes32",
            },
       ],
       stateMutability: "view",
       type: "function",
  },
  {
       inputs: [],
       name: "HASHED_NAME",
       outputs: [
            {
                 internalType: "bytes32",
                 name: "",
                 type: "bytes32",
            },
       ],
       stateMutability: "view",
       type: "function",
  },
  {
       inputs: [],
       name: "HASHED_VERSION",
       outputs: [
            {
                 internalType: "bytes32",
                 name: "",
                 type: "bytes32",
            },
       ],
       stateMutability: "view",
       type: "function",
  },
  {
       inputs: [],
       name: "TYPE_HASH",
       outputs: [
            {
                 internalType: "bytes32",
                 name: "",
                 type: "bytes32",
            },
       ],
       stateMutability: "view",
       type: "function",
  },
  {
       inputs: [
            {
                 internalType: "address",
                 name: "_owner",
                 type: "address",
            },
       ],
       name: "__ECDSAWallet_init",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
  },
  {
       inputs: [],
       name: "__SmartWallet_init",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
  },
  {
       inputs: [
            {
                 internalType: "bytes",
                 name: "signature",
                 type: "bytes",
            },
            {
                 internalType: "bytes32",
                 name: "hash",
                 type: "bytes32",
            },
            {
                 internalType: "address",
                 name: "claimedSigner",
                 type: "address",
            },
       ],
       name: "_verifyECDSAExecRequest",
       outputs: [],
       stateMutability: "view",
       type: "function",
  },
  {
       inputs: [
            {
                 internalType: "address",
                 name: "",
                 type: "address",
            },
            {
                 internalType: "address",
                 name: "",
                 type: "address",
            },
            {
                 internalType: "address",
                 name: "",
                 type: "address",
            },
       ],
       name: "allowance",
       outputs: [
            {
                 internalType: "uint160",
                 name: "amount",
                 type: "uint160",
            },
            {
                 internalType: "uint48",
                 name: "expiration",
                 type: "uint48",
            },
            {
                 internalType: "uint48",
                 name: "nonce",
                 type: "uint48",
            },
       ],
       stateMutability: "view",
       type: "function",
  },
  {
       inputs: [
            {
                 internalType: "address",
                 name: "token",
                 type: "address",
            },
            {
                 internalType: "address",
                 name: "spender",
                 type: "address",
            },
            {
                 internalType: "uint160",
                 name: "amount",
                 type: "uint160",
            },
            {
                 internalType: "uint48",
                 name: "expiration",
                 type: "uint48",
            },
       ],
       name: "approve",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
  },
  {
       inputs: [],
       name: "bridgeVerifier",
       outputs: [
            {
                 internalType: "address",
                 name: "",
                 type: "address",
            },
       ],
       stateMutability: "view",
       type: "function",
  },
  {
       inputs: [
            {
                 internalType: "uint256",
                 name: "_chainID",
                 type: "uint256",
            },
       ],
       name: "domainSeperator",
       outputs: [
            {
                 internalType: "bytes32",
                 name: "",
                 type: "bytes32",
            },
       ],
       stateMutability: "view",
       type: "function",
  },
  {
       inputs: [
            {
                 components: [
                      {
                           components: [
                                {
                                     components: [
                                          {
                                               internalType: "address",
                                               name: "token",
                                               type: "address",
                                          },
                                          {
                                               internalType: "uint160",
                                               name: "amount",
                                               type: "uint160",
                                          },
                                          {
                                               internalType: "uint48",
                                               name: "expiration",
                                               type: "uint48",
                                          },
                                          {
                                               internalType: "uint48",
                                               name: "nonce",
                                               type: "uint48",
                                          },
                                     ],
                                     internalType: "struct IWallet.AllowanceOpDetails[]",
                                     name: "details",
                                     type: "tuple[]",
                                },
                                {
                                     internalType: "address",
                                     name: "spender",
                                     type: "address",
                                },
                                {
                                     internalType: "uint256",
                                     name: "sigDeadline",
                                     type: "uint256",
                                },
                           ],
                           internalType: "struct IWallet.AllowanceOp",
                           name: "allowanceOp",
                           type: "tuple",
                      },
                      {
                           components: [
                                {
                                     internalType: "address",
                                     name: "to",
                                     type: "address",
                                },
                                {
                                     internalType: "uint256",
                                     name: "amount",
                                     type: "uint256",
                                },
                                {
                                     internalType: "uint256",
                                     name: "chainId",
                                     type: "uint256",
                                },
                                {
                                     internalType: "bytes",
                                     name: "data",
                                     type: "bytes",
                                },
                           ],
                           internalType: "struct IWallet.UserOp[]",
                           name: "userOps",
                           type: "tuple[]",
                      },
                      {
                           components: [
                                {
                                     internalType: "address",
                                     name: "to",
                                     type: "address",
                                },
                                {
                                     internalType: "uint256",
                                     name: "amount",
                                     type: "uint256",
                                },
                                {
                                     internalType: "uint256",
                                     name: "chainId",
                                     type: "uint256",
                                },
                                {
                                     internalType: "bytes",
                                     name: "data",
                                     type: "bytes",
                                },
                           ],
                           internalType: "struct IWallet.UserOp[]",
                           name: "bridgeOps",
                           type: "tuple[]",
                      },
                      {
                           internalType: "address",
                           name: "wallet",
                           type: "address",
                      },
                      {
                           internalType: "uint256",
                           name: "nonce",
                           type: "uint256",
                      },
                      {
                           internalType: "uint256",
                           name: "chainID",
                           type: "uint256",
                      },
                      {
                           internalType: "uint256",
                           name: "bridgeChainID",
                           type: "uint256",
                      },
                      {
                           internalType: "uint256",
                           name: "sigChainID",
                           type: "uint256",
                      },
                 ],
                 internalType: "struct IWallet.ECDSAExec",
                 name: "_walletExec",
                 type: "tuple",
            },
            {
                 internalType: "bytes",
                 name: "_signature",
                 type: "bytes",
            },
       ],
       name: "exec",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
  },
  {
       inputs: [
            {
                 components: [
                      {
                           internalType: "address",
                           name: "to",
                           type: "address",
                      },
                      {
                           internalType: "uint256",
                           name: "amount",
                           type: "uint256",
                      },
                      {
                           internalType: "uint256",
                           name: "chainId",
                           type: "uint256",
                      },
                      {
                           internalType: "bytes",
                           name: "data",
                           type: "bytes",
                      },
                 ],
                 internalType: "struct IWallet.UserOp[]",
                 name: "userOps",
                 type: "tuple[]",
            },
       ],
       name: "execFomEoa",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
  },
  {
       inputs: [],
       name: "nonce",
       outputs: [
            {
                 internalType: "uint256",
                 name: "",
                 type: "uint256",
            },
       ],
       stateMutability: "view",
       type: "function",
  },
  {
       inputs: [],
       name: "owner",
       outputs: [
            {
                 internalType: "address",
                 name: "",
                 type: "address",
            },
       ],
       stateMutability: "view",
       type: "function",
  },
  {
       inputs: [],
       name: "proxiableUUID",
       outputs: [
            {
                 internalType: "bytes32",
                 name: "",
                 type: "bytes32",
            },
       ],
       stateMutability: "view",
       type: "function",
  },
  {
       inputs: [
            {
                 internalType: "address",
                 name: "from",
                 type: "address",
            },
            {
                 internalType: "address",
                 name: "to",
                 type: "address",
            },
            {
                 internalType: "uint160",
                 name: "amount",
                 type: "uint160",
            },
            {
                 internalType: "address",
                 name: "token",
                 type: "address",
            },
       ],
       name: "transferFrom",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
  },
  {
       inputs: [
            {
                 internalType: "address",
                 name: "newImplementation",
                 type: "address",
            },
       ],
       name: "upgradeTo",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
  },
  {
       inputs: [
            {
                 internalType: "address",
                 name: "newImplementation",
                 type: "address",
            },
            {
                 internalType: "bytes",
                 name: "data",
                 type: "bytes",
            },
       ],
       name: "upgradeToAndCall",
       outputs: [],
       stateMutability: "payable",
       type: "function",
  },
  {
       inputs: [
            {
                 internalType: "uint256",
                 name: "",
                 type: "uint256",
            },
       ],
       name: "validationResultsMap",
       outputs: [
            {
                 internalType: "address",
                 name: "signer",
                 type: "address",
            },
            {
                 internalType: "bytes32",
                 name: "dataHash",
                 type: "bytes32",
            },
            {
                 internalType: "bytes",
                 name: "signature",
                 type: "bytes",
            },
            {
                 internalType: "address",
                 name: "wallet",
                 type: "address",
            },
            {
                 internalType: "uint256",
                 name: "nonce",
                 type: "uint256",
            },
       ],
       stateMutability: "view",
       type: "function",
  },
  {
       stateMutability: "payable",
       type: "receive",
  },
] as const;
