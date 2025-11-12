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
    <div className="app-layout flex ">
      <div className="sidebar-container !min-w-[300px] max-w-[400px] h-screen overflow-y-auto">{Sidebar}</div>
      <div className="content-container w-full bg-gray-100">{Content}</div>
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
