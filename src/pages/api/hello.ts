// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  res.status(200).json({ name: "pchan" });
}
export default handler