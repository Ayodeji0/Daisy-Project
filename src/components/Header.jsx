import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
     {/* USER */}
     {/* Links */}
     <div className="flex gap-x-5 justify-center items-center mr-10">
     <Link to='login' className='link link-hover text-xs sm:text-sm'>
        Sign in / Guest
     </Link>
     <Link to='register' className='link link-hover text-xs sm:text-sm'>
        Create Account
     </Link>
     </div>
      </div>
    </header>
  );
};

export default Header;
