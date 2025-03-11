import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react";

const Purchase = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'ProductName',
          headerName: 'Product',
          width: 150,
          editable: true,
        },
        {
          field: 'ProductCode',
          headerName: 'code',
          width: 150,
          editable: true,
        },
        {
          field: 'purchaseday',
          headerName: 'Purchase Date',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
            field: 'pieces',
            headerName: 'Pieces Purchased',
            type: 'number',
            width: 110,
            editable: true,
          },
        {
          field: 'verifier',
          headerName: 'Verifier',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          // valueGetter: (value, row) => `${row.Code || ''} ${row.Product || ''}`,
        },
      ];
      // const rows = [
      //   { id: 1, Product: 'Soap', firsName: '12345', Status: 'Decline' },
      //   { id: 2, Product: 'Books', Code: '23456', Status: 'Done' },
      //   { id: 3, Product: 'Cooking Oil', Code: '56467', Status: 'Active' },
      //   { id: 4, Product: 'Mouse', Code: '23675', Status: 'Done' },
      //   { id: 5, Product: 'Soda', Code: '90444', Status: 'Active' },
      //   { id: 6, Product: 'Laptop', Code: '86754', Status: 'Declined' },
      //   { id: 7, Product: 'Plate', Code: '67903', Status: 'Pending' },
      //   { id: 8, Product: 'Spoon', Code: '46902', Status: 'Done' },
      //   { id: 9, Product: 'Pan', Code: '34568', Status: 'Active' },
      // ];

      const [supplies,setSupplies] = useState(null)
            
                  useEffect(()=>{
                    const endpoint = 'http://127.0.0.1:8000/api/supplies' 
            
                    fetch(endpoint).then((response)=>{
                      return response.json()
                    }).then(data =>{
                      setSupplies(data)
                      console.log(data);
                      
                    }
                    )
                  },[])


  return (
    <div>
      <h4 className="text-center">PURCHASES</h4>
      <Box sx={{ height: 300, width: '100%' }}>
      {supplies &&<DataGrid
        rows={supplies}
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

export default Purchase
