import { BigInt, log } from "@graphprotocol/graph-ts";
import { createOrLoadBlock, createOrLoadAccount, createOrLoadProposer, createOrLoadProver, createOrLoadContester } from './utils'

import {
  AdminChanged as AdminChangedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  BlockProposed as BlockProposedEvent,
  BlockVerified as BlockVerifiedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferStarted as OwnershipTransferStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  ProvingPaused as ProvingPausedEvent,
  StateVariablesUpdated as StateVariablesUpdatedEvent,
  TransitionContested as TransitionContestedEvent,
  TransitionProved as TransitionProvedEvent,
  Unpaused as UnpausedEvent,
  Upgraded as UpgradedEvent
} from "../generated/TaikoL1/TaikoL1"
import {
  AdminChanged,
  BeaconUpgraded,
  BlockProposed,
  BlockVerified,
  Initialized,
  OwnershipTransferStarted,
  OwnershipTransferred,
  Paused,
  ProvingPaused,
  StateVariablesUpdated,
  TransitionContested,
  TransitionProved,
  Unpaused,
  Upgraded
} from "../generated/schema"

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.beacon = event.params.beacon

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlockProposed(event: BlockProposedEvent): void {
  let entity = new BlockProposed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.txGasUsed = event.receipt ? event.receipt!.gasUsed : new BigInt(0);
  entity.txGasPrice = event.transaction.gasPrice
  entity.txFee = entity.txGasPrice * entity.txGasUsed

  entity.proposerId = event.transaction.from
  
  let proposer = createOrLoadProposer(event.transaction.from.toHexString())
  proposer.totalBlockProposed = proposer.totalBlockProposed + 1
  proposer.save()

  entity.proposer = proposer.id

  entity.blockIdL2 = event.params.blockId
  entity.assignedProver = event.params.assignedProver
  entity.livenessBond = event.params.livenessBond
  entity.meta_l1Hash = event.params.meta.l1Hash
  entity.meta_difficulty = event.params.meta.difficulty
  entity.meta_blobHash = event.params.meta.blobHash
  entity.meta_extraData = event.params.meta.extraData
  entity.meta_depositsHash = event.params.meta.depositsHash
  entity.meta_coinbase = event.params.meta.coinbase
  entity.meta_id = event.params.meta.id
  entity.meta_gasLimit = event.params.meta.gasLimit
  entity.meta_timestamp = event.params.meta.timestamp
  entity.meta_l1Height = event.params.meta.l1Height
  entity.meta_minTier = event.params.meta.minTier
  entity.meta_blobUsed = event.params.meta.blobUsed
  entity.meta_parentMetaHash = event.params.meta.parentMetaHash
  // entity.depositsProcessed = event.params.depositsProcessed

  entity.blockNumberL1 = event.block.number
  entity.blockTimestampL1 = event.block.timestamp
  entity.transactionHashL1 = event.transaction.hash
  
  let blockL2 = createOrLoadBlock(event.params.blockId)
  blockL2.status = 'PROPOSED'
  blockL2.blockTimestamp = event.block.timestamp
  blockL2.save()

  entity.blockL2 = blockL2.id
  
  entity.save()
}

export function handleBlockVerified(event: BlockVerifiedEvent): void {
  let entity = new BlockVerified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.txGasUsed = event.receipt ? event.receipt!.gasUsed : new BigInt(0);
  entity.txGasPrice = event.transaction.gasPrice
  entity.txFee = entity.txGasPrice * entity.txGasUsed
  
  entity.blockIdL2 = event.params.blockId
  entity.assignedProver = event.params.prover
  entity.prover = event.params.prover
  entity.blockHash = event.params.blockHash
  entity.stateRoot = event.params.stateRoot
  entity.tier = event.params.tier

  entity.blockNumberL1 = event.block.number
  entity.blockTimestampL1 = event.block.timestamp
  entity.transactionHashL1 = event.transaction.hash

  let blockL2 = createOrLoadBlock(event.params.blockId)
  blockL2.status = 'VERIFIED'
  blockL2.blockHash = event.params.blockHash
  blockL2.save()

  entity.blockL2 = blockL2.id

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferStarted(
  event: OwnershipTransferStartedEvent
): void {
  let entity = new OwnershipTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProvingPaused(event: ProvingPausedEvent): void {
  let entity = new ProvingPaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paused = event.params.paused

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStateVariablesUpdated(
  event: StateVariablesUpdatedEvent
): void {
  let entity = new StateVariablesUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.slotB_numBlocks = event.params.slotB.numBlocks
  entity.slotB_lastVerifiedBlockId = event.params.slotB.lastVerifiedBlockId
  entity.slotB_provingPaused = event.params.slotB.provingPaused
  entity.slotB___reservedB1 = event.params.slotB.__reservedB1
  entity.slotB___reservedB2 = event.params.slotB.__reservedB2
  entity.slotB___reservedB3 = event.params.slotB.__reservedB3
  entity.slotB_lastUnpausedAt = event.params.slotB.lastUnpausedAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}


export function handleTransitionContested(
  event: TransitionContestedEvent
): void {
  let entity = new TransitionContested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.txGasUsed = event.receipt ? event.receipt!.gasUsed : new BigInt(0);
  entity.txGasPrice = event.transaction.gasPrice
  entity.txFee = entity.txGasPrice * entity.txGasUsed

  entity.blockIdL2 = event.params.blockId
  entity.tran_parentHash = event.params.tran.parentHash
  entity.tran_blockHash = event.params.tran.blockHash
  entity.tran_stateRoot = event.params.tran.stateRoot
  entity.tran_graffiti = event.params.tran.graffiti

  entity.contesterId = event.params.contester
  let contester = createOrLoadContester(event.params.contester.toHexString())
  contester.totalBlockContested = contester.totalBlockContested + 1
  contester.save()
  entity.contester = contester.id

  entity.contestBond = event.params.contestBond
  entity.tier = event.params.tier

  entity.blockNumberL1 = event.block.number
  entity.blockTimestampL1 = event.block.timestamp
  entity.transactionHashL1 = event.transaction.hash

  let blockL2 = createOrLoadBlock(event.params.blockId)
  blockL2.status = 'CONTESTED'
  blockL2.save()

  entity.blockL2 = blockL2.id

  entity.save()
}

export function handleTransitionProved(event: TransitionProvedEvent): void {
  let entity = new TransitionProved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.txGasUsed = event.receipt ? event.receipt!.gasUsed : new BigInt(0);
  entity.txGasPrice = event.transaction.gasPrice
  entity.txFee = entity.txGasPrice * entity.txGasUsed

  entity.proverId = event.params.prover
  let prover = createOrLoadProver(event.params.prover.toHexString())
  prover.totalBlockProved = prover.totalBlockProved + 1
  prover.save()

  entity.prover = prover.id

  entity.blockIdL2 = event.params.blockId
  entity.tran_parentHash = event.params.tran.parentHash
  entity.tran_blockHash = event.params.tran.blockHash
  entity.tran_stateRoot = event.params.tran.stateRoot
  entity.tran_graffiti = event.params.tran.graffiti
  entity.validityBond = event.params.validityBond
  entity.tier = event.params.tier
  entity.blockNumberL1 = event.block.number
  entity.blockTimestampL1 = event.block.timestamp
  entity.transactionHashL1 = event.transaction.hash

  let blockL2 = createOrLoadBlock(event.params.blockId)
  blockL2.status = 'PROVED'
  blockL2.save()

  entity.blockL2 = blockL2.id

  entity.save()
}


export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
