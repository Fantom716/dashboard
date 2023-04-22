import React, { useEffect } from "react";
import Navigation from "../components/nav/navigation";
import Header from "../components/header/assemblyHeader/ready header";
import PanelControlTable from "../components/table && control table/panel control/panelControlTable";
import TableFromDB from "../components/table && control table/table/table";
import axios from "axios";
import { useState } from "react";

function Clients(props) {

    const nameColumn = {
        id: "ID пользователя",
        name: "Имя",
        surname: "Фамилия",
        patronimyc: "Отчество",
        dateBirthday: "Дата рождения",
        phoneNumber: "Номер телефона",
        passportInfo: "Паспортные данные",
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5002/clients")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div style={{ display: "flex", height: "100vh"}}>
            <Navigation />
            <div className='mainContent' style={{ padding: "32px", width: "100vw", background: "#F0F3FF", overflow: "auto" }}>
                <Header />
                <PanelControlTable />
                <TableFromDB nameColumns={nameColumn} data={data} />
            </div>
        </div>
    )
}

export default Clients;