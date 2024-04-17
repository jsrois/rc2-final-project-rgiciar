import axios from "axios";
import "./WeightChart.css";
import { createChart } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";

export const WeightChart = () => {
  const chartContainerRef = useRef();
  const [weightData, setWeightData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/weight`);
        const sortedData = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setWeightData(sortedData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    if (weightData.length > 0) {
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

      const chartData = weightData.map((item) => ({
        time: new Date(item.date).getTime() / 1000,
        value: item.weight,
      }));

      const newSeries = chart.addAreaSeries({
        lineColor: "#DAFE9B",
        topColor: "rgba(255, 255, 255, 0)",
        bottomColor: "rgba(255, 255, 255, 0)",
      });

      newSeries.setData(chartData);

      return () => {
        chart.remove();
      };
    }
  }, [weightData]);

  return (
    <section className="weightChartSection">
      <div className="weightHeader">
        <div className="weightControl">Weight control</div>
        <button>Add</button>
      </div>
      <div className="weightChartContainer">
        <div ref={chartContainerRef}></div>
      </div>
    </section>
  );
};
