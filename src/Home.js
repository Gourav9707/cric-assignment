import React from "react";
import "./styles.css";
import { getMatches, getDetail } from "./api/api";
import Navbar from "./components/Navbar";
import Dialog from "./components/Dialog";
import Card from "./components/Card";
import Box from "@material-ui/core/Box";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [matches, setMatches] = React.useState([]);
  const [detail, setDetail] = React.useState({});
  const handleDetail = (id) => {
    setOpen(true);
    getDetail(id).then((data) => {
      console.log(data);
      setDetail(data);
    });
    console.log(id);
  };

  const handleOk = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    getMatches().then((data) => setMatches(data.matches));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Dialog open={open} onOk={() => handleOk} data={detail} />
      <Box
        display="flex"
        m={2}
        p={2}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {matches.map((match) =>
          match.type === "Twenty20" ? (
            <Box m={1}>
              <Card
                key={match.unique_id}
                team1={match["team-1"]}
                team2={match["team-2"]}
                date={new Date(match.dateTimeGMT).toLocaleString()}
                ondetail={() => handleDetail(match.unique_id)}
              />
            </Box>
          ) : (
            ""
          )
        )}
      </Box>
    </div>
  );
}
