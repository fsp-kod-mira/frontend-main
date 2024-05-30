import Icon from "@mdi/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { mdiEye } from "@mdi/js";
import Link from "next/link";

export default function CVTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Должность</TableHead>
          <TableHead>Опыт работы</TableHead>
          <TableHead>Последнее место работы</TableHead>
          <TableHead>Метрика</TableHead>
          <TableHead className="text-right">Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Frontend-разработчик</TableCell>
          <TableCell>1 год и 5 месяцев</TableCell>
          <TableCell>Tinkoff - Automation QA</TableCell>
          <TableCell>
            <Badge className="bg-green-500">95.8</Badge>
          </TableCell>
          <TableCell className="text-right">
            <Button variant="outline" size="icon" asChild>
              <Link href={`/view-cv/1`}>
                <Icon path={mdiEye} size={0.8} color="#008aff"></Icon>
              </Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Frontend-разработчик</TableCell>
          <TableCell>1 год и 5 месяцев</TableCell>
          <TableCell>Tinkoff - Automation QA</TableCell>
          <TableCell>
            <Badge className="bg-green-500">95.8</Badge>
          </TableCell>
          <TableCell className="text-right">
            <Button variant="outline" size="icon" asChild>
              <Link href={`/view-cv/1`}>
                <Icon path={mdiEye} size={0.8} color="#008aff"></Icon>
              </Link>
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
