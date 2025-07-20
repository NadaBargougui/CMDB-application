import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { region, name } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#546fca]">🧭 Tableau de bord</h1>
      <p className="text-lg mt-4">
        Région : <strong>{region}</strong>
      </p>
      <p className="text-lg">
        Nom : <strong>{name}</strong>
      </p>

      {/* You can add charts, graphs, and widgets here */}
    </div>
  );
};

export default Dashboard;
