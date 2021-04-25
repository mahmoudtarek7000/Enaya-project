import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

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
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const PatientTable = ({ colName, tableName, data }) => {
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
                <StyledTableCell align="left">{colName}</StyledTableCell>
                {/* <StyledTableCell align="left">Where</StyledTableCell> */}
                <StyledTableCell align="left">Reservation Date</StyledTableCell>
                {/* <StyledTableCell align="left">Status </StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      <Link
                        to={{
                          pathname: `/hospitals/${item.hospitalId}`,
                        }}
                      >
                        {item.hospitalName}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.doctorName}
                    </StyledTableCell>
                    {/* <StyledTableCell align="left">not Complete</StyledTableCell> */}
                    <StyledTableCell align="left">
                      {item.date.toLocaleString()},{item.Time.toLocaleString()}
                    </StyledTableCell>
                    {/* <StyledTableCell align="left">not complete</StyledTableCell> */}
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
