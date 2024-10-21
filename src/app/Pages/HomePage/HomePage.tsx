import { useEffect, useState } from "react";
import availableCities from "../../../utils/availableCities";
import FormInput from "../../Components/FormInput/FormInput";
import "./Homepage.css";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import saveUser from "../../Observables/saveUser";
import { useNavigate } from "react-router-dom";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    mobileNumber: "",
    city: "Delhi",
    pincode: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const saveUserAPI = async (payload: any) => {
    const res = await saveUser(payload);
    if (res) {
      setLoading(false);
      alert("user details saved!");
      navigate("/therapist");
    }
  };

  const handleSubmit = () => {
    let correct = true;
    setLoading(true);
    if (correct && !user.name) {
      alert("name is required");
      correct = false;
      setLoading(false);
    }
    if (correct && !user.mobileNumber) {
      alert("Pls enter valid 10 digit phone number");
      setLoading(false);
    }
    if (correct && user.mobileNumber) {
      if (String(user.mobileNumber).length !== 10) {
        alert("Pls enter valid 10 digit phone number");
        correct = false;
        setLoading(false);
      }
    }
    if (correct && !user.city) {
      alert("City is required");
      correct = false;
      setLoading(false);
    }
    if (correct && !user.pincode) {
      alert("Pls enter valid pincode");
      correct = false;
      setLoading(false);
    }

    if (correct) {
      saveUserAPI(user);
    }
  };
  return (
    <div className="home-page">
      <section className="hero">
        <img src="/assets/homepage-hero.jpg" alt="" />
      </section>

      <section className="user-details-form">
        <h4>
          Book An At Home Session With Our Physiotherapists{" "}
          <span>For ₹699!</span>
        </h4>

        <div className="form-section">
          <FormInput
            field="name"
            type="text"
            label="Name"
            value={user.name}
            onValueChange={(field: string, value: string | number) => {
              handleChange(field, value);
            }}
          />
          <FormInput
            field="mobileNumber"
            type="number"
            label="Mobile Number"
            value={user.mobileNumber}
            onValueChange={handleChange}
          />
          <FormInput
            field="city"
            type="dropdown"
            label="City"
            list={availableCities}
            value={user.city}
            onValueChange={handleChange}
          />
          <FormInput
            field="pincode"
            type="number"
            label="Pin Code"
            value={user.pincode}
            onValueChange={handleChange}
          />

          <div className="submit-btn">
            <PrimaryButton
              classN={`${isLoading && "button-disabled"}`}
              title="Proceed"
              onsubmit={() => {
                if (!isLoading) {
                  handleSubmit();
                }
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
