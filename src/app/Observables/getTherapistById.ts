import axios from "axios";

const getTherapistById = async () => {
  const id = localStorage.getItem('therapistId');
  const url = `https://physica-server.vercel.app/api/therapist/${id}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch(err) {
    console.log(err)
    alert("There was an error getting list");
    return null;
  }

}

export default getTherapistById;