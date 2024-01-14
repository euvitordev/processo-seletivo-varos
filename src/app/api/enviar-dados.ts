import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body
    // Lógica para processar os dados recebidos
    console.log("Dados recebidos:", data)

    // Retorna os dados como JSON
    res.status(200).json({ success: true, data })
  } else {
    res.status(405).json({ error: "Método não permitido" })
  }
}
