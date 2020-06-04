import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Navbar from "../components/kata3";
import Form from "../components/kata7";
import TaskTable from "../components/kata8";
import ModalDelete from "../components/kata9";
import { useHttp } from "../hooks/http";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const Main = (props) => {
  const classes = useStyles();
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const [cb, setCb] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, fetchedData] = useHttp("http://localhost:5000/task", [cb]);
  const title = "Formulario de tareas";
  let content = (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Form
                cb={cb}
                setCb={setCb}
                title={title}
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                id={id}
                setId={setId}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <TaskTable
                fetchedData={fetchedData != null ? fetchedData.data : []}
                cb={cb}
                setCb={setCb}
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                id={id}
                setId={setId}
                open={open}
                setOpen={setOpen}
              />

              {/* {fetchedData != null ? (
                fetchedData.data.map((task) => {
                  return <div>{task.name}</div>;
                })
              ) : (
                <p>Cargando...</p>
              )} */}
            </Grid>
          </Grid>
          <ModalDelete
            open={open}
            setOpen={setOpen}
            id={id}
            setId={setId}
            cb={cb}
            setCb={setCb}
          />
        </Container>
      </main>
    </div>
  );
  return content;
};

export default Main;
