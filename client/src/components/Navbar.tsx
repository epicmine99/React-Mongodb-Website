import React from "react";

interface NavbarProps {
  // Define any props here if needed
}

const Navbar: React.FC<NavbarProps> = () => {
    return (
      <div className="flex justify-between items-center fixed top-0 left-0 right-0 w-full bg-black px-4 z-50">
        <div className="flex items-center justify-center p-2.5">
          <div className="text-white text-2xl font-bold">Logo</div>
        </div>
        <div className="flex items-center justify-center p-2.5 gap-x-10">
          <div className="text-white text-lg font-medium">Home</div>
          <div className="text-white text-lg font-medium">Skills</div>
          <div className="text-white text-lg font-medium">Projects</div>
          <div className="text-white text-lg font-medium">Recipes</div>
        </div>
        <div className="flex items-center justify-center p-2.5 bg-yellow-400 rounded-lg">
          <div className="text-white text-lg font-medium">Contact Us</div>
        </div>
      </div>
    );
  };
  
  export default Navbar;