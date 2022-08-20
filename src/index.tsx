import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactLoading from 'react-loading';
import {
    BrowserRouter,
    Routes,
    Route, useParams, useNavigate,
} from "react-router-dom";
import axios from "axios";

const LogicContainer = () => {
    const [secretPath, setSecretPath] = useState("")

    useEffect(() => {
        axios.get("https://cops-server.herokuapp.com/secretPath").then(res => setSecretPath(res.data))
    }, [])


    const randomSecretPath = () => {
        axios.post("https://cops-server.herokuapp.com/secretPath")
    }

    return (
        <Routes>
            <Route path={"/"}>
                <Route path={"/:id"} element={secretPath.length < 1 ?
                    <div className={"loading"}><ReactLoading type={"spokes"} color={"black"} height={"50px"}
                                                             width={'50px'}/></div>
                    :
                    <CheckSecretPath secretPath={secretPath}/>}/>
            </Route>
            <Route path={"/putin"}
                   element={<CreateSecretPathComponent secretPath={secretPath} randomSecretPath={randomSecretPath}/>}/>
            <Route path={"/putin-edit"} element={<Edit/>}/>
            <Route path={"*"} element={<div className={"access"}>You are not entitled to this 12</div>}/>
        </Routes>
    )
}
const CheckSecretPath = (props: any) => {
    const params = useParams();
    return params.id === props.secretPath ? <App/> : <div className={"access"}>You are not entitled to this</div>
}

const CreateSecretPathComponent = (props: any) => {
    const navigate = useNavigate()
    return (
        <div className={"center"}>
            <div> currentPath : {props.secretPath}<br/></div>
            <div>
                <button onClick={() => {
                    props.randomSecretPath()
                }}>Generate path
                </button>
                <button onClick={() => navigate(`/${props.secretPath}`)}>
                    Navigate
                </button>
                <button
                    onClick={() => navigator.clipboard.writeText(`https://secure-coplogic.herokuapp.com/${props.secretPath}`)}>
                    Copy Path
                </button>
            </div>

        </div>
    )

}

const Edit = () => {

    const [data,setData] = useState({
        IncidentType:"",
        TrackingNumber:"",
        ReportDate:"",
        Name:"",
        HomeAddress:"",
        HomePhone:"",
        Email:"",
        WorkAddress:"",
        Race:"",
        Ethnicity:"",
        ResidentStatus:"",
        Sex:"",
        DOB:"",
        IncidentLocation:"",
        IncidentTimesStart:"",
        IncidentTimeEnd:"",
        LocationType:"",
        TheftType:"",
        Type:"",
        Brand:"",
        Model:"",
        Color:"",
        SerialNo:"",
        HowMany:"",
        MarketValue :"",
        PropertyDescription :"",
        IncidentDescription :"",
    })

    return (
        <div className={"flex"}>
            <div className={"column"}>
                <div className={"strong"}>General Information</div>
                <div className={"item"}>
                    Incident Type
                    <input value={data.IncidentType} onChange={(e) => setData({...data,IncidentType: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Tracking Number
                    <input value={data.TrackingNumber} onChange={(e) => setData({...data,TrackingNumber: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Report Date
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                    {/*********************************************/}
                <div className={"strong"}>Reporting Person Information</div>
                <div className={"item"}>
                    Name
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Home Address
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Home Phone
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Email
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Work Address
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Race
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Ethnicity
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Resident Status
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Sex
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    DOB
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                {/*********************************************/}
                <div className={"strong"}>Incident Information</div>
                <div className={"item"}>
                    Incident Location
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Incident Time (start)
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Incident Time (end)
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Location Type
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Theft Type
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                {/*********************************************/}
                <div className={"strong"}>Property Information</div>
                <div className={"item"}>
                    Type
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Brand
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Model
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Color
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Serial No
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    How Many
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Market Value ($)
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <div className={"item"}>
                    Property Description
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                {/*********************************************/}
                <div className={"strong"}>Narrative</div>
                <div className={"item"}>
                    Incident Description
                    <input value={data.ReportDate} onChange={(e) => setData({...data,ReportDate: e.currentTarget.value})}/>
                </div>
                <button onClick={() => axios.post("test",data)}>Save</button>
            </div>

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

