
import axios from"axios";
import React, { useState } from "react";

const baseURL="http://localhost:8080/call";
const baseURLforpost="http://localhost:8080/testpost";
const baseURLforformpost="http://localhost:8080/postform";

const App =()=>{ 

  const getDataFromBackend=async()=>{
    const response=await axios.get(baseURL);
    
    console.log(response.data);
    document.getElementById("para").innerHTML=response.data;

  };

  const data="hello";

  const postDataToBackend=async()=>{

    const response=await axios.post(baseURLforpost, {data,});
    
    console.log(response.data);
    document.getElementById("para").innerHTML=response.data;

  };

// post data form
  // const data="hello";
  

  const [formData,setformData]=useState("");



  const postFormToBackend=async()=>{
    const response=await axios.post(baseURLforformpost,{formData,});
    
    console.log(response.data);
   document.getElementById("para").innerHTML=response.data;

  };

return (
  <div className="App">

      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>

      <br/><br/>

      <button onClick={postDataToBackend}>POST DATA</button>
      <p id="para"></p>

      <br/><br></br>
      <form onSubmit={postFormToBackend}>
        <input type="text" name="formdata" value={formData} onChange={(e)=>setformData(e.target.value)}></input>
        <input type="submit" value="postform"></input>
      </form>

  </div>
);


};

export default App;