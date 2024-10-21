import axios from "axios";

const getTherapists = async () => {
  const server = process.env.REACT_APP_SERVER_URI;
  const url = `${server}/api/therapist` 
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