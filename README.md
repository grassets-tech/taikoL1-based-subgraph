
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

### Query Top 10 Proposers by total blocks proposed
```
{
  proposers(first: 10, orderBy: totalBlockProposed, orderDirection: desc) {
    id
    totalBlockProposed
  }
}
```

Example:
```
{
  "data": {
    "proposers": [
      {
        "id": "0x000000633b68f5d8d3a86593ebb815b4663bcbe0",
        "totalBlockProposed": 51192
      },
      {
        "id": "0xb9e500cf14b355f50217f1a89040df1765c5e70e",
        "totalBlockProposed": 3
      },
      {
        "id": "0x83efd3ee9278cc7800e93e7f9a14607f5c331b3e",
        "totalBlockProposed": 2
      },
      {
        "id": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
        "totalBlockProposed": 1
      },
      {
        "id": "0x8be4491ced884d5c6b1667bd4e20b975e079a469",
        "totalBlockProposed": 1
      },
      {
        "id": "0x56008924d31aa5551b61e02121c6b553f3955678",
        "totalBlockProposed": 1
      }
    ]
  }
}
```

### Query Top 10 Provers by total blocks proved
```
{
  provers(first: 10, orderBy: totalBlockProved, orderDirection: desc) {
    totalBlockProved
    id
  }
}
```
Example:
```
{
  "data": {
    "provers": [
      {
        "id": "0x68d30f47f19c07bccef4ac7fae2dc12fca3e0dc9",
        "totalBlockProved": 51155
      },
      {
        "id": "0xa01d464ca3982daa97b19fa7f8a232eb11a9ddb3",
        "totalBlockProved": 28
      },
      {
        "id": "0x579a8d63a2db646284cbfe31fe5082c9989e985c",
        "totalBlockProved": 13
      },
      {
        "id": "0xc23ff969d6a84a3b6c8c8fa9ca8d9b0f1f7176f7",
        "totalBlockProved": 2
      },
      {
        "id": "0x83efd3ee9278cc7800e93e7f9a14607f5c331b3e",
        "totalBlockProved": 1
      }
    ]
  }
}
```

### Query accounts with their roles prover/proposer/contester
```
{
  accounts(first: 5) {
    id
    contester {
      id
    }
    isContester
    isProposer
    isProver
  }
}
```

Example:
```
{
  "data": {
    "accounts": [
      {
        "contester": [],
        "id": "0x000000633b68f5d8d3a86593ebb815b4663bcbe0",
        "isContester": false,
        "isProposer": true,
        "isProver": false
      },
      {
        "contester": [],
        "id": "0x56008924d31aa5551b61e02121c6b553f3955678",
        "isContester": false,
        "isProposer": true,
        "isProver": false
      },
      {
        "contester": [],
        "id": "0x579a8d63a2db646284cbfe31fe5082c9989e985c",
        "isContester": false,
        "isProposer": false,
        "isProver": true
      },
      {
        "contester": [],
        "id": "0x68d30f47f19c07bccef4ac7fae2dc12fca3e0dc9",
        "isContester": false,
        "isProposer": false,
        "isProver": true
      },
      {
        "contester": [],
        "id": "0x83efd3ee9278cc7800e93e7f9a14607f5c331b3e",
        "isContester": false,
        "isProposer": true,
        "isProver": true
      }
    ]
  }
}
```
### Query L1 tx fee spent to propose and to prove for last 10 blocks
```
{
  blockL2S(first: 10, orderBy: blockId, orderDirection: desc) {
    blockId
    proposed {
      txFee
    }
    proved {
      txFee
    }
  }
}
```

Example:
```
{
  "data": {
    "blockL2S": [
      {
        "blockId": "51218",
        "proposed": [
          {
            "txFee": "4777759913224320"
          }
        ],
        "proved": []
      },
      {
        "blockId": "51217",
        "proposed": [
          {
            "txFee": "4567745740434674"
          }
        ],
        "proved": []
      },
      {
        "blockId": "51216",
        "proposed": [
          {
            "txFee": "5443756653033600"
          }
        ],
        "proved": []
      },
      {
        "blockId": "51215",
        "proposed": [
          {
            "txFee": "4824482466886240"
          }
        ],
        "proved": []
      },
      {
        "blockId": "51214",
        "proposed": [
          {
            "txFee": "5554961555760320"
          }
        ],
        "proved": [
          {
            "txFee": "5328901987436060"
          }
        ]
      },
      {
        "blockId": "51213",
        "proposed": [
          {
            "txFee": "4502787972628946"
          }
        ],
        "proved": [
          {
            "txFee": "5879770970681760"
          }
        ]
      },
      {
        "blockId": "51212",
        "proposed": [
          {
            "txFee": "5410951076936768"
          }
        ],
        "proved": [
          {
            "txFee": "7118568673502944"
          }
        ]
      },
      {
        "blockId": "51211",
        "proposed": [
          {
            "txFee": "5012741569155852"
          }
        ],
        "proved": [
          {
            "txFee": "6211615359946472"
          }
        ]
      },
      {
        "blockId": "51210",
        "proposed": [
          {
            "txFee": "5086445255593240"
          }
        ],
        "proved": [
          {
            "txFee": "5629225804854270"
          }
        ]
      },
      {
        "blockId": "51209",
        "proposed": [
          {
            "txFee": "7402426888387960"
          }
        ],
        "proved": [
          {
            "txFee": "5628769402726950"
          }
        ]
      }
    ]
  }
}
```

