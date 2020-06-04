import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  icon: {
    size: "20px",
  },
  span: {
    marginTop: "15px",
  },
  button: {
    "&:hover": {
      color: "#00BFB3",
    },
  },
}));

const ModalDelete = (props) => {
  const classes = useStyles();
  const handleDelete = () => {
    axios
      .delete("http://localhost:5000/task/" + props.id)
      .then((res) => {
        props.setId(null);
        props.setCb(!props.cb);
        props.setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let content = (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => props.setOpen(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <ErrorOutlineRoundedIcon className={classes.icon} color="primary" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography>
              {"¿Esta segura/o que desea eliminar el siguiente registro?"}{" "}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDelete}
            color="primary"
            className={classes.button}
          >
            Aceptar
          </Button>
          <Button
            onClick={() => props.setOpen(false)}
            color="primary"
            className={classes.button}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  return content;
};

export default ModalDelete;
