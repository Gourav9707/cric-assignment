import React from "react";
import "./styles.css";
import Box from "@material-ui/core/Box";
import ODI from "./components/ODI";
import Navbar from "./components/Navbar";

export default function Player() {
  const player = [
    {
      name: "Rohit Sharma",
      country: "India",
      Role: "BatsMan",
      ODI: "136",
      Born: "New Delhi"
    },
    {
      name: "MS Dhoni",
      country: "India",
      Role: "BatsMan",
      ODI: "136",
      Born: "Rachi"
    },
    {
      name: "Shikahar Dahawan",
      country: "India",
      Role: "BatsMan",
      ODI: "136",
      Born: "New Delhi"
    },
    {
      name: "David Warner",
      country: "Australia",
      Role: "BatsMan",
      ODI: "148",
      Born: "Colac"
    },
    {
      name: "Mitchell Starc",
      country: "Australia",
      Role: "BatsMan",
      ODI: "110",
      Born: "Paddington"
    },
    {
      name: "Aron Finch",
      country: "Australia",
      Role: "BatsMan",
      ODI: "120",
      Born: "Sydny"
    }
  ];
  return (
    <div className="App">
      <Navbar />
      <Box display="flex" m={2} p={2} flexWrap="wrap">
        {player.map((ply) => (
          <Box m={1}>
            <ODI data={ply} />
          </Box>
        ))}
      </Box>
    </div>
  );
}
