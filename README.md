
<img width="138" alt="285944091-0e8bc9f5-2c6c-4d1c-88a9-f2cbc75ce942" src="https://github.com/grassets-tech/taikoL1-based-subgraph/assets/82155440/7fd97351-2acb-4093-a903-548a4f2b5537">

# TaikoL1-based-subgraph
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
