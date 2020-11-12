import React from "react";
const api_key = "DppQfpHEDcMJnPLIoS00keT3kKi2";

export function getMatches() {
  const url = `https://cricapi.com/api/matches?apikey=${api_key}`;
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log("error in fetching"));
}
export function getDetail(id) {
  const url = `https://cricapi.com/api/cricketScore?apikey=${api_key}&unique_id=${id}`;
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log("error in fetching"));
}
