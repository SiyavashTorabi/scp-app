import { useState } from "react";
import { createScp } from "../services/api"

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createScp(input);
    console.log(res);
  };

  return (
    <div>
      <h3>capture a new SCP</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>SCP-</label>
        <input type="text" name="SCP" />
        <br />
        <label>SCP-title</label>
        <input type="text" name="Title" />
        <br />
        <label>object-Class</label>
        <input type="text" name="object-Class" />
        <br />
        <label>SCP-Description</label>
        <input type="text" name="SCP-Description" />
        <br />
        <label>SCP-img</label>
        <input type="text" name="SCP-img" />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}