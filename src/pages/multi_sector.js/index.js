import React from "react";
import Heading from "../../components/typography/heading";
import MultiSectorChart from "./components/multi_sector_chart";

export default function MultiSectorPage() {
  return (
    <div>
      <MultiSectorChart />
      <img
        src={`${process.env.PUBLIC_URL}/assets/img/multi-sector.jpeg`}
        alt={"aboutuscover"}
        className="object-center w-full"
      />
      <div className="p-4">
        <Heading>MULTI-SECTOR GOVERNANCE COUNCIL</Heading>
      </div>
    </div>
  );
}