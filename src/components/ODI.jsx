import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(props);
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.data.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.data.Role}
        </Typography>
        <Typography variant="body2" component="p">
          Country: {props.data.country}
          <br />
          ODI: {props.data.ODI}
          <br />
          Born: {props.data.Born}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
