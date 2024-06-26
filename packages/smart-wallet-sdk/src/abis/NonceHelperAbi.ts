export const nonceHelperAbi = [
      {
            inputs: [{ internalType: "address", name: "_permit2", type: "address" }],
            stateMutability: "nonpayable",
            type: "constructor",
      },
      {
            inputs: [{ internalType: "address", name: "owner", type: "address" }],
            name: "nextNonce",
            outputs: [{ internalType: "uint256", name: "nonce", type: "uint256" }],
            stateMutability: "view",
            type: "function",
      },
      {
            inputs: [
                  { internalType: "address", name: "owner", type: "address" },
                  { internalType: "uint256", name: "start", type: "uint256" },
            ],
            name: "nextNonceAfter",
            outputs: [{ internalType: "uint256", name: "nonce", type: "uint256" }],
            stateMutability: "view",
            type: "function",
      },
      {
            inputs: [],
            name: "permit2",
            outputs: [{ internalType: "contract ISignatureTransfer", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
      },
] as const;
