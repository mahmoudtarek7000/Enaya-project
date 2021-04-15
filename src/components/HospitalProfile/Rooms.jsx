import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Rooms = () => {
  const classes = useStyles();

  return (
    <div className="section-cont">
      <div className="container">
        <h2>Rooms</h2>
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="row">
                <div className="col-12 col-md-4 p-3">
                  <img src= "" alt="image1" className="w-100" />
                </div>
                <div className="col-12 col-md-4 p-3">
                  <img src= "" alt="image1" className="w-100" />
                </div>
                <div className="col-12 col-md-4 p-3">
                  <img src= "" alt="image1" className="w-100" />
                </div>
                <div className="col-12 col-md-4 p-3">
                  <img src= "" alt="image1" className="w-100" />
                </div>
                <div className="col-12 col-md-4 p-3">
                  <img src= "" alt="image1" className="w-100" />
                </div>
                <div className="col-12 col-md-4 p-3">
                  <img src= "" alt="image1" className="w-100" />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
