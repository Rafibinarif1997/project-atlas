# Project Atlas

A multi-chain token launchpad and decentralized trading ecosystem.

## Initial scope
- First chain: Robinhood Chain (integration gated on verified network and RPC details)
- Planned EVM expansion: Base, BNB Chain, Ethereum
- Solana: future adapter
- Core areas: Explore, token launch, trading, liquidity, token analytics, creator rewards, treasury, bridge, portfolio, admin and public API

## Stack
- React + TypeScript + Vite
- Tailwind CSS
- viem / wagmi integration to be added after chain configuration is verified
- Solidity contracts with Foundry (separate contracts workspace planned)
- PostgreSQL-backed indexer/API (planned)

## Development
```bash
npm install
npm run dev
```

## Security and deployment
This repository is an early frontend scaffold, not a production-ready exchange. Do not deploy contracts, accept deposits, or add real liquidity until chain details, protocol integrations, threat modeling, tests, and independent security review are complete.

## Roadmap
1. Establish UI shell and design system
2. Verify Robinhood Chain network configuration and supported DEX/liquidity primitives
3. Implement wallet and read-only market data adapters
4. Build and test contracts on testnet
5. Add indexer, creator rewards, treasury and analytics
6. Security review before any mainnet launch
