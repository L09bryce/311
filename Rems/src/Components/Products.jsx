import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../Pages/Navbar";
import { useState,useEffect } from "react";


const Products = ({sidebarToggle, setSidebarToggle}) => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'ProductId',
            headerName: 'ID',
            width: 150,
            editable: true,
          },
        {
          field: 'ProductName',
          headerName: 'ProductName',
          width: 150,
          editable: true,
        },
        {
          field: 'unitsAvailable',
          headerName: 'Available Units',
          width: 150,
          editable: true,
        },
        {
          field: 'productimage',
          headerName: 'Image',
          width: 150,
          editable: false,
        },
        {
          field: 'category',
          headerName: 'Category',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'sellPrice',
          headerName: 'Sell Price',
          description: 'This column has a value getter and is not sortable.',
          sortable: true,
          width: 160,
          //valueGetter: (value, row) => `${row.ProductCode || ''} ${row.ProductName || ''}`,
        },
      ];
      // const rows = [ 
      //   { id: 5, ProductName: 'Soap', unitsAvailable: '12345',productImage: 'Done', category: 'Educational', sellPrice: 1500 },
      //   { id: 2, ProductName: 'Books', ProductCode: '23456', status: 'Declined' },
      //   { id: 3, ProductName: 'Cooking Oil', ProductCode: '56467', status: 'Pending' },
      //   { id: 4, ProductName: 'Mouse', ProductCode: '23675', status: 'Done' },
      //   { id: 5, ProductName: 'Soda', ProductCode: '90444', status: 'Done' },
      //   { id: 6, ProductName: 'Laptop', ProductCode: '86754', status: 'Pending' },
      //   { id: 7, ProductName: 'Plate', ProductCode: '67903', status: 'Done' },
      //   { id: 8, ProductName: 'Spoon', ProductCode: '46902', status: 'Declined' },
      //   { id: 9, ProductName: 'Pan', ProductCode: '34568', status: 'Pending' },
      // ];

      const [products,setProducts] = useState(null)

      useEffect(()=>{
        const endpoint = 'http://127.0.0.1:8000/api/products' 

        fetch(endpoint).then((response)=>{
          return response.json()
        }).then(data =>{
          setProducts(data)
          console.log(data);
          
        }
        )
      },[])
      

  return (
    <div className={`${sidebarToggle? "" : "ml-48"}`}>
      <Navbar sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
         <h4 className="text-center">PRODUCTS</h4>
      <Box sx={{ height: 750, width: '100%' }}>
      {products && <DataGrid
        rows={products}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
      />}
    </Box>
    </div>
  )
}

export default Products