export type DataProps = {
  className?: string;
  data: {
    company: string;
    position: string;
    description?: string;
    range: number[];
  }[];
};

export const dismissStats = (data: DataProps["data"]) => {
  const endDates = data.map((d) => d.range[1]);
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

export const maxDismissMonth = (data: DataProps["data"]) => {
  const stats = dismissStats(data);
  return stats.indexOf(Math.max(...stats));
};

export const avgDuration = (data: DataProps["data"]) => {
  const periods = data.map((d) => d.range[1] - d.range[0]);
  return periods.reduce((a, b) => a + b, 0) / periods.length;
};

export const maxRestDuration = (data: DataProps["data"]) => {
  const periods: number[] = [];
  data.forEach((d, i) => {
    if (i == 0) return;

    const prevEndDate = data[i - 1].range[1];
    const currentStartDate = data[i].range[0];
    const diff = currentStartDate - prevEndDate;
    periods.push(diff);
  });

  const max = Math.max(...periods);
  if (max < 2592000) return 0;
  return max;
};
