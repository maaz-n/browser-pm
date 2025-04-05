import Navbar from "./components/Navbar";
import AddPassword from "./components/AddPassword";
import AllPasswords from "./components/AllPasswords";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <AddPassword />
        <AllPasswords />
      </Container>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
