export default function Footer({ theme }) {
  return (
    <div
      className={`footer w-[100vw] h-[5.5rem] border-t-[0.02rem] border-[#b9b6b6] flex items-center justify-center ${theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-[#dedee3] text-[#686666]'}`}
    >
      <p className="text-[#9a9898] text-[1.2rem]">© 2023 bitBlogs. All rights reserved.</p>
    </div>
  );
}
