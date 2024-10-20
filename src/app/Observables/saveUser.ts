import axios from "axios";

const saveUser = async (payload: any) => {
  const url = "http://localhost:8000/api/user" 
  try {
    const res = await axios.post(url, payload);
    localStorage.setItem('currentUser', res.data._id);
    return res;
  } catch(err) {
    console.log(err)
    alert("There was an error saving user");
    return null;
  }

}

export default saveUser;