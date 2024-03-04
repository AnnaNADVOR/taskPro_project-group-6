import ScreensPage from "components/ScreensPage/Screens.page";
import { Header } from "../../components/Header/Header";
import SideBar from "components/SideBar/SideBar";

const HomePage = () => {
    return (
        <div>           
            <div style={{ display: "flex" }}>                           
                <SideBar />
                <div style={{ display: "flex", flexDirection:"column"}}>
                    <header>
                        <Header />     
                    </header>
                    <main>
                        <ScreensPage/>                       
                    </main>   
                </div>
            </div>           
        </div>
    )
}

export default HomePage;
