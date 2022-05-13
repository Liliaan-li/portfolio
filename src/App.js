import './App.css';
import Header from "./Header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import SecondBlock from "./SecondBlock/SecondBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";
import FourthBlock from "./FourthBlock/FourthBlock";
import FifthBlock from "./FifthBlock/FifthBlock";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <FirstBlock/>
            <SecondBlock />
            <ThirdBlock/>
            <FourthBlock/>
            <FifthBlock/>
            <Footer/>
        </div>
    );
}

export default App;
