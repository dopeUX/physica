import axios from "axios";

const getCurrentUser = async () => {
  const id = localStorage.getItem('currentUser')
  const url = `https://physica-server.vercel.app/api/user/${id}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch(err) {
    console.log(err)
    alert("There was an error getting list");
    return null;
  }

}

export default getCurrentUser;