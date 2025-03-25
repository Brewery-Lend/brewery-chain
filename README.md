# Brewery Chain: Micro NFT Lending Rollup

![Brewery Chain Logo](https://via.placeholder.com/150x150.png?text=BC)

Brewery Chain is a specialized Layer 2 rollup solution built on Espresso Systems technology, designed specifically for enabling micro-lending using NFTs as collateral. Our chain creates a seamless, efficient, and secure environment for fractional NFT ownership and lending while maintaining low transaction costs.

## Overview

Brewery Chain addresses the growing demand for liquidity in the NFT market by enabling owners to obtain loans against their digital assets without selling them. By focusing exclusively on micro NFT lending, we've optimized the entire protocol for this specific use case, resulting in faster transactions, lower fees, and a more intuitive user experience.

## Key Features

- **Micro-Collateralized Lending**: Use NFTs as collateral for small to medium-sized loans
- **Fractional Ownership**: Split high-value NFTs into smaller, tradeable shares
- **Low Transaction Fees**: Optimized rollup specifically for NFT lending transactions
- **Fast Settlement**: Quick loan origination and repayment processing
- **Unified Liquidity Pool**: Aggregated lending pool for efficient capital allocation
- **Automated Valuation**: Built-in NFT appraisal system using market data
- **Seamless L1 Bridge**: Easy movement of assets between L1 and Brewery Chain

## Technical Architecture

Brewery Chain is built as an Arbitrum-compatible rollup using Espresso Systems' technology stack:

- Secured by Espresso's Proof of Stake consensus mechanism
- Data availability through HotShot consensus protocol
- EVM-compatible execution environment
- Optimized state management for NFT data handling

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js v16 or higher
- Basic understanding of Ethereum and NFTs

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/brewery-chain.git
cd brewery-chain

# Set up environment variables
cp .env.example .env
# Edit .env with your private keys and configuration

# Start the local development environment
docker compose up
```

### Connecting to Brewery Chain

You can connect to Brewery Chain using standard Ethereum tools by adding our network:

- **Network Name**: Brewery Chain
- **RPC URL**: https://rpc.brewerychain.network
- **Chain ID**: 63639144
- **Currency Symbol**: BREW
- **Block Explorer**: https://explorer.brewerychain.network

## Smart Contract Integration

Brewery Chain provides several core contracts for NFT lending:

- `BreweryVault`: For storing NFT collateral
- `MicroLoanFactory`: For creating and managing loans
- `NFTValueOracle`: For automated NFT valuation
- `LiquidityPool`: For loan funding

Check our developer documentation for detailed integration guides.

## Common Issues

If you see this error during development:
```
error acting as staker                   
err="error advancing stake from node 2 (hash 0xee288c5dcc61206e6868fa7a01da6abaabe22d6c849718a47eb361857b7e8dd8): error generating node action: block validation is still pending"
```

This error is expected when running a newly deployed rollup with no recent activity. It occurs because there are no new nodes to stake on or no new batches have been posted. Simply let the system continue running.

## Contributing

We welcome contributions to Brewery Chain! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## Security

If you discover any security issues, please email security@brewerychain.network instead of using the issue tracker.

## License

Brewery Chain is licensed under [MIT License](LICENSE).

## Contact

- Website: https://brewerychain.network
- Twitter: [@BreweryChain](https://twitter.com/BreweryChain)
- Discord: [Brewery Chain Community](https://discord.gg/brewerychain)
- Email: info@brewerychain.network
