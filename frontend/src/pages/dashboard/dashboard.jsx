import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { updateDashboardName } from "../../store/slices/dashboardSlice";

const Dashboard = () => {
  const { region, name: initialName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dashboard = useSelector((state) =>
    state.dashboard.dashboards.find(
      (d) => d.region === region && d.name === initialName
    )
  );

  // Dashboard name editing
  const [name, setName] = useState(dashboard?.name || initialName);
  const [isEditingName, setIsEditingName] = useState(false);

  // Creation date
  const [creationDate, setCreationDate] = useState(null);

  // Table data
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [tableData, setTableData] = useState([]);

  const startEditingName = () => setIsEditingName(true);

  const saveName = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      alert("Name cannot be empty");
      return;
    }

    dispatch(
      updateDashboardName({
        region,
        oldName: initialName,
        newName: trimmed,
      })
    );
    setIsEditingName(false);
    navigate(`/dashboard/${region}/${encodeURIComponent(trimmed)}`);
  };

  const createTable = () => {
    const inputRows = parseInt(prompt("Enter number of rows:", "3"));
    const inputCols = parseInt(prompt("Enter number of columns:", "3"));

    if (
      isNaN(inputRows) ||
      isNaN(inputCols) ||
      inputRows <= 0 ||
      inputCols <= 0
    ) {
      alert("Please enter valid positive numbers for rows and columns.");
      return;
    }

    setRows(inputRows);
    setCols(inputCols);
    setTableData(
      Array(inputRows)
        .fill(null)
        .map(() => Array(inputCols).fill(""))
    );
    setCreationDate(new Date());
  };

  const handleChange = (rowIndex, colIndex, value) => {
    const updated = [...tableData];
    updated[rowIndex][colIndex] = value;
    setTableData(updated);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-10 bg-[#546fca]/80 rounded-b-2xl shadow-md">
        <div className="px-4 py-2">
          <Link
            to="/"
            className="font-bold text-white text-xl sm:text-2xl lg:text-3xl"
          >
            TeleCMDB
          </Link>
        </div>
      </nav>

      <div className="p-8 mt-20">
        <h1 className="text-3xl font-bold text-[#546fca]">Tableau de bord</h1>

        <p className="text-lg mt-4">
          Région : <strong>{region}</strong>
        </p>

        <p className="text-lg flex items-center gap-2 mt-2">
          Nom :
          {isEditingName ? (
            <>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1"
              />
              <button
                onClick={saveName}
                className="ml-2 bg-green-500 text-white px-2 rounded hover:bg-green-600"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <strong>{name}</strong>
              <button
                onClick={startEditingName}
                className="ml-2 bg-blue-500 text-white px-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
            </>
          )}
        </p>

        {creationDate && (
          <p className="mt-2 text-gray-600 text-sm">
            Table created on: {creationDate.toLocaleString()}
          </p>
        )}

        <button
          onClick={createTable}
          className=" mt-6 px-4 py-4 bg-[#546fca]/80 hover:bg-[#546fca] text-white font-semibold rounded"
        >
          Créer une table
        </button>

        {rows > 0 && cols > 0 && (
          <table className="mt-6 border-collapse border border-gray-300">
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      className="border border-gray-400 p-2 bg-[#546fca]/30"
                      style={{ minWidth: 100 }}
                    >
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) =>
                          handleChange(rowIndex, colIndex, e.target.value)
                        }
                        className="w-full border-none focus:ring-0 bg-transparent"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Dashboard;
