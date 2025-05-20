import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Root = () => {

  const { loading } = use(AuthContext);
  const [delayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayPassed(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading || !delayPassed) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#ED6F2C]"></div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
