import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOneScp } from "../services/api";
import { deleteScp } from "../services/api";

export default function ScpDetail() {
  const [scp, setScp] = useState({});
  const history = useHistory();
  const { id } = useParams();

  // console.log(id)
  useEffect(() => {
    const fetchData = async () => {
      const res = await getOneScp(id);
      setScp(res);
    };
    fetchData();
  }, [id]);
  const handleDelet = async () => {
    const res = await deleteScp(id);
    console.log(res);
    history.push("/SCP");
  };

  return (
    <div className={`scp-info ${id}`}>
      <p>{scp.fields?.SCP}</p>
      <p>{scp.fields?.SCP_title}</p>
      <p>{scp.fields?.object_Class}</p>
      <p>{scp.fields?.SCP_description}</p>
      <img alt={scp.fields?.SCP_title} src={scp.fields?.SCP_img} />
      <a className="Mlink" href={scp.fields?.more_info}>
        link for more info
      </a>
      <button className="dlt" onClick={handleDelet}>delete</button>
      {/* //  key={scp.fields}> */}
    </div>
  );
}
