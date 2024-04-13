import { ColorType, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

export const WeightChart = () => {

    const chartContainerRef = useRef();

    useEffect(() => {

        const initialData = [
            { time: "2023-10-14", value: 400 },
            { time: "2023-10-24", value: 350 },
            { time: "2023-11-14", value: 320 },
            { time: "2023-11-24", value: 380 },
            { time: "2023-12-14", value: 420 },
            { time: "2023-12-24", value: 360 },
        ];

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: "white" },
            },
            width: 500,
            height: 200,
        });

        const newSeries = chart.addAreaSeries({
            lineColor: "#2962FF",
            topColor: "#2962FF",
            bottomColor: "#2962FF"
        });

        newSeries.setData(initialData);

        return () => [chart.remove()];

    }, []);


  return (
    <div ref={chartContainerRef}></div>
  )
}
