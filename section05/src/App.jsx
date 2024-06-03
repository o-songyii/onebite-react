import './App.css'
import Bulb from "./components/Bulb.jsx";
import Counter from "./components/Counter.jsx";

function App() {
    //부모 컴포넌트가 리랜더링되면 불필요하게 자식컴포넌트들도 리랜더링되기때문에 컴포넌트 분리 작업이 필요

    return (
        <>
            <Bulb/>
            <Counter/>
        </>
    )
}

export default App
