
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react";

const Orders = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'ProductName',
          headerName: 'ProductName',
          width: 150,
          editable: true,
        },
        {
          field: 'ProductCode',
          headerName: 'ProductCode',
          width: 150,
          editable: true,
        },
        // {
        //   field: 'paymentstatus',
        //   headerName: 'Payment status',
        //   type: 'number',
        //   width: 110,
        //   editable: true,
        // },
        {
          field: 'status',
          headerName: 'status',
          description: 'This column has a value getter and is not sortable.',
          sortable: true,
          width: 160,
          //valueGetter: (value, row) => `${row.ProductCode || ''} ${row.ProductName || ''}`,
        },
      ];
      // const rows = [
      //   { id: 1, ProductName: 'Soap', ProductCode: '12345', status: 'Done' },
      //   { id: 2, ProductName: 'Books', ProductCode: '23456', status: 'Declined' },
      //   { id: 3, ProductName: 'Cooking Oil', ProductCode: '56467', status: 'Pending' },
      //   { id: 4, ProductName: 'Mouse', ProductCode: '23675', status: 'Done' },
      //   { id: 5, ProductName: 'Soda', ProductCode: '90444', status: 'Done' },
      //   { id: 6, ProductName: 'Laptop', ProductCode: '86754', status: 'Pending' },
      //   { id: 7, ProductName: 'Plate', ProductCode: '67903', status: 'Done' },
      //   { id: 8, ProductName: 'Spoon', ProductCode: '46902', status: 'Declined' },
      //   { id: 9, ProductName: 'Pan', ProductCode: '34568', status: 'Pending' },
      // ];

       const [orders,setOrders] = useState(null)
      
            useEffect(()=>{
              const endpoint = 'http://127.0.0.1:8000/api/Orders' 
      
              fetch(endpoint).then((response)=>{
                return response.json()
              }).then(data =>{
                setOrders(data)
                console.log(data);
                
              }
              )
            },[])
      

  return (
    <div>
      <h4 className="text-center">ORDERS</h4>
      <Box sx={{ height: 300, width: '100%' }}>
      {orders &&<DataGrid
        rows={orders}
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
  )
}

export default Orders
