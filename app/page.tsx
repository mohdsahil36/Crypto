// import { cn } from "@/lib/utils";
import { Spotlight } from "./ui-components/Spotlight";

export default function Home() {
  return (
    <div className="h-screen max-w-[80%] mx-auto dark:bg-black rounded-3xl ">
      <>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight />
          <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Effortless Crypto Tracking <br /> Without the Guesswork
            </h1>
            <p className="mt-4 font-normal text-lg dark:text-neutral-300 max-w-lg text-center mx-auto">
            Advanced users stay ahead of the market by exploring real-time data, trends, and insights on a seamless platform. With customizable alerts and precision tracking, you’ll always make informed decisions with confidence
            </p>
          </div>
        </div>
      </>
    </div>
  );
}
