import { useEffect, useState } from "react";
import { getAllScps} from "../services/api";
import { Link } from "react-router-dom";

export default function ScpList() {
  const [scp, setScp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllScps();
      console.log(res);
      setScp(res);
    };
    fetchData();
  }, []);

  return (
    <div>
      {scp.map((scpItem) => {
        return (
          <div key={scpItem.id}>
            {/* <div key={scpItem.SCP_description}> */}

            
              <Link to={`/scp/${scpItem.id}`}>{scpItem.fields.SCP}</Link>
              </div>
          // </div>
        );
      })}
    </div>
  );
}
