/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import Navbar from './Navbar'
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Users = ({sidebarToggle, setSidebarToggle}) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'name',
        width: 150,
        editable: true,
      },
    {
      field: 'empId',
      headerName: 'employee id',
      width: 150,
      editable: true,
    },
    {
      field: 'securityKey',
      headerName: 'Security Key',
      width: 150,
      editable: true,
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 150,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 110,
      editable: true,
    },
  ];

   const [user,setUser] = useState(null)
  
        useEffect(()=>{
          const endpoint = 'http://127.0.0.1:8000/api/user' 
  
          fetch(endpoint).then((response)=>{
            return response.json()
          }).then(data =>{
            setUser(data)
            console.log(data);
            
          }
          )
        },[])

  return (
    <div className={`${sidebarToggle? "" : "ml-48"}`}>
      <Navbar sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
      <div>
        <h4 className='text-center'>USERS</h4>
        <Box sx={{ height: 550, width: '100%' }}>
              {user && <DataGrid
                rows={user}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />}
            </Box>
        </div>
    </div>
  )
}

export default Users