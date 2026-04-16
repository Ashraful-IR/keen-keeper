"use client";

import EventProvider from "@/context/EventProvider";

const Provider = ({ children }) => {
  return (
    <div>
      <EventProvider>{children}</EventProvider>
    </div>
  );
};

export default Provider;
