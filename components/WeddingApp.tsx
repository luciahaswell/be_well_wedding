"use client";

import { useState } from "react";
import Nav, { type Tab } from "./Nav";
import HomeTab     from "./tabs/HomeTab";
import OurStoryTab from "./tabs/OurStoryTab";
import ScheduleTab from "./tabs/ScheduleTab";
import DetailsTab  from "./tabs/DetailsTab";
import OurPartyTab from "./tabs/OurPartyTab";
import GalleryTab  from "./tabs/GalleryTab";
import RegistryTab from "./tabs/RegistryTab";

const TAB_MAP: Record<Tab, React.ReactNode> = {
  "Home":      <HomeTab />,
  "Our Story": <OurStoryTab />,
  "Schedule":  <ScheduleTab />,
  "Details":   <DetailsTab />,
  "Our Party": <OurPartyTab />,
  "Gallery":   <GalleryTab />,
  "Registry":  <RegistryTab />,
};

export default function WeddingApp() {
  const [activeTab, setActiveTab] = useState<Tab>("Home");

  return (
    <div style={{ minHeight: "100svh" }}>
      <Nav active={activeTab} onSelect={setActiveTab} />
      <main>{TAB_MAP[activeTab]}</main>
    </div>
  );
}
