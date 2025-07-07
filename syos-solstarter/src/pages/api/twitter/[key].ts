import type { NextApiRequest, NextApiResponse } from "next";
import { getHandleAndRegistryKey } from "@solana/spl-name-service";
import { PublicKey } from "@solana/web3.js";
import { solanaConnection } from "@utils/solanaConnection";

export type TwitterResponse = { handle: string | undefined };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TwitterResponse>
) {
  const { key } = req.query;

  const connection = solanaConnection;
  if (key && key.length > 0 && typeof key === "string") {
    try {
      const [twitterHandle] = await getHandleAndRegistryKey(
        connection,
        new PublicKey(key)
      );

      res.status(200).json({ handle: twitterHandle });
    } catch (e: any) {
      res.status(404).json({ handle: undefined });
    }
  }
}