### Query FULL details about L2 block
```
{
  blockL2(id: "40000") {
    id
    blockHash
    blockId
    blockTimestamp
    status
    proposed {
      assignedProver
      blockIdL2
      blockNumberL1
      blockTimestampL1
      livenessBond
      id
      meta_blobHash
      meta_blobUsed
      meta_coinbase
      meta_depositsHash
      meta_difficulty
      meta_extraData
      meta_gasLimit
      meta_id
      meta_l1Hash
      meta_l1Height
      meta_minTier
      meta_parentMetaHash
      meta_timestamp
      proposerId
      transactionHashL1
      txFee
      txGasPrice
      txGasUsed
    }
    proved {
      blockIdL2
      blockNumberL1
      blockTimestampL1
      id
      proverId
      tier
      tran_blockHash
      tran_graffiti
      tran_parentHash
      tran_stateRoot
      transactionHashL1
      txFee
      txGasPrice
      txGasUsed
      validityBond
    }
    verified {
      assignedProver
      blockHash
      blockIdL2
      blockNumberL1
      blockTimestampL1
      id
      prover
      stateRoot
      tier
      transactionHashL1
      txFee
      txGasPrice
      txGasUsed
    }
  }
}
```

Example:
```
{
  "data": {
    "blockL2": {
      "blockHash": "0xfbbfda8a91f4b3b15c234dbc1de2dc3f881dc6828cfe512cac722efd4abe0539",
      "blockId": "40000",
      "blockTimestamp": "1717710839",
      "id": "40000",
      "proposed": [
        {
          "assignedProver": "0x68d30f47f19c07bccef4ac7fae2dc12fca3e0dc9",
          "blockIdL2": "40000",
          "blockNumberL1": "20035598",
          "blockTimestampL1": "1717710839",
          "id": "0xc3054718ff8d850e02229df6b45bf29258b26087a9bdd3c8b76f2397b30a125f42000000",
          "livenessBond": "250000000000000000000",
          "meta_blobHash": "0x011bbba68e514e1530006178c4ebada5402e5a9f97d22f78b172d7e1e2634503",
          "meta_blobUsed": true,
          "meta_coinbase": "0x000000633b68f5d8d3a86593ebb815b4663bcbe0",
          "meta_depositsHash": "0x569e75fc77c1a856f6daaf9e69d8a9566ca34aa47f9133711ce065a571af0cfd",
          "meta_difficulty": "0xb3165986097bfec8f8775715a4e4bb9c79406080fa0b1c7d64dda7f74f91988b",
          "meta_extraData": "0x302e31382e302d64657600000000000000000000000000000000000000000000",
          "meta_gasLimit": "240000000",
          "meta_id": "40000",
          "meta_l1Hash": "0xa7ab739c4edb6f415c2d41f286c556776c06fe17d9d52e69b522bc9de56ef7b2",
          "meta_l1Height": "20035597",
          "meta_minTier": 200,
          "meta_parentMetaHash": "0xff4b747e74ef6480fb0d4bd372f4cc9ab151298a3c87c0f8066b6d6f6409ca2f",
          "meta_timestamp": "1717710839",
          "proposerId": "0x000000633b68f5d8d3a86593ebb815b4663bcbe0",
          "transactionHashL1": "0xc3054718ff8d850e02229df6b45bf29258b26087a9bdd3c8b76f2397b30a125f",
          "txFee": "7396803596425715",
          "txGasPrice": "21032827085",
          "txGasUsed": "351679"
        }
      ],
      "proved": [
        {
          "blockIdL2": "40000",
          "blockNumberL1": "20035606",
          "blockTimestampL1": "1717710935",
          "id": "0x9b9b742656d86ffbe87596181725d822db81e3601dd5846bbcd140b27016ae1381010000",
          "proverId": "0x68d30f47f19c07bccef4ac7fae2dc12fca3e0dc9",
          "tier": 200,
          "tran_blockHash": "0xfbbfda8a91f4b3b15c234dbc1de2dc3f881dc6828cfe512cac722efd4abe0539",
          "tran_graffiti": "0x0000000000000000000000000000000000000000000000000000000000000000",
          "tran_parentHash": "0x1a06c09ed71a9641160090afb0c31fce42ca86f57004f24fdcdbc732d3f71be8",
          "tran_stateRoot": "0x8fe77cdda30d85838c1b8e8bfc44e306c00805c52602f4e5090406a3dcdb8a3a",
          "transactionHashL1": "0x9b9b742656d86ffbe87596181725d822db81e3601dd5846bbcd140b27016ae13",
          "txFee": "5816545378302650",
          "txGasPrice": "15963293845",
          "txGasUsed": "364370",
          "validityBond": "250000000000000000000"
        }
      ],
      "status": "VERIFIED",
      "verified": [
        {
          "assignedProver": "0x68d30f47f19c07bccef4ac7fae2dc12fca3e0dc9",
          "blockHash": "0xfbbfda8a91f4b3b15c234dbc1de2dc3f881dc6828cfe512cac722efd4abe0539",
          "blockIdL2": "40000",
          "blockNumberL1": "20042769",
          "blockTimestampL1": "1717797335",
          "id": "0xed36881ad54b66c7cadde6845f94dc7e2c7a628b27f0a96a94280a4ff5588737a1000000",
          "prover": "0x68d30f47f19c07bccef4ac7fae2dc12fca3e0dc9",
          "stateRoot": "0x8fe77cdda30d85838c1b8e8bfc44e306c00805c52602f4e5090406a3dcdb8a3a",
          "tier": 200,
          "transactionHashL1": "0xed36881ad54b66c7cadde6845f94dc7e2c7a628b27f0a96a94280a4ff5588737",
          "txFee": "3088512319044334",
          "txGasPrice": "10613845606",
          "txGasUsed": "290989"
        }
      ]
    }
  }
}
```



