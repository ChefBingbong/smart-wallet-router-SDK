// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.6;

interface IPancakeV3Pool {
     function slot0()
          external
          view
          returns (
               uint160 sqrtPriceX96,
               int24 tick,
               uint16 observationIndex,
               uint16 observationCardinality,
               uint16 observationCardinalityNext,
               uint32 feeProtocol,
               bool unlocked
          );
}

interface IPancakeV3Factory {
     function getPool(address tokenA, address tokenB, uint24 fee) external view returns (address pool);
}
