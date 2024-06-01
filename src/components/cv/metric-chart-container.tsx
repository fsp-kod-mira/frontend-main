import useRepository from "@/hooks/repository";
import ClientOnly from "../client-only";
import MetricChart from "./metric-chart";

type MetricChartContainerProps = {
  id: string;
};

export default async function MetricChartContainer(
  props: MetricChartContainerProps
) {
  const { api } = useRepository();
  const data = await api.cv.getAll();
  const metrics = data.data.map((d) => d.metric).sort();

  const currentMetric = data.data.find((d) => d.id == props.id)?.metric ?? 0;
  const currentMetricIndex = metrics.indexOf(currentMetric);

  return (
    <>
      <ClientOnly>
        <MetricChart
          data={metrics}
          dot={{ x: currentMetricIndex + 1, y: currentMetric }}
        />
      </ClientOnly>
    </>
  );
}
