// ---- hooks, dependencies, styling import ----
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Modal from "react-modal";

// ---- components ----
import AboutUs from "../AboutUs/AboutUs";
import AnimalBubble from "../../components/AnimalBubble";

// ---- context ----
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

// ---- COMPONENT ----
const Landing = () => {
  //? ---- hooks ----
  let navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const { loggedIn } = useContext(AuthContext);

  //? ---- event handlers ----

  //Start the adventure button handler
  const handleClick = () => {
    loggedIn ? navigate("/home") : navigate("/login");
  };

  // Show Modal with AboutUS component
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  //? ---- rendering ----
  return (
    <div className="landing">
      <div className="">
        <button
          className="fixed z-30 cursor-pointer right-10 top-6 p-3 w-20 bg-red-500"
          onClick={handleModal}
        >
          about the project
        </button>
        <p>
          Hey there, little explorer! create an account or sign in to playfully
          discover some interesting facts about our planet’s astonishing
          landscapes, amazing wildlife, and diverse flora.
        </p>
        <p>
          At the end of each exploration you can do a fun little quiz to test
          your knowledge and collect some badges on your profile!
        </p>
        <button className="bg-yellow-500 p-3 m-2" onClick={handleClick}>
          Start the adventure
        </button>
      </div>
      <AnimalBubble name="rainforest" />
      <AnimalBubble name="desert" />
      <AnimalBubble name="ocean" />

      {modalOpen ? (
        <Modal isOpen={modalOpen}>
          {" "}
          <AboutUs />
        </Modal>
      ) : null}
    </div>
  );
};

export default Landing;
