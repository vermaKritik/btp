import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { IconButton } from "@mui/material";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#80808069",
    color: theme.palette.common.black,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({action,data}) {
  const history = useHistory();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">#Block</StyledTableCell>
            <StyledTableCell align="left">Units</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            {action && <StyledTableCell align="center">Actions</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(data)}
          {data.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {`Shipment ${index+1}`}
              </StyledTableCell>
              <StyledTableCell align="left">{row?.hash}</StyledTableCell>
              <StyledTableCell align="left">{row?.packaging_total_quantity}</StyledTableCell>
              <StyledTableCell align="left">{row?.status}</StyledTableCell>
              {action && <StyledTableCell align="center">
                <IconButton color="primary">
                  <QrCodeIcon />
                </IconButton>
                <IconButton onClick={()=>history.push(`/pkg/${index*1}`)} color="secondary">
                  <DehazeIcon />
                </IconButton>
              </StyledTableCell>}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
