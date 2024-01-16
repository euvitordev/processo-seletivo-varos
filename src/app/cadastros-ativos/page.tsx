"use client";
import { HomeIcon, UsersRound } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface UserData {
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
}

export default function DataList() {
  const [userDataList, setUserDataList] = useState<UserData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/cadastro-mercado-financeiro");
      const data = await response.json();
      setUserDataList(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col gap-8 px-8 py-4">
      <header className="w-full border-b py-6">
        <nav className="flex items-center gap-8">
          <Link
            href={"/"}
            className="flex items-center gap-4 underline-offset-8 hover:underline"
          >
            <HomeIcon />
            Início
          </Link>
          <button className="flex items-center gap-4 underline underline-offset-8">
            <UsersRound />
            Cadastros
          </button>
        </nav>
      </header>
      <main className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Cadastros ativos</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Telefone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userDataList.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-bold">{user.name}</TableCell>
                <TableCell className="font-bold">{user.email}</TableCell>
                <TableCell className="font-bold">{user.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total de cadastros</TableCell>
              <TableCell className="text-right">
                {userDataList.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </main>
    </div>
  );
}
