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
        <button className="text-[1.3rem] font-medium">Home</button>
        <button className="text-[1.3rem] font-medium">Write</button>
        <button className="text-[1.3rem] font-medium">About</button>
      </div>

      <div className="flex gap-[2rem] items-center">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#686666" cursor="pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-muted-foreground"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div>
        <button onClick={convertToSignIn} className="bg-[rgb(0,0,255)] h-[3rem] rounded-[0.5rem] w-[7rem] text-[1.3rem] text-[white]">Sign In</button>
        
    
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <div className="w-[4rem]">
              <svg width="40" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[3rem] w-[2rem]">
                <path d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                <path d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon absolute h-[2.5rem] w-[2.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
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
