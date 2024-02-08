import React from "react";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex flex-col md:flex-row p-8 border-t-4 border-blue-500">
        <Profile />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
