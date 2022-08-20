import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route, useParams, useNavigate,
} from "react-router-dom";
import axios from "axios";

const LogicContainer = () => {
    const navigate = useNavigate()
    const [secretPath,setSecretPath] = useState("")

    useEffect(() => {
        console.log(secretPath,"-secretPath")
    },[secretPath])

    useEffect(() => {
        axios.get("https://cops-server.herokuapp.com/secretPath").then(res => setSecretPath(res.data))
    },[])


    const randomSecretPath = () => {
        axios.post("https://cops-server.herokuapp.com/secretPath")
    }

    return (
        <Routes>
            <Route path={"/"} element={<CheckSecretPath secretPath={secretPath}/>}/>
            <Route path={"/:id"} element={<CheckSecretPath secretPath={secretPath}/>}/>
            <Route path={"/test"}
                   element={<CreateSecretPathComponent secretPath={secretPath} randomSecretPath={randomSecretPath}/>}/>
            <Route path={"*"} element={ <div className={"access"}>You are not entitled to this</div>}/>
        </Routes>
    )
}
const CheckSecretPath = (props: any) => {
    const params = useParams();
    console.log(params, "-params")
    console.log(props.secretPath, "-props.secretPath")
    return params.id === props.secretPath ? <App/> : <div className={"access"}>You are not entitled to this</div>
}

const CreateSecretPathComponent = (props: any) => {
    return (
        <div>
            <button onClick={() => {
                props.randomSecretPath()
            }}>Generate path</button>
            <br/>
            currentPath : {props.secretPath}
        </div>
    )

}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
            <LogicContainer/>
    </BrowserRouter>
);

