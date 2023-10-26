import { Link, useParams } from 'react-router-dom'

import logo from '../assets/logo192.png'

const TabsLayout = ({ children, tabs }) => {
  const { tabId } = useParams()

  return (
    <div className="wrapper">
      <div className="nav-logo-block">
        <img src={logo} alt="Logo" className="navigation-img" />
        <h3>
          React <br />
          Dummy
        </h3>
      </div>
      <div className="main">
        <nav className="navigation-tabs-wrapper">
          <div className="navigate-tabs">
            <h2>Menu</h2>
            <ul>
              {tabs.map((tab) => (
                <li className={tab.id === tabId ? 'selected' : ''} key={tab.id}>
                  <Link to={`/${tab.id}`} className="navigation-link">
                    {tab.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  )
}

export default TabsLayout
