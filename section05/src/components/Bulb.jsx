import {useState} from "react";

const Bulb = () => { //부무로부터 전달받는 props가 바뀌면 리랜더링
    const [light, setLight] = useState("OFF");

    return (
        <div>
            {light === "ON" ? (
                <h1 style={{backgroundColor: "orange"}}>ON</h1>
            ) : (
                <h1 style={{backgroundColor: "gray"}}>OFF</h1>
            )}
            <button
                onClick={() => {
                    setLight(light === "ON" ? "OFF" : "ON");
                }}>
                {light === "ON" ? "끄기" : "켜기"}
            </button>
        </div>
    );
};

export default Bulb;