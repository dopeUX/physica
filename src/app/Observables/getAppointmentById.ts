import axios from "axios";

const getAppointmentById = async () => {
  const id = localStorage.getItem('aptId')
  const server = process.env.REACT_APP_SERVER_URI;
  const url = `${server}/api/appointments/${id}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch(err) {
    console.log(err)
    alert("There was an error getting list");
    return null;
  }

}

export default getAppointmentById;