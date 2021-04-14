import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function createData(hospital, doctor, where, date, status, details = '') {
  return { hospital, doctor, where, date, status, details };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const PatientTable = ({colName, tableName}) => {
  const classes = useStyles();

  return (
    <div className="section-cont">
      <div className="container">
          <h2 className="mb-5">{tableName}</h2>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Hospital Name</StyledTableCell>
                <StyledTableCell align="right">{colName}</StyledTableCell>
                <StyledTableCell align="right">Where</StyledTableCell>
                <StyledTableCell align="right">
                  Reservation Date
                </StyledTableCell>
                <StyledTableCell align="right">Status </StyledTableCell>
                <StyledTableCell align="right">Details </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.hospital}>
                  <StyledTableCell component="th" scope="row">
                    {row.hospital}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.doctor}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.where}</StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  <StyledTableCell align="right">{row.status}</StyledTableCell>
                  <StyledTableCell align="right">{row.details}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default PatientTable;
