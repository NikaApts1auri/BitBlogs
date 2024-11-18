import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../../ui/dropdown-menu";
import i18n from "i18next";

const handleChangeLanguage = () => {
  i18n.changeLanguage("en");
};

export default function Header() {
  const [theme, setTheme] = useState<string>("light");
  const navigate = useNavigate();

  useEffect(() => {
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
    
      setTheme("light");
    }
  }, []);

  useEffect(() => {
   
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const convertToSignIn = () => {
    navigate("authorization");
  };

  const convertToHome = () => {
    navigate("/");
  };

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className={`w-[100vw] border-b-[0.02rem] border-[#b9b6b6] px-[8rem] py-[1rem] flex items-center justify-between ${theme === 'dark' ? 'bg-[#333] text-white' : 'bg-[#0a0a0b] text-[#686666]'}`}>
      <span onClick={convertToHome}>
        <p className="font-extrabold text-[2rem] cursor-pointer">BitBlogs</p>
      </span>

      <div className="flex gap-[1rem]">
        <button className="text-[1.3rem] hover:text-white font-medium">Home</button>
        <button className="text-[1.3rem] hover:text-white font-medium">Write</button>
        <button className="text-[1.3rem] hover:text-white font-medium">About</button>
      </div>

      <div className="flex gap-[2rem] items-center">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#686666" cursor="pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-muted-foreground"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div>
        <button onClick={convertToSignIn} className="bg-[rgb(0,0,255)] h-[3rem] rounded-[0.5rem] w-[7rem] text-[1.3rem] text-[white]">Sign In</button>
        
    
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <div className="w-[4rem]">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[3rem] w-[3rem]"><path d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>ქართული</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        
        <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <div className="mb-[2rem] mr-[2rem]">
          {theme === 'light' ? (
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun h-[2.5rem] w-[2.5rem] mt-[2rem] cursor-pointer rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          ) : (
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon absolute h-[2.5rem] w-[2.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => toggleTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
    </div>
  );
}
