import axios from "axios";
import { createChart } from "lightweight-charts"; // Agrega esta línea de importación
import "./WeightChart.css";
import { useEffect, useRef, useState } from "react";
import { WeightModal } from "./WeightModal";

export const WeightChart = () => {
  const chartContainerRef = useRef();
  const [weightData, setWeightData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (reload) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/weight`);
          const sortedData = response.data.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );
          setWeightData(sortedData);
          setReload(false);
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      };
      fetchData();
    }
    
  }, [reload]);

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

  const handleAddWeight = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveWeight = async (weight) => {
    try {
      const currentDate = new Date().toISOString().split("T")[0];
      await axios.post(`http://localhost:8080/weight`, {
        date: currentDate,
        weight: weight,
      });
      setReload(true)
    } catch (error) {
      console.error("Error saving weight:", error);
    }
  };

  return (
    <section className="weightChartSection">
      <div className="weightHeader">
        <div className="weightControl">Weight control</div>
        <button onClick={handleAddWeight}>Add</button>
      </div>
      <div className="weightChartContainer">
        <div ref={chartContainerRef}></div>
      </div>
      {isModalOpen && (
        <WeightModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveWeight}
        />
      )}
    </section>
  );
};
