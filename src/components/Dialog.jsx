import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"MATCH DETAILS!"}
        </DialogTitle>
        <DialogContent>
          {props.data.matchStarted === true ? (
            <>
              <DialogContentText id="alert-dialog-slide-description">
                Status: {props.data.stat}
              </DialogContentText>
              <DialogContentText id="alert-dialog-slide-description">
                Score: {props.data.score}
              </DialogContentText>
            </>
          ) : (
            <DialogContentText id="alert-dialog-slide-description">
              Status: Match not Started
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onOk()} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
