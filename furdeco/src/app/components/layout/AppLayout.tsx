import React from "react";

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  let Sidebar, Content;

  React.Children.forEach(children, (child: any) => {
    if (child.type.displayName === "SIDEBAR") {
      Sidebar = child;
    } else if (child.type.displayName === "CONTENT") {
      Content = child;
    }
  });

  return (
    <div className="app-layout flex">
      <div className="sidebar-container !min-w-[300px] max-w-[400px] h-screen py-4 px-4">
        {Sidebar}
      </div>
      <div className="content-container w-full py-4 px-4  bg-gray-200">
        {Content}
      </div>
    </div>
  );
};

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return <div className="sidebar">{children}</div>;
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="content">{children}</div>;
};

Sidebar.displayName = "SIDEBAR";
Content.displayName = "CONTENT";

AppLayout.Content = Content;
AppLayout.Sidebar = Sidebar;

export default AppLayout;
