import React, { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";


function Header() {

  // const loginStatus = useSelector((state) => state.Auth.Status);
  // const UserData = useSelector((state) => state.Auth.UserData);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const [query, setQuery] = useState("");

  // const navitems = [
  //   {
  //     name: "Register",
  //     path: "/register",
  //     Status: !loginStatus,
  //     icon: <VscAccount className="text-xl" />,
  //   },
  //   {
  //     name: "Login",
  //     path: "/login",
  //     Status: !loginStatus,
  //     icon: <IoMdLogIn className="text-xl" />,
  //   },
  // ];

  // const search = async () => {
  //   try {
  //     await dispatch(GetAllVideos({query: query , page : 1})).unwrap();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const logout = async () => {
  //   try {
  //     const user = await dispatch(UserLogOut()).unwrap();
  //     if (user) {
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //     throw error;
  //   }
  // };
  const [darkMode, setdarkMode] = useState(true)


  const toggleDarkMode = () => {{
      
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      setdarkMode(!darkMode);
    }
  }

  return (
    <nav className=" bg-white dark:bg-black text-black dark:text-white p-4 flex justify-between items-center shadow-md">
    <h1 className="text-2xl font-bold">InvestTrack</h1>
    <ul className="flex space-x-6">
      <li><a href="#features" className="hover:text-gray-400">Features</a></li>
      <li><a href="#pricing" className="hover:text-gray-400">Pricing</a></li>
      <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
    </ul>
    <button onClick={toggleDarkMode} className="ml-4">
      {darkMode ? <SunIcon className="h-6 w-6 text-black" /> : <MoonIcon className="h-6 w-6 text-white" />}
    </button>
  </nav>
  );
}

export default Header;
