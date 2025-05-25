import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// Registro dos elementos do gráfico
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function ImpactChart({ impact }) {
  const data = {
    labels: ["Água (litros)", "CO₂ (kg)", "Energia (kWh)"],
    datasets: [
      {
        label: "Impacto Ambiental",
        data: [impact.water, impact.co2, impact.energy],
        backgroundColor: ["#4ade80", "#60a5fa", "#facc15"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" }, // Corrigido aqui!
      tooltip: { enabled: true },
    },
  };

  return <Bar data={data} options={options} />;
}

export default ImpactChart;
