import { useRef, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

export default function PieCharts() {
  let elementRef = useRef(null);
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const [state, setState] = useState({
    "Group A": false,
    "Group B": false,
  });
  function handleOver(e) {
    e.preventDefault();
    let name = e.target.getAttribute("name");
    // console.log("Over");
    if (state[name] === false) {
      setState((prevValue) => {
        return { ...prevValue, [name]: true };
      });
      
      setTimeout(() => {
        // console.log(elementRef.current )
        console.log((document.activeElement));
        if (elementRef.current && elementRef.current.contains(document.activeElement)) {
          setState((prevValue) => {
            return { ...prevValue, [name]: false };
          });
        }
      }, 50);
    }
  }

  function handleLeave(e) {
    e.preventDefault();
    let name = e.target.getAttribute("name");
    // console.log("leave");
    // if (state[name] === true)
    setState((prevValue) => {
      return { ...prevValue, [name]: false };
    });
  }

  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={70}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            ref={elementRef}
            key={`cell-${index}`}
            onMouseOver={handleOver}
            onMouseLeave={handleLeave}
            onMouseEnter={handleLeave}
            fill={state[entry.name] ? "#666" : "#000"}
          />
        ))}
      </Pie>
      <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
