// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

import { dummyUsers } from "@/utils/dummyUsers";
const handler = (req, res) => {
  return res.status(200).json(dummyUsers);
};
export default handler;
