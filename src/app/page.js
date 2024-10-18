import { Heading } from "@/components/Heading";
import Image from "next/image";

export default function Home() {

  const handleShowAlert = () => {
    console.log("log In")
  }

  return (
    <div className="max-w-6xl mx-auto text-red-700 border font-bold hover:text-blue-600 transition-colors duration-500 flex  justify-around min-h-screen">
      Parvaj
      <div>
       <Heading></Heading>
      </div>
      <div className="cursor-pointer" onClick={handleShowAlert()}>Log In</div>
    
    </div>
  );
}
