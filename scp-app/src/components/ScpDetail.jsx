import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneScp } from "../services/api";

export default function ScpDetail() {
  const [scp, setScp] = useState({});
  const { id } = useParams();
  // console.log(id)
  useEffect(() => {
    const fetchData = async (fields) => {
      const res = await getOneScp(fields);
      console.log(res)
      setScp(res)
    }
    fetchData();
  }, []);

  return (
    <div className={`scp-info ${id}`}>
  {/* //  key={scp.fields}> */}

  </div>
);

}