import About from "./About";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./Home";
import Technologies from "./Technologies";

export default function Portfolio() {
    return (
        <Main>
            <Header/>
            <Home/>
            <About/>
            <Technologies/>
        </Main>
    )
}
