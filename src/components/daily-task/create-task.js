import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      display: "flex",
      marginTop: "1em"
    }
  },
  btnSubmit: {
    display: "flex",
    marginTop: "1em"
  },
  select: {
    marginTop: "1em"
  },
  paper: {
    margin: "2em",
    padding: "2em"
  }
}));

export default function CreateDailyTask() {
  const classes = useStyles();
  const [assignedTo, setAssignedTo] = useState("");
  const { register, handleSubmit, errors, control } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "rampritsahani@gmail.com",
      password: "Ramprit@1234"
    }
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      await axios.post(
        "https://sheet.best/api/sheets/93097fb3-3229-4d43-8568-b2b20d298063",
        { ...data, assignTo: data.assignTo.value }
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <TextField
              label="Title"
              variant="outlined"
              name="title"
              inputRef={register({ required: true })}
            />
            <TextField
              label="Description"
              name="description"
              variant="outlined"
              inputRef={register({ required: true })}
            />
            <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Comment"
              name="comment"
              inputRef={register({ required: true })}
            />
            <Controller
              name="assignTo"
              className={classes.select}
              control={control}
              options={[
                { value: "Ramprit Sahani", label: "Ramprit Sahani" },
                { value: "Santosh Das", label: "Santosh Das" },
                { value: "Sachidanad Pandey", label: "Sachidanad Pandey" }
              ]}
              as={Select}
            />

            <Button
              type="submit"
              className={classes.btnSubmit}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
}
