import { useEffect, useState } from "react";
import { getAllScps } from "../services/api";
import { Link } from "react-router-dom";

export default function ScpList() {
  const [scps, setScps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllScps();
      console.log(res);
      setScps(res);
    };
    fetchData();
  }, []);

  return (
    <div>
      {scps &&
        scps.map((scpItem) => {
          return (
            <div key={scpItem.id}>
              {/* <div key={scpItem.SCP_description}> */}

              <Link className="SCP-links" to={`/scp/${scpItem.id}`}>{scpItem.fields.SCP},
               {scpItem.fields.SCP_title}</Link>
            </div>
            // </div>
          );
        })}
    </div>
  );
}
