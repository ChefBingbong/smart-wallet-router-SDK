import type { PermitTransferFrom, PermitTransferFromData, Witness } from "@pancakeswap/permit2-sdk";
import { SignatureTransfer } from "@pancakeswap/permit2-sdk";
import type { BigintIsh } from "@pancakeswap/sdk";
import type { ChainId } from "@pancakeswap/sdk";
import type { Address } from "viem";

export const PERMIT_SIG_EXPIRATION = 1800000; // 30 min

export interface PermitWithWithWitness {
      permit: PermitTransferFrom;
      witness: Witness;
}

export const toDeadline = (expiration: number): number => {
      return Math.floor((Date.now() + expiration) / 1000);
};

export const generatePermitTransferFromTypedData = (
      token: Address,
      amount: bigint,
      spender: Address,
      _witness: Address,
      nonce: bigint,
): PermitWithWithWitness => {
      const permit: PermitTransferFrom = {
            permitted: {
                  token: token as string,
                  amount,
            },
            spender,
            nonce: nonce,
            deadline: toDeadline(PERMIT_SIG_EXPIRATION).toString(),
      };

      const witness: Witness = {
            witnessTypeName: "Witness",
            witnessType: { Witness: [{ name: "user", type: "address" }] },
            witness: { user: _witness },
      };

      return { permit, witness };
};

export const permit2TpedData = (
      chainId: ChainId,
      token: Address,
      spender: Address,
      witness: Address,
      amount: bigint,
      nonce: bigint | undefined,
): PermitTransferFromData & PermitWithWithWitness => {
      if (!chainId) throw new Error("PERMIT: missing chainId");
      if (!token) throw new Error("PERMIT: missing token");
      if (!spender) throw new Error("PERMIT: missing spender");
      if (!token) throw new Error("PERMIT: missing token");

      // if (nonce === undefined) throw new Error("PERMIT: missing nonce");

      const permit = generatePermitTransferFromTypedData(token, amount, spender, witness, nonce);
      const {
            domain,
            types,
            values: message,
      } = SignatureTransfer.getPermitData(
            permit.permit,
            "0x89b5B5d93245f543D53CC55923DF841349a65169",
            chainId,
            permit.witness,
      );

      return {
            ...permit,
            domain,
            types,
            primaryType: "PermitTransferFrom",
            values: message,
      };
};
