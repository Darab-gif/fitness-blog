import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Pages/Home/Home";

function App() {
  /*const style = {
    wrapper:
      "text-white bg-body font-poppins selection:bg-nav selection:text-white w-[1440px] max-w-[100%] m-auto",
  };*/
  return (
    <div className="">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
