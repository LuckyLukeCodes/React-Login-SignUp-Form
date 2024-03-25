import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

const HomeContext = createContext();

const HomeLayout = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  return (
    <HomeContext.Provider value={{ isLoginForm, setIsLoginForm }}>
      <div className="h-screen w-full">
        <Outlet />
      </div>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
export default HomeLayout;
