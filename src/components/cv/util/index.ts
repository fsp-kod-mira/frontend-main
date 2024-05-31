import { CVDto } from "@/lib/dto/cv.dto";

export type DataProps = {
  className?: string;
  data: {
    company: string;
    position: string;
    description?: string;
    range: number[];
  }[];
};

export const dismissStats = (data: CVDto["jobs"]) => {
  const endDates = data.map((d) => d.end);
  const months = endDates.map((d) => new Date(d).getMonth());

  let chartData = Array.from(Array(12).fill(0));
  const monthData = months.reduce((acc, el) => {
    // @ts-ignore
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  Object.keys(monthData).forEach((k) => {
    // @ts-ignore
    chartData[k] = monthData[k];
  });

  return chartData as number[];
};

export const maxDismissMonth = (data: CVDto["jobs"]) => {
  const stats = dismissStats(data);
  return stats.indexOf(Math.max(...stats));
};

export const avgDuration = (data: CVDto["jobs"]) => {
  const periods = data.map((d) => d.end - d.start);
  return periods.reduce((a, b) => a + b, 0) / periods.length;
};

export const maxRestDuration = (data: CVDto["jobs"]) => {
  const periods: number[] = [];
  data.forEach((d, i) => {
    if (i == 0) return;

    const prevEndDate = data[i - 1].end;
    const currentStartDate = data[i].start;
    const diff = currentStartDate - prevEndDate;
    periods.push(diff);
  });

  const max = Math.max(...periods);
  if (max < 2592000) return 0;
  return max;
};

export const totalJobTime = (data: CVDto["jobs"]) => {
  const periods = data.map((d) => d.end - d.start);
  return periods.reduce((a, b) => a + b);
};

export const dismissStatsPerSeason = (data: CVDto["jobs"]) => {
  const stats = dismissStats(data);
  const winter = stats[0] + stats[1] + stats[11]; // Январь, февраль, декабрь
  const spring = stats[2] + stats[3] + stats[4]; // Март, апрель, май
  const summer = stats[5] + stats[6] + stats[7]; // Июнь, июль, август
  const fall = stats[8] + stats[9] + stats[10]; // Сентябрь, октябрь, ноябрь

  return [winter, spring, summer, fall];
};
