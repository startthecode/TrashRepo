import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Auth header
      {children}
      Auth footer
    </div>
  );
};

export default layout;
