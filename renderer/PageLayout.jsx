import usePageContext from '@/hooks/usePageContext';
import '@blueprintjs/core/lib/css/blueprint.css';
import './PageLayout.css';

const NavLink = ({ children, ...props }) => {
  const { urlPathname } = usePageContext();
  return <a className={`navitem ${urlPathname === props.href ? "navitem-active" : ""}`} {...props} >{children}</a>
}

export function PageLayout({ children }) {
  return (
    <Layout>
      <Sidebar>
        <NavLink href="/" >
          Home
        </NavLink>
        <NavLink href="/about">
          About
        </NavLink>
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
