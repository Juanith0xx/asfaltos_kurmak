// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-6QHB3QQ0LL"); //
};

export const logPageView = (page_path) => {
  ReactGA.send({ hitType: "pageview", page: page_path });
};
