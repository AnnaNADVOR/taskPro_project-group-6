import ScreensPage from 'components/ScreensPage/Screens.page';
import { Header } from '../../components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {showSidebar && <SideBar />}
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <header>
            <Header toggleSidebar={toggleSidebar} />
          </header>
          <main>
            <ScreensPage />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
