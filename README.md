# Project Atlas

A Pangea-inspired multi-chain token discovery and launch interface, branded for Atlas.

**Live preview:** https://rafibinarif1997.github.io/project-atlas/

## Current frontend

- Responsive dark market interface with Atlas branding.
- Explore page with search, chain filter, market sorting tabs, token cards and featured actions.
- Navigation for Explore, Bridge, Live Data, Profile, USDP, Launch, plus Pools and Portfolio entry points.
- Token launch configuration and client-side preview.
- Bridge route and amount preview controls.
- Token detail, market analytics, pool, portfolio, profile and USDP information screens.
- Documentation and explicit notices wherever live data or on-chain functionality is not connected.
- GitHub Pages deployment through GitHub Actions.

## Important: prototype status

This repository currently contains a **frontend prototype**, not a production DEX or bridge. Explore token prices, volumes, liquidity, market caps and movers are sample display data. No swap, token deployment, bridge transfer, liquidity deposit, reward claim, or USDP transaction is enabled. The wallet button only requests an injected EVM account; it does not authorize or send transactions.

Do not send funds or treat sample market figures as live market data.

## Networks

The interface lists Robinhood Chain, Base, BNB Chain, Ethereum and Solana as intended network choices. A network appearing in the interface does not mean its RPC, contracts, DEX router, bridge route or market indexer is integrated. Solana wallet support is not implemented.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- lucide-react
- GitHub Pages

## Local development

```bash
npm install
npm run dev
npm run build
```

## Production integration checklist

Before enabling real money or transactions:

1. Confirm chain IDs, RPC endpoints, native currencies, explorer URLs and wallet-switch behavior for every target network.
2. Choose and verify DEX pool factories/routers and exact launch/liquidity model per chain.
3. Implement audited Solidity contracts and deployment scripts; add Solana programs only if Solana is genuinely in scope.
4. Add a trusted market-data indexer and API; replace all sample token/volume/price data.
5. Integrate bridge provider contracts and quote/status APIs; verify supported assets and route security.
6. Add secure token-image/metadata storage, rate limiting, validation and anti-spam controls.
7. Add transaction simulation, slippage/deadline controls, chain mismatch handling and clear wallet confirmation screens.
8. Add automated unit, integration, end-to-end and contract tests; obtain independent security review.
9. Configure production monitoring, incident response, RPC failover and data freshness indicators.

## Security

Never add private keys, seed phrases, API secrets or signing credentials to this public repository or frontend environment. Do not enable deposits, swaps, launches or bridge transfers until integrations have been tested and independently reviewed.
