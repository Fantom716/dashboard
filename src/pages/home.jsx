import React from "react";
import Header from "../components/header/assemblyHeader/ready header";
import Navigation from "../components/nav/navigation";
import Desktop from "../components/desktop/desktop";

function Home() {
    return(
        <div style={{display: "flex", height: "100vh", width: "100vw"}}>
        <Navigation name="Alexander" />
        <div className='mainContent' style={{padding: "32px", width: "100vw", background: "#F9FAFE", overflow: "auto"}}>
          <Header />
          <Desktop />
        </div>
      </div>
    )
}

export default Home;