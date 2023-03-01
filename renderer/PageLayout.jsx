import React from 'react'
import '@blueprintjs/core/lib/css/blueprint.css';
import './PageLayout.css';

export function PageLayout({ pathname, children }) {
  const activeClass = (v) => pathname === v ? "navitem-active" : "";
  return (
    <Layout>
      <Sidebar>
        <a href="/" className={`navitem ${activeClass("/")}`}>
          Home
        </a>
        <a href="/about" className={`navitem ${activeClass("/about")}`}>
          About
        </a>
      </Sidebar>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}

function Layout({ children }) {
  return (
    <div className="layout">
      {children}
    </div>
  )
}

function Sidebar({ children }) {
  return (
    <div className="sidebar">
      {children}
    </div>
  )
}

function Content({ children }) {
  return (
    <div className="content">
      {children}
    </div>
  )
}
