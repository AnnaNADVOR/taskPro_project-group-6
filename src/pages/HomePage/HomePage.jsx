import ScreensPage from "components/ScreensPage/Screens.page";
import { Header } from "../../components/Header/Header";
import SideBar from "components/SideBar/SideBar";

const HomePage = () => {
    return (              
    <div style={{ display: 'flex' }}>  
        <SideBar />  
        <div  style={{
            flexGrow: '1',
            height: '100vh',
            maxHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <header>
                <Header />     
            </header>
            <main>
                <ScreensPage/>                       
            </main>   
        </div>              
    </div>    
    )
}

export default HomePage;
