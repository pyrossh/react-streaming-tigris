import React from 'react'
import '@blueprintjs/core/lib/css/blueprint.css';
import './PageLayout.css';

export function PageLayout({ children }) {
  return (
    <Layout>
      <Sidebar>
        <a className="navitem" href="/">
          Home
        </a>
        <a className="navitem" href="/about">
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
