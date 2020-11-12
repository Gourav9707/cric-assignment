import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 400
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 15
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h4">
          {props.team1}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          VS
        </Typography>
        <Typography variant="h6" component="h4">
          {props.team2}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={props.ondetail}
          variant="outlined"
          color="secondary"
        >
          Deatails
        </Button>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.date}
        </Typography>
      </CardActions>
    </Card>
  );
}
