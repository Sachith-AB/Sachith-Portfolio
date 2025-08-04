import About from "./About";
import Experience from "./Experience";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./Home";
import Technologies from "./Technologies";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Portfolio() {
    return (
        <Main>
            <Header/>
            <Home/>
            <About/>
            <Technologies/>
            <Experience/>
            <Education/>
            <Projects/>
            <Contact/>
        </Main>
    )
}
