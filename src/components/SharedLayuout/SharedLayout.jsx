import Header from 'components/Header/Header';
import { useEffect, useState, useCallback, useRef } from 'react';
import SideBar from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

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

  const closeSidebar = useCallback(() => {
    if (window.innerWidth < 1440) {
      setShowSidebar(false);
    }
  }, []);

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeSidebar();
    }
  };

  const onEscClick = useCallback(
    event => {
      if (event.code === 'Escape') {
        closeSidebar();
      }
    },
    [closeSidebar]
  );

  useEffect(() => {
    window.addEventListener('keydown', onEscClick);
    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [onEscClick]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {showSidebar && (
          <div
            ref={sidebarRef}
            onClick={onOverlayClick}
            className={css.backdrop}
          >
            <SideBar closeSidebar={toggleSidebar} />
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
