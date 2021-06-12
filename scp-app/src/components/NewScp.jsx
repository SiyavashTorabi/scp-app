import { useState } from "react";
import { createScp } from "../services/api";
import { useHistory } from "react-router-dom";

const defaultObj = {
  SCP: "",
  SCP_title: "",
  object_Class: "",
  SCP_description: "",
  SCP_img: "",
  more_info: "",
};

export default function NewScp() {
  const [input, setInput] = useState(defaultObj);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createScp(input);
 history.push('/SCPs')
  };

  return (
  <>
      <h3> new SCP-{input.SCP}</h3>
<div className="form-container">
      <form className="datacontainer" onChange={handleChange} onSubmit={handleSubmit}>
        <label>SCP-</label>
        <input  type="text" name="SCP" />
        <br />
        <label>SCP-title</label>
        <input type="text" name="SCP_title" />
        <br />
        <label>object-Class</label>
        <input type="text" name="object_Class" />
        <br />
        <label>SCP-Description</label>
        <input type="text" name="SCP_description" />
        <br />
        <label>SCP-img</label>
        <input type="text" name="SCP_img" />
        <br />
        <button className="create-button" type="submit">Create</button>
      </form>
      </div>
      </>
  );
}
