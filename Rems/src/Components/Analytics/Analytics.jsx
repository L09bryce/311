import React from "react";
import { PiePlot, ResponsiveChartContainer } from "@mui/x-charts";
import Navbar from "../../Pages/Navbar"
import './Analytics.css'
import { PieChart } from '@mui/x-charts/PieChart';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState,useEffect } from "react";


const Analytics = ({sidebarToggle, setSidebarToggle}) => {

  const columns = [
    { id: 'product', label: 'Product', minWidth: 170 },
    { id: 'productId', label: 'Product Id', minWidth: 100 },
    {
      id: 'unitsSold',
      label: 'Units Sold',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'amount',
      label: 'Amount',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(product, productId, unitsSold, amount) {
   
    return { product, productId, unitsSold, amount};
  }

  const rows = [
   
  ];



  const [products,setProducts] = useState(null)
  
        useEffect(()=>{
          const endpoint = 'http://127.0.0.1:8000/api/products' 
  
          fetch(endpoint).then((response)=>{
            return response.json()
          }).then(data =>{
            setProducts(data) 
            console.log(data)         
          }
          )         
          
        },[])

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (


    <div className={`${sidebarToggle? "" : "ml-48"}`}>
    <div className="analysis bg-gray-700 w-full">
      <Navbar sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>

      <div className="text-center">

      {
        products && products.map(item =>{
          rows.push(createData(item.ProductName,item.ProductId,item.unitsAvailable,item.sell_price * item.unitsAvailable))          
      })
      }
        <h3>REVENUE FORECAST</h3>
        <div className="pl-90 mt-10">
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'sales' },
            { id: 1, value: 15, label: 'revenue' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    <ResponsiveChartContainer>
  <PiePlot skipAnimation />
</ResponsiveChartContainer>
        </div>
      </div>
      <div>
        <h4 className="text-center text-white">Sales Generator Table</h4>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products && rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
      </div>
    </div>
    </div>
  )
}

export default Analytics
