import axios from "axios";

const getTherapists = async () => {
  const url = "https://physica-server.vercel.app/api/therapist" 
  try {
    const res = await axios.get(url);
    return res.data;
  } catch(err) {
    console.log(err)
    alert("There was an error getting list");
    return null;
  }

}

export default getTherapists;