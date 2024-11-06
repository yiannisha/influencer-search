import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    usernames: string[];
} | {
    error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    // get the query from the request body
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ error: "Missing query" });
    }

    const body = JSON.stringify({ query });
    const resp = await fetch('https://facebook-rpa-328991909505.us-central1.run.app/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });

    if (!resp.ok) {
        return res.status(500).json({ error: "Error fetching data" });
    }

    const data = await resp.json();
    const usernames = data.map((d: { username: string }) => d.username);

    res.status(200).json({ usernames });
}
