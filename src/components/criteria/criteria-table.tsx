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

export default function CriteriaTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Должность</TableHead>
          <TableHead className="hidden md:table-cell">Описание</TableHead>
          <TableHead className="hidden md:table-cell">
            Доступных резюме
          </TableHead>
          <TableHead className="text-right">Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Frontend-разработчик</TableCell>
          <TableCell className="hidden md:table-cell"></TableCell>
          <TableCell className="hidden md:table-cell">54</TableCell>
          <TableCell className="text-right">
            <Button variant="outline" size="icon" asChild>
              <Link href={`/view-cv`}>
                <Icon path={mdiEye} size={0.8} color="#008aff"></Icon>
              </Link>
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
