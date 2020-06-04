import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Title from "../title/title";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  margin: {
    marginTop: "10px",
  },
}));

const BasicForm = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  let content = (
    <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
      <Title>{props.title}</Title>
      <TextField
        required
        className={classes.margin}
        value={props.name}
        id="name"
        name="name"
        label="Nombre"
        fullWidth
        onChange={(event) => props.handleName(event.target.value)}
      />
      <TextField
        required
        className={classes.margin}
        value={props.description}
        id="description"
        name="description"
        label="Descripción"
        fullWidth
        onChange={(event) => props.handleDescription(event.target.value)}
      />
      <div className={classes.buttons}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          {props.id != null ? "Actualizar" : "Crear"}
        </Button>
      </div>
    </form>
  );

  return content;
};

export default BasicForm;
