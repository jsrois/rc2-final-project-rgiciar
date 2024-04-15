import "./WeightChart.css";
import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

export const WeightChart = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const initialData = [
      { time: "2023-01-10", value: 300 },
      { time: "2023-02-10", value: 310 },
      { time: "2023-03-10", value: 320 },
      { time: "2023-04-10", value: 320 },
      { time: "2023-05-10", value: 310 },
      { time: "2023-06-10", value: 310 },
      { time: "2023-07-10", value: 330 },
      { time: "2023-08-10", value: 320 },
      { time: "2023-09-10", value: 310 },
      { time: "2023-10-10", value: 330 },
      { time: "2023-11-10", value: 330 },
      { time: "2023-12-10", value: 320 },
      { time: "2024-01-10", value: 310 },
      { time: "2024-02-10", value: 320 },
      { time: "2024-03-10", value: 330 },
      { time: "2024-04-10", value: 310 },
    ];

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: "solid", color: "rgba(255, 255, 255, 0)" },
      },
      width: 340,
      height: 200,
      leftPriceScale: {
        visible: true,
        autoScale: false,
        invertScale: false,
        borderVisible: true,
        borderColor: "#ffffff",
        scaleMargins: {
          top: 0.3,
          bottom: 0.25,
        },
        drawTicks: true,
        drawBorder: true,
        tickLength: 5,
        fontSize: 12,
        color: "white",
        mode: 2,
        logarithmicBase: 10,
        minValue: 0,
        maxValue: 600,
      },
      bottomTimeScale: {
        visible: true,
        timeVisible: true,
        borderColor: "#ffffff",
        barSpacing: 5,
        fixLeftEdge: true,
        fixRightEdge: true,
        lockVisibleTimeRangeOnResize: true,
        rightOffset: 12,
        tickMarkFormatter: (time, tickMarkType, locale) => {
          const date = new Date(time * 1000);
          const month = date.toLocaleString(locale, { month: "short" });
          return month;
        },
        color: "white",
      },
    });

    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor: "#DAFE9B",
      topColor: "rgba(255, 255, 255, 0)",
      bottomColor: "rgba(255, 255, 255, 0)",
    });

    newSeries.setData(initialData);

    return () => [chart.remove()];
  }, []);

  return (
    <section className="weightChartSection">
      <div className="weightControl">Weight control</div>
      <div className="weightChartContainer">
        <div ref={chartContainerRef}></div>
      </div>
    </section>
  );
};
