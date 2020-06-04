import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

import BasicForm from "./components/basic-form/form";
import BasicTable from "./components/table/basicTable";
import { useHttpGet } from "./hooks/http";

import "./App.css";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  }
}));

const App = props => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [callback, setCallback] = useState(false);
  const [id, setId] = useState(null);
  const [
    isLoading,
    fetchedData
  ] = useHttpGet("http://localhost:5000/api/v1/todo", [callback]);
  const handleName = name => {
    setName(name);
  };
  const handleDescription = description => {
    setDescription(description);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (id == null) {
      axios
        .post("http://localhost:5000/api/v1/todo", {
          name: name,
          description: description
        })
        .then(res => {
          setName("");
          setDescription("");
          setCallback(!callback);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .put("http://localhost:5000/api/v1/todo/" + id, {
          name: name,
          description: description
        })
        .then(res => {
          setName("");
          setDescription("");
          setCallback(!callback);
          setId(null);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  const handleDelete = id => {
    axios
      .delete("http://localhost:5000/api/v1/todo/" + id)
      .then(res => {
        setCallback(!callback);
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  const handleEdit = id => {
    axios
      .get("http://localhost:5000/api/v1/todo/" + id)
      .then(res => {
        setName(res.data.name);
        setDescription(res.data.description);
        setId(res.data._id);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const title = "Formulario de tareas";

  let content = (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.paper}>
            <BasicForm
              name={name}
              handleName={handleName}
              description={description}
              handleDescription={handleDescription}
              title={title}
              handleSubmit={handleSubmit}
              id={id}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <BasicTable
            fetchedData={fetchedData ? fetchedData.data : []}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </Grid>
      </Grid>
    </Container>
  );
  return content;
};

export default App;
