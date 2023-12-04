import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table, Paper } from "@mui/material"
import { multiStepContext } from "../StepContext"
import { useContext } from "react"

export default function DisplayData(props) {
    
    const {finalData} = useContext(multiStepContext)

    return (
        <>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Contact No</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">District</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Landmark</TableCell>
            <TableCell align="right">Postal Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalData.map((row) => (
            <TableRow
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.district}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.landmark}</TableCell>
              <TableCell align="right">{row.postcode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
