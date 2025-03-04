import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

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
          valueGetter: (value, row) => `${row.Code || ''} ${row.Product || ''}`,
        },
      ];
      const rows = [
        { id: 1, Product: 'Soap', firsName: '12345', Status: 14 },
        { id: 2, Product: 'Books', Code: '23456', Status: 31 },
        { id: 3, Product: 'Cooking Oil', Code: '56467', Status: 31 },
        { id: 4, Product: 'Mouse', Code: '23675', Status: 11 },
        { id: 5, Product: 'Soda', Code: '90444', Status: null },
        { id: 6, Product: 'Laptop', Code: '86754', Status: 150 },
        { id: 7, Product: 'Plate', Code: '67903', Status: 44 },
        { id: 8, Product: 'Spoon', Code: '46902', Status: 36 },
        { id: 9, Product: 'Pan', Code: '34568', Status: 65 },
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

export default Purchase
