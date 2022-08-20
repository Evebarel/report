import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route, useParams,
} from "react-router-dom";
import {nanoid} from "nanoid";
import { store} from "./store";
import {Provider, useDispatch, useSelector} from 'react-redux'
import {setSecretPath} from "./slicer";

const LogicContainer = () => {
    const secretPath = useSelector<string>((state:any) => state.secretPathReducer.secretPath)
    const dispatch = useDispatch()

    console.log(secretPath,"-secretPath from redux")

    const randomSecretPath = () => {
        dispatch( setSecretPath(`/${nanoid()}`))
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
            <button onClick={() => props.randomSecretPath()}>Generate path</button>
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
        <Provider store={store}>
            <LogicContainer/>
        </Provider>
    </BrowserRouter>
);

