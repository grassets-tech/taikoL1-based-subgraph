import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  BeaconUpgraded,
  BlockProposed,
  BlockProposed1,
  BlockVerified,
  BlockVerified1,
  Initialized,
  OwnershipTransferStarted,
  OwnershipTransferred,
  Paused,
  ProvingPaused,
  ProvingPaused1,
  StateVariablesUpdated,
  StateVariablesUpdated1,
  TransitionContested,
  TransitionContested1,
  TransitionProved,
  TransitionProved1,
  Unpaused,
  Upgraded
} from "../generated/TaikoL1/TaikoL1"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createBlockProposedEvent(
  blockId: BigInt,
  assignedProver: Address,
  livenessBond: BigInt,
  meta: ethereum.Tuple,
  depositsProcessed: Array<ethereum.Tuple>
): BlockProposed {
  let blockProposedEvent = changetype<BlockProposed>(newMockEvent())

  blockProposedEvent.parameters = new Array()

  blockProposedEvent.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  blockProposedEvent.parameters.push(
    new ethereum.EventParam(
      "assignedProver",
      ethereum.Value.fromAddress(assignedProver)
    )
  )
  blockProposedEvent.parameters.push(
    new ethereum.EventParam(
      "livenessBond",
      ethereum.Value.fromUnsignedBigInt(livenessBond)
    )
  )
  blockProposedEvent.parameters.push(
    new ethereum.EventParam("meta", ethereum.Value.fromTuple(meta))
  )
  blockProposedEvent.parameters.push(
    new ethereum.EventParam(
      "depositsProcessed",
      ethereum.Value.fromTupleArray(depositsProcessed)
    )
  )

  return blockProposedEvent
}

export function createBlockProposed1Event(
  blockId: BigInt,
  assignedProver: Address,
  livenessBond: BigInt,
  meta: ethereum.Tuple,
  depositsProcessed: Array<ethereum.Tuple>
): BlockProposed1 {
  let blockProposed1Event = changetype<BlockProposed1>(newMockEvent())

  blockProposed1Event.parameters = new Array()

  blockProposed1Event.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  blockProposed1Event.parameters.push(
    new ethereum.EventParam(
      "assignedProver",
      ethereum.Value.fromAddress(assignedProver)
    )
  )
  blockProposed1Event.parameters.push(
    new ethereum.EventParam(
      "livenessBond",
      ethereum.Value.fromUnsignedBigInt(livenessBond)
    )
  )
  blockProposed1Event.parameters.push(
    new ethereum.EventParam("meta", ethereum.Value.fromTuple(meta))
  )
  blockProposed1Event.parameters.push(
    new ethereum.EventParam(
      "depositsProcessed",
      ethereum.Value.fromTupleArray(depositsProcessed)
    )
  )

  return blockProposed1Event
}

export function createBlockVerifiedEvent(
  blockId: BigInt,
  prover: Address,
  blockHash: Bytes,
  stateRoot: Bytes,
  tier: i32
): BlockVerified {
  let blockVerifiedEvent = changetype<BlockVerified>(newMockEvent())

  blockVerifiedEvent.parameters = new Array()

  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam("prover", ethereum.Value.fromAddress(prover))
  )
  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "blockHash",
      ethereum.Value.fromFixedBytes(blockHash)
    )
  )
  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "stateRoot",
      ethereum.Value.fromFixedBytes(stateRoot)
    )
  )
  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )

  return blockVerifiedEvent
}

export function createBlockVerified1Event(
  blockId: BigInt,
  prover: Address,
  blockHash: Bytes,
  stateRoot: Bytes,
  tier: i32
): BlockVerified1 {
  let blockVerified1Event = changetype<BlockVerified1>(newMockEvent())

  blockVerified1Event.parameters = new Array()

  blockVerified1Event.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  blockVerified1Event.parameters.push(
    new ethereum.EventParam("prover", ethereum.Value.fromAddress(prover))
  )
  blockVerified1Event.parameters.push(
    new ethereum.EventParam(
      "blockHash",
      ethereum.Value.fromFixedBytes(blockHash)
    )
  )
  blockVerified1Event.parameters.push(
    new ethereum.EventParam(
      "stateRoot",
      ethereum.Value.fromFixedBytes(stateRoot)
    )
  )
  blockVerified1Event.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )

  return blockVerified1Event
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferStartedEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferStarted {
  let ownershipTransferStartedEvent = changetype<OwnershipTransferStarted>(
    newMockEvent()
  )

  ownershipTransferStartedEvent.parameters = new Array()

  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferStartedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createProvingPausedEvent(paused: boolean): ProvingPaused {
  let provingPausedEvent = changetype<ProvingPaused>(newMockEvent())

  provingPausedEvent.parameters = new Array()

  provingPausedEvent.parameters.push(
    new ethereum.EventParam("paused", ethereum.Value.fromBoolean(paused))
  )

  return provingPausedEvent
}

export function createProvingPaused1Event(paused: boolean): ProvingPaused1 {
  let provingPaused1Event = changetype<ProvingPaused1>(newMockEvent())

  provingPaused1Event.parameters = new Array()

  provingPaused1Event.parameters.push(
    new ethereum.EventParam("paused", ethereum.Value.fromBoolean(paused))
  )

  return provingPaused1Event
}

export function createStateVariablesUpdatedEvent(
  slotB: ethereum.Tuple
): StateVariablesUpdated {
  let stateVariablesUpdatedEvent = changetype<StateVariablesUpdated>(
    newMockEvent()
  )

  stateVariablesUpdatedEvent.parameters = new Array()

  stateVariablesUpdatedEvent.parameters.push(
    new ethereum.EventParam("slotB", ethereum.Value.fromTuple(slotB))
  )

  return stateVariablesUpdatedEvent
}

export function createStateVariablesUpdated1Event(
  slotB: ethereum.Tuple
): StateVariablesUpdated1 {
  let stateVariablesUpdated1Event = changetype<StateVariablesUpdated1>(
    newMockEvent()
  )

  stateVariablesUpdated1Event.parameters = new Array()

  stateVariablesUpdated1Event.parameters.push(
    new ethereum.EventParam("slotB", ethereum.Value.fromTuple(slotB))
  )

  return stateVariablesUpdated1Event
}

export function createTransitionContestedEvent(
  blockId: BigInt,
  tran: ethereum.Tuple,
  contester: Address,
  contestBond: BigInt,
  tier: i32
): TransitionContested {
  let transitionContestedEvent = changetype<TransitionContested>(newMockEvent())

  transitionContestedEvent.parameters = new Array()

  transitionContestedEvent.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  transitionContestedEvent.parameters.push(
    new ethereum.EventParam("tran", ethereum.Value.fromTuple(tran))
  )
  transitionContestedEvent.parameters.push(
    new ethereum.EventParam("contester", ethereum.Value.fromAddress(contester))
  )
  transitionContestedEvent.parameters.push(
    new ethereum.EventParam(
      "contestBond",
      ethereum.Value.fromUnsignedBigInt(contestBond)
    )
  )
  transitionContestedEvent.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )

  return transitionContestedEvent
}

export function createTransitionContested1Event(
  blockId: BigInt,
  tran: ethereum.Tuple,
  contester: Address,
  contestBond: BigInt,
  tier: i32
): TransitionContested1 {
  let transitionContested1Event = changetype<TransitionContested1>(
    newMockEvent()
  )

  transitionContested1Event.parameters = new Array()

  transitionContested1Event.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  transitionContested1Event.parameters.push(
    new ethereum.EventParam("tran", ethereum.Value.fromTuple(tran))
  )
  transitionContested1Event.parameters.push(
    new ethereum.EventParam("contester", ethereum.Value.fromAddress(contester))
  )
  transitionContested1Event.parameters.push(
    new ethereum.EventParam(
      "contestBond",
      ethereum.Value.fromUnsignedBigInt(contestBond)
    )
  )
  transitionContested1Event.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )

  return transitionContested1Event
}

export function createTransitionProvedEvent(
  blockId: BigInt,
  tran: ethereum.Tuple,
  prover: Address,
  validityBond: BigInt,
  tier: i32
): TransitionProved {
  let transitionProvedEvent = changetype<TransitionProved>(newMockEvent())

  transitionProvedEvent.parameters = new Array()

  transitionProvedEvent.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  transitionProvedEvent.parameters.push(
    new ethereum.EventParam("tran", ethereum.Value.fromTuple(tran))
  )
  transitionProvedEvent.parameters.push(
    new ethereum.EventParam("prover", ethereum.Value.fromAddress(prover))
  )
  transitionProvedEvent.parameters.push(
    new ethereum.EventParam(
      "validityBond",
      ethereum.Value.fromUnsignedBigInt(validityBond)
    )
  )
  transitionProvedEvent.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )

  return transitionProvedEvent
}

export function createTransitionProved1Event(
  blockId: BigInt,
  tran: ethereum.Tuple,
  prover: Address,
  validityBond: BigInt,
  tier: i32
): TransitionProved1 {
  let transitionProved1Event = changetype<TransitionProved1>(newMockEvent())

  transitionProved1Event.parameters = new Array()

  transitionProved1Event.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  transitionProved1Event.parameters.push(
    new ethereum.EventParam("tran", ethereum.Value.fromTuple(tran))
  )
  transitionProved1Event.parameters.push(
    new ethereum.EventParam("prover", ethereum.Value.fromAddress(prover))
  )
  transitionProved1Event.parameters.push(
    new ethereum.EventParam(
      "validityBond",
      ethereum.Value.fromUnsignedBigInt(validityBond)
    )
  )
  transitionProved1Event.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )

  return transitionProved1Event
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
