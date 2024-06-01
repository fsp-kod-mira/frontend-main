"use client";

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
import useRepository from "@/hooks/repository";
import moment from "moment";
import { metricColor, totalJobTime } from "./util";
import { CVDto } from "@/lib/dto/cv.dto";
import { useEffect, useState } from "react";
import "moment/locale/ru";

export default function CVTable() {
  moment.locale("ru");
  const { api } = useRepository();
  const [cv, setCv] = useState<CVDto[]>([]);
  const [avg, setAvg] = useState<number>(0);

  useEffect(() => {
    async function run() {
      const data = await api.cv.getAll();
      const avg = await api.cv.avgMetric();
      setCv(data.data);
      setAvg(avg);
    }
    run();
  }, [setCv]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Должность</TableHead>
          <TableHead className="hidden md:table-cell">Опыт работы</TableHead>
          <TableHead className="hidden md:table-cell">
            Последнее место работы
          </TableHead>
          <TableHead>Метрика</TableHead>
          <TableHead className="text-right">Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cv.map((d, i) => (
          <TableRow key={i}>
            <TableCell>{d.position}</TableCell>
            <TableCell>
              {moment.duration(totalJobTime(d.jobs)).humanize()}
            </TableCell>
            <TableCell>{d.jobs[0]?.company ?? "-"}</TableCell>
            <TableCell>
              <Badge style={{ backgroundColor: metricColor(avg, d.metric) }}>
                {d.metric}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="icon" asChild>
                <Link href={`/view-cv/${d.id}`}>
                  <Icon path={mdiEye} size={0.8} color="#008aff"></Icon>
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
