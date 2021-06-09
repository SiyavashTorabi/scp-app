import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneScp } from "../services/api";

export default function ScpDetail() {
  const [scp, setScp] = useState({});
  const { id } = useParams();
  // console.log(id)
  useEffect(() => {
    const fetchData = async () => {
      const res = await getOneScp(id);
      console.log(res)
      setScp(res)
    }
    fetchData();
  }, []);

  return (
    <div>
{/* {scp.fields.SCP_description} */}

  </div>
);

}