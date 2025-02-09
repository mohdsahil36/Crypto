"use client"
import React from 'react';
import { Spotlight } from './ui-components/spotlight-new';
import { FlipWords } from './ui-components/flip-words';
import { Button } from './ui-components/moving-border';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const words = ["Simplified for Clarity", "Done with Ease", "Without the Guesswork"];
  return (
    <div>
      <div className="h-screen w-full flex md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-10 md:pt-52">
          <h1 className="text-4xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Effortless Crypto Tracking <br /> <FlipWords words={words} className="text-center" />
          </h1>
          <p className="mt-4 font-normal text-md md:text-lg text-neutral-300 max-w-lg text-center mx-auto">
            Advanced users stay ahead of the market by exploring real-time data, trends, and insights on a seamless platform
          </p>
          <div className='text-center mt-8 md:mt-10'>
            <Button
              className="bg-white dark:bg-black dark:hover:bg-zinc-800 ease-in-out duration-500 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex gap-x-2"
            >
              Dashboard
              <ArrowRight size={18}/>
            </Button>
        </div>
        </div>
      </div>
    </div>
  );
}
