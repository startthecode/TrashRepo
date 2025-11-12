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
    <div className="app-layout">
      <div className="sidebar-container">{Sidebar}</div>
      <div className="content-container">{Content}</div>
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
