import axios from "axios";

const initiateAppointment = async (payload: any) => {
  const server = process.env.REACT_APP_SERVER_URI;
  const url = `${server}/api/appointments` 
  try {
    const res = await axios.post(url, payload);
    return res.data;
  } catch(err) {
    console.log(err)
    alert("There was an error saving user");
    return null;
  }

}

export default initiateAppointment;