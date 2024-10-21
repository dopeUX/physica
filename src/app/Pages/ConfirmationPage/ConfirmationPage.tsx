import React, { useEffect, useState } from "react";
import "./ConfirmationPage.css";
import { useNavigate } from "react-router-dom";
import getTherapistById from "../../Observables/getTherapistById";
import getCurrentUser from "../../Observables/getCurrentUser";
import getAppointmentById from "../../Observables/getAppointmentById";
import FormInput from "../../Components/FormInput/FormInput";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

interface ConfirmationPageProps {
  children?: React.ReactNode;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({}) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [therapist, setTherapist] = useState<any>();
  const [currentUser, setCurrentUser] = useState<any>();
  const [appointment, setAppointment] = useState<any>();
  const [address, setAddress] = useState("");

  useEffect(() => {
    setLoading(true);
    getCurrentTherapist();
    getCurrentUserById();
    getAppointment();
  }, []);

  useEffect(() => {
    if (therapist && currentUser && appointment) {
      setLoading(false);
    }
  }, [therapist, currentUser, appointment]);

  const getCurrentTherapist = async () => {
    const res = await getTherapistById();
    setTherapist(res.data[0]);
  };
  const getCurrentUserById = async () => {
    const res = await getCurrentUser();
    setCurrentUser(res.data[0]);
  };
  const getAppointment = async () => {
    const res = await getAppointmentById();
    setAppointment(res.data[0]);
  };
  return (
    <div className="confirmation-page">
      <img
        src="assets/left.png"
        alt="back"
        className="back-btn"
        onClick={() => {
          navigate(-1);
        }}
      />
      <h3>
        Book an appointment with <span>Dr. Rukaiya Mithaiwala</span>
      </h3>

      {currentUser && therapist && appointment && (
        <section className="apt-details">
          <h5>
            Physiotherapy session with <span>{therapist?.name}</span>
          </h5>

          <div className="detail-form">
            <div className="detail">
              <p className="label">Name</p>
              <p className="value">{currentUser.name}</p>
            </div>
            <div className="detail">
              <p className="label">Mobile</p>
              <p className="value">{currentUser.mobileNumber}</p>
            </div>
            <div className="detail">
              <p className="label">Pincode</p>
              <p className="value">{currentUser.pincode}</p>
            </div>
            <div className="detail">
              <p className="label">Date</p>
              <p className="value">{appointment.dateSlot}</p>
            </div>
            <div className="detail">
              <p className="label">Time</p>
              <p className="value">{appointment.timeSlot}</p>
            </div>
            <div className="detail">
              <p className="label">Fees</p>
              <p className="value">Rs.{therapist.fees}</p>
            </div>
          </div>
        </section>
      )}

      <div className="address-form">
        <p>Complete your address to proceed:</p>
        <input
          type="text"
          title="address"
          value={address}
          onChange={(e) => {
            setAddress(e.currentTarget.value);
          }}
        />

        <PrimaryButton
          classN={`button ${isLoading && "button-disabled"}`}
          title="Proceed"
          onsubmit={() => {
            if (address) {
              if (!isLoading) {
                alert("Appointment scheduled successfully!");
                navigate("/");
                localStorage.clear();
              }
            } else {
              alert("Pls enter the address");
            }
          }}
        />
      </div>
    </div>
  );
};

export default ConfirmationPage;
