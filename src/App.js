// import icons material
import {
    AccountBalanceRounded,
    Chat,
    Favorite,
    HomeRounded,
    Settings,
    SummarizeRounded,
} from "@mui/icons-material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import styles
import "./App.css";
import CartSidebar from "./components/cart-sidebar";
// import components
import Header from "./components/header/Header";
import MenuContainer from "./components/menu-container/MenuContainer";
import ChatView from "./containers/chat";
import HomeView from "./containers/home";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* Header Section */}
                <Header />

                <div className="flex h-full">
                    <div className="w-full md:w-4/5 px-4">
                        <Switch>
                            <Route path="/home">
                                <HomeView />
                            </Route>
                            <Route path="/chat">
                                <ChatView />
                            </Route>
                        </Switch>
                    </div>

                    <CartSidebar />
                </div>
                {/* Button Menu */}
                <div className="Button-Menu">
                    <ul id="menu">
                        <MenuContainer
                            link="/home"
                            icon={<HomeRounded />}
                            isHome
                        />
                        <MenuContainer link="/chat" icon={<Chat />} />
                        <MenuContainer
                            link={"#"}
                            icon={<AccountBalanceRounded />}
                        />
                        <MenuContainer link={"#"} icon={<Favorite />} />
                        <MenuContainer link={"#"} icon={<SummarizeRounded />} />
                        <MenuContainer link={"#"} icon={<Settings />} />

                        <div className="indicator"></div>
                    </ul>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
