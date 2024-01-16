import { NextResponse, NextRequest } from "next/server";

interface DataItem {
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
}

let dataArray: DataItem[] = [
  {
    id: "1",
    name: "Exemplo Fulano de tal",
    email: "exemplofulanodetal@email.com",
    phoneNumber: 2136959253,
  },
  // ... outros dados
];

export async function GET(req: Request, res: Response) {
  try {
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json(dataArray);
}

export async function POST(req: Request, res: Response) {
  try {
    const rawData = await req.text();
    const newData: DataItem = JSON.parse(rawData);

    dataArray.push(newData);

    return NextResponse.json({
      message: "Dados adicionados com sucesso",
      data: newData,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao processar a requisição" });
  }
}
