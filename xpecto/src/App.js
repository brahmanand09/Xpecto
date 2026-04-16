import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectSlider from "./components/ProjectSlider";

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh", padding: "20px", backgroundColor: "#0e1b45", color: "white" }}>
        <ProjectSlider />
      </main>

      <Footer />
    </>
  );
}

export default App;
