import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Button from '@mui/material/Button';

const columns = [
    { field: 'id', headerName: 'ID', width: 0 },
    { field: 'username', headerName: 'username', width: 150 },
    { field: 'email', headerName: 'email', width: 250 },
    { field: 'school_code', headerName: 'school_code', width: 130 },
    { field: 'school_name', headerName: 'school_name', width: 130 },
    { field: 'type_of_school', headerName: 'type_of_school', width: 130 },
    { field: 'no_of_posts', headerName: 'email', width: 130 },
    { field: 'no_of_teachers', headerName: 'no_of_teachers', width: 130 },
  ];
  

const GetAllAdmins = () => {
    const [rows,setRows] = React.useState([]);
    const [selectedId,setSelectedId] = React.useState([]);
    React.useEffect(()=>{
        axios({
            method: "post",
            url: "http://localhost:8000/getAllSchools",
            data: {
                "ownerEmail":localStorage.getItem("email"),
                "ownerPassword":localStorage.getItem("password")
            }
        }).then((res) => {
            setRows(res.data.map((data,idx)=>{
                return {
                    id:idx,
                    username:data.username,
                    email:data.email,
                    school_code:data.school_code,
                    school_name:data.school_name,
                    type_of_school:data.type_of_school,
                    no_of_posts:data.no_of_posts,
                    no_of_teachers:data.no_of_teachers
                }
            }));
        });
    },[]);

    const DeleteAllSelected = () => {
        axios({
            method: "post",
            url: "http://localhost:8000/deleteSchools",
            data: {
                "ownerEmail":localStorage.getItem("email"),
                "ownerPassword":localStorage.getItem("password"),
                "school_codes":selectedId.map((id)=>rows[id].username)
            }
        }).then((res) => {
            setRows(rows.filter((row,idx)=>!selectedId.includes(idx)));
            setSelectedId([]);
        });
    }
    return (
        <div >
            <Button variant="contained" onClick={DeleteAllSelected} color="error" style={{marginBottom:"20px",marginTop:"-5px"}}>Delete All Schools Selected</Button>
            <DataGrid
                autoHeight
                rows={rows}
                columns={columns}
                pageSize={15}
                rowsPerPageOptions={[15,25,50,100]}
                checkboxSelection
                onSelectionModelChange={(ids) => {
                    setSelectedId(ids);
                }}
            />
        </div>
    )
}

export default GetAllAdmins