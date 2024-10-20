import React, { useEffect, useState } from "react";
import "./Therapistpage.css";
import TherapistCard from "../../Components/TherapistCard/TherapistCard";
import getTherapists from "../../Observables/getTherapists";
import DateCard from "../../Components/DateCard/DateCard";
import getTime from "../../../utils/getTime";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import initiateAppointment from "../../Observables/initiateAppointment";

interface TherapistPageProps {
  children?: React.ReactNode;
}

const TherapistPage: React.FC<TherapistPageProps> = () => {
  const [thpList, setThpList] = useState([]);
  const [selectedTherapist, setSelectedTherapist] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDateSelected, setCurrentDateSelected] = useState(0);
  const [currentTimeFrame, setCurrentTimeFrame] = useState("morning");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    getThp();
  }, []);

  const getThp = async () => {
    const res = await getTherapists();
    if (res && res.data) {
      setThpList(res.data);
      setSelectedTherapist(res.data[currentIndex]);
    }
  };

  const handleClick = (i: number) => {
    setCurrentIndex(i);
    setSelectedTherapist(thpList[i]);
  };
  const handleDateClick = (i: number) => {
    setCurrentDateSelected(i);
  };

  const handleSelectedTime = (time: string) => {
    if (time === selectedTime) {
      setSelectedTime("");
    } else {
      setSelectedTime(time);
    }
  };
  const handleProceed = () => {};

  const initiateApp = async () => {
    if (selectedTherapist && selectedTime) {
      const payload = {
        therapistId: selectedTherapist._id,
        timeSlot: selectedTime,
        bookingCompletionTime: new Date(),
      };
      const res = await initiateAppointment(payload);
    } else {
      alert("Therapist and time are required to proceed ahead");
    }
  };
  return (
    <div className="therapist-page">
      <img
        src="assets/left.png"
        alt="back"
        className="back-btn"
        onClick={() => {}}
      />
      <section className="hero">
        <h4>Book an appointment with </h4>
        <h4 className="main">Physica Physiotherapy</h4>

        <div className="abt-section">
          <div className="abt">
            <h2>About Physica</h2>
            <p>Choose Therapist &gt;</p>

            <p className="desc">
              Our professional doctors will visit your home for an 40 minute
              treatment session for your rehabilitation needs.{" "}
              <span>Read More</span>
            </p>
          </div>
        </div>
      </section>

      <section className="select-thp">
        <h2>Select A Therapist</h2>

        <div className="thp-lists">
          <ul>
            {thpList ? (
              thpList.map((x: any, i) => {
                return (
                  <li key={i}>
                    <TherapistCard
                      click={() => {
                        handleClick(i);
                      }}
                      image={x?.profile}
                      name={x?.name}
                      availability={x?.availability}
                      isSelected={currentIndex === i}
                    />
                  </li>
                );
              })
            ) : (
              <p>Loading Therapists...</p>
            )}
          </ul>
        </div>
      </section>

      {selectedTherapist && (
        <div className="fees-details">
          <div className="tile">
            <p className="info">{selectedTherapist?.fees}</p>
            <p className="title">Fees</p>
          </div>
          <div className="tile">
            <p className="info">{selectedTherapist?.duration}</p>
            <p className="title">Session Duration</p>
          </div>
          <div className="tile">
            <p className="info">{selectedTherapist?.rating}/5</p>
            <p className="title">Start Rating</p>
          </div>
        </div>
      )}

      {thpList && (
        <section className="date-select">
          <h2>Select A Date</h2>

          <ul>
            {Array.from({ length: 7 }).map((_, index) => {
              let date = new Date();
              date.setDate(date.getDate() + index);
              const day = date.getDate();
              const weekdayName = date.toLocaleDateString("en-US", {
                weekday: "long",
              });
              const monthName = date.toLocaleString("en-US", { month: "long" });
              return (
                <DateCard
                  key={index}
                  day={day}
                  month={monthName}
                  weekDay={weekdayName}
                  isSelected={currentDateSelected === index}
                  click={() => {
                    handleDateClick(index);
                  }}
                />
              );
            })}
          </ul>
        </section>
      )}

      {thpList && (
        <div className="time-select">
          <h2>Time</h2>

          <section className="morning">
            <h4>Morning</h4>
            <ul className="list">
              {getTime().morning.map((x, i) => {
                return (
                  <li
                    className={`${x === selectedTime && "selected-time"}`}
                    key={i}
                    onClick={() => {
                      handleSelectedTime(x);
                    }}
                  >
                    {x}
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="noon">
            <h4>Noon</h4>
            <ul className="list">
              {getTime().noon.map((x, i) => {
                return (
                  <li
                    key={i}
                    className={`${x === selectedTime && "selected-time"}`}
                    onClick={() => {
                      handleSelectedTime(x);
                    }}
                  >
                    {x}
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="evening">
            <h4>Evening</h4>
            <ul className="list">
              {getTime().evening.map((x, i) => {
                return (
                  <li
                    key={i}
                    className={`${x === selectedTime && "selected-time"}`}
                    onClick={() => {
                      handleSelectedTime(x);
                    }}
                  >
                    {x}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      )}

      <PrimaryButton
        classN="button"
        title="Proceed"
        onsubmit={() => {
          handleProceed();
        }}
      />
    </div>
  );
};

export default TherapistPage;
