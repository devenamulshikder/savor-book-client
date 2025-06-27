import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import StatsCards from "./StatsCards";


const Homes = () => {
    const {user} = useContext(AuthContext)
    return (
      <div className="text-black">
        <div className="navbar">
          <div className="flex-1">
            <a className="text-xl md:text-3xl font-bold">
              Welcome Back, {user?.displayName}
            </a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <StatsCards/>
      </div>
    );
};

export default Homes;