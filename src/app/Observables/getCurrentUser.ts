import axios from "axios";

const getTherapists = async () => {
  const id = localStorage.getItem('currentUser')
  const url = `http://localhost:8000/api/user/${id}`;
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