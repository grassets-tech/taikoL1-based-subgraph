import { BigInt, log } from "@graphprotocol/graph-ts";
import { BlockL2, Account, Prover, Proposer, Contester} from "../generated/schema"

export function createOrLoadBlock(blockId: BigInt): BlockL2 {
    let block = BlockL2.load(blockId.toString());
    if (block == null) {
      block = new BlockL2(blockId.toString());
      block.blockId = blockId
      log.info("New block: blockId '{}', id:", [block.blockId.toString(), block.id]);
      block.save();
    }
    return block;
  }

  export function createOrLoadAccount(accountId: string): Account {
    let account = Account.load(accountId);
    if (account == null) {
        account = new Account(accountId);
        account.isProver = false
        account.isProposer = false
        account.isContester = false
      log.info("New account: ", [accountId]);
      account.save();
    }
    return account;
  }

  export function createOrLoadProver(proverId: string): Prover {
    let prover = Prover.load(proverId);
    if (prover == null) {
        prover = new Prover(proverId);
        prover.account = proverId
        prover.totalBlockProved = 0
        log.info("New prover: ", [proverId]);

        let account = createOrLoadAccount(proverId)
        account.isProver = true
        account.save()
        prover.save();
    }
    return prover;
  }

  export function createOrLoadProposer(proposerId: string): Proposer {
    let proposer = Proposer.load(proposerId);
    if (proposer == null) {
        proposer = new Proposer(proposerId);
        proposer.account = proposerId
        proposer.totalBlockProposed = 0
        log.info("New proposer: ", [proposerId]);

        let account = createOrLoadAccount(proposerId)
        account.isProposer = true
        account.save()
        proposer.save();
    }
    return proposer;
  }

  export function createOrLoadContester(contesterId: string): Contester {
    let contester = Contester.load(contesterId);
    if (contester == null) {
        contester = new Contester(contesterId);
        contester.account = contesterId
        contester.totalBlockContested = 0
        log.info("New contester: ", [contesterId]);

        let account = createOrLoadAccount(contesterId)
        account.isContester = true
        account.save()
        contester.save();
    }
    return contester;
  }
