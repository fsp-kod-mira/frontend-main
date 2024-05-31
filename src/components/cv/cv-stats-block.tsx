import { month } from "@/lib/utils";
import {
  DataProps,
  avgDuration,
  maxDismissMonth,
  maxRestDuration,
} from "./util";
import moment from "moment";
import "moment/locale/ru";

export default function CVStatsBlock(props: DataProps) {
  moment.locale("ru");

  const maxMonthIndex = maxDismissMonth(props.data);
  const duration = avgDuration(props.data);
  const restDuration = maxRestDuration(props.data);
  const restDurationStr =
    restDuration > 0 ? moment.duration(restDuration).humanize() : "-";

  return (
    <div className={props.className}>
      <p className="text-muted-foreground">Дополнительная информация</p>
      <ul className="pt-4 text-sm">
        <li>
          Больше всего увольнений: <b>{month[maxMonthIndex]}</b>
        </li>
        <li>
          Ср. продолжительность на одной должности:{" "}
          <b>{moment.duration(duration).humanize()}</b>
        </li>
        <li>
          Макс. продолжительность перерывов: <b>{restDurationStr}</b>
        </li>
      </ul>
    </div>
  );
}
