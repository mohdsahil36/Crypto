import React from "react";
import { BentoGrid,BentoGridItem } from "../ui-components/Bento-Grid";


export function BentoGridSecondDemo() {
    return (
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            // header={item.header}
            className={i === 2 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    );
  }
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
    {
      title: "Stay Updated with Real-Time Market Data",
      description: "Get real-time updates on cryptocurrency prices, market capitalization, and trading volumes. Identify top gainers and losers in the market.",
    //   header: <Skeleton />,
    },
    {
      title: "Find Coins with Ease",
      description: "Quickly search for specific cryptocurrencies and filter results based on market cap, trading volume, and performance.",
    //   header: <Skeleton />,
    },
    {
      title: "Coming Soon..",
      description:
        "The real thrill is in the upgrades—because staying the same is just too boring, right? ",
    //   header: <Skeleton />,
    }
  ];