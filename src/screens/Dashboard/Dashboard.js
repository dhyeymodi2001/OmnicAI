import React from "react";
import {
  Analysis,
  CareerAverages,
  CompareSection,
  LastMatch,
  PlayedLike,
  Navbar,
  Footer,
} from "../../components";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <LastMatch />
      <PlayedLike />
      <Analysis />
      <CompareSection />
      <CareerAverages />
      <Footer />
    </div>
  );
};
export default Dashboard;
