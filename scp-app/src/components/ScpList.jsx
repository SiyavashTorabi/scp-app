import { useEffect, useState } from "react";
import { getAllScps, getAllSuperHeros } from "../services/api";
import { Link } from "react-router-dom";

export default function ScpList() {
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllScps();
      console.log(res);
      setHeros(res);
    };
    fetchData();
  }, []);

  return (
    <div>
      {scp.map((scp) => {
        return (
          <div key={hero.id}>
            <Link to={`/scp/${scp.id}`}>{scp.fields.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
