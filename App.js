import React from "react"
import ReactDOM from "react-dom/client"

//React component
const elem = <span>Namste</span>
const Title = () =>
(
    <h1 className="head" tabIndex="5">React Tutorial</h1>
);

//Component composition means component inside component
//Functional component
const HeadingCom = () =>
{    return (
    <div id="container">
        {elem}
    <Title />
    <h1 className="heading">Namaste React by Manali</h1>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingCom></HeadingCom>)
