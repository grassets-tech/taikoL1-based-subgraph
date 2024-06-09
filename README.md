# taikoL1-based-subgraph
Taiko L1 Subgraph (a based rollup http://taiko.xyz)


## Code build
```
npm install
npm install -g @graphprotocol/graph-cli
graph codegen && graph build
```

## Usage: Query

```
{
  blockL2S(first: 5) {
    id
    blockId
    blockTimestamp
    blockHash
  }
  accounts(first: 5) {
    id
    prover {
      id
    }
    proposer {
      id
    }
    contester {
      id
    }
  }
}
```
