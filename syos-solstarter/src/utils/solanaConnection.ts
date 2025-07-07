import { Connection } from "@solana/web3.js";

export const RPC_URL =
  process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.devnet.solana.com";

export const solanaConnection = new Connection(RPC_URL, "confirmed");
