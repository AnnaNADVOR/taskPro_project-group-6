import { useEffect, useState, useRef } from 'react';
import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {showSidebar && (
          <div ref={sidebarRef}>
            <SideBar
              showSidebar={showSidebar}
              closeModal={() => setShowSidebar(false)}
            />
          </div>
        )}
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <header>
            <Header toggleSidebar={toggleSidebar} />
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
