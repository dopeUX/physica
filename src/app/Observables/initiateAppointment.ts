import axios from "axios";

const initiateAppointment = async (payload: any) => {
  const url = "http://localhost:8000/api/appointments" 
  try {
    const res = await axios.post(url, payload);
    return res;
  } catch(err) {
    console.log(err)
    alert("There was an error saving user");
    return null;
  }

}

export default initiateAppointment;