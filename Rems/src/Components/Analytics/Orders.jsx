
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

const Orders = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'productName',
          headerName: 'productName',
          width: 150,
          editable: true,
        },
        {
          field: 'productCode',
          headerName: 'productCode',
          width: 150,
          editable: true,
        },
        // {
        //   field: 'paymentstatus',
        //   headerName: 'Payment Status',
        //   type: 'number',
        //   width: 110,
        //   editable: true,
        // },
        {
          field: 'status',
          headerName: 'Status',
          description: 'This column has a value getter and is not sortable.',
          sortable: true,
          width: 160,
          //valueGetter: (value, row) => `${row.productCode || ''} ${row.productName || ''}`,
        },
      ];
      const rows = [
        { id: 1, productName: 'Soap', productCode: '12345', Status: 14 },
        { id: 2, productName: 'Books', productCode: '23456', Status: 31 },
        { id: 3, productName: 'Cooking Oil', productCode: '56467', Status: 31 },
        { id: 4, productName: 'Mouse', productCode: '23675', Status: 11 },
        { id: 5, productName: 'Soda', productCode: '90444', Status: null },
        { id: 6, productName: 'Laptop', productCode: '86754', Status: 150 },
        { id: 7, productName: 'Plate', productCode: '67903', Status: 44 },
        { id: 8, productName: 'Spoon', productCode: '46902', Status: 36 },
        { id: 9, productName: 'Pan', productCode: '34568', Status: 65 },
      ];
      

  return (
    <div>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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
      />
    </Box>
    </div>
  )
}

export default Orders
