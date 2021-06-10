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
      console.log(res);
      setScp(res);
    };
    fetchData();
  }, []);

  return (
    <div className={`scp-info ${id}`}>
      <p>{scp.fields?.SCP}</p>
      <p>{scp.fields?.SCP_title}</p>
      <p>{scp.fields?.object_Class}</p>
      <p>{scp.fields?.SCP_description}</p>
      <img  src={scp.fields?.SCP_img} />
      <a href={scp.fields?.more_info}>link for more info</a>
      
      {/* //  key={scp.fields}> */}
    </div>
  );
}
