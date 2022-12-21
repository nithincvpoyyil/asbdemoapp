import React from "react";
import "./App.css";
import { Grid, makeStyles, Theme } from "@mui/material";
import CustomizedTreeView from "./Tree";
import AddressForm from "./Form1";
import BasicTabs from "./Tabs";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 14,
  },
});

const Heading = styled("h1")(({ theme }) => ({
  background: "#fc0",
  margin: 0,
  padding: 10,
}));

const Main = styled("main")(({ theme }) => ({
  width: "100%",
  flex: 1,
  display: "flex",
  overflow: "hidden",
  overflowY: "auto",
}));

const LeftPanel = styled("section")(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: "40%",
  },
  [theme.breakpoints.up("md")]: {
    width: "30%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "20%",
  },
}));

const RightPanel = styled("section")(({ theme }) => ({
  overflowX: "hidden",
  overflowY: "auto",
  padding: "20px 15px 10px 15px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    background: "##f1f17e",
  },
  [theme.breakpoints.down("md")]: {
    width: "60%",
    background: "##f7f797",
  },
  [theme.breakpoints.up("md")]: {
    width: "70%",
    background: "#fefeae",
  },
  [theme.breakpoints.up("lg")]: {
    width: "80%",
    background: "#f7f7f7",
  },
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="appContainer">
        <Heading>ASB demo</Heading>
        <Main>
          <LeftPanel>
            <CustomizedTreeView />
          </LeftPanel>
          <RightPanel>
            <Grid container spacing={2}>
              <Grid item sm={3}>
                <AddressForm title={"mortage form 0"} removeAddress={false} />
              </Grid>
              <Grid item sm={3}>
                <AddressForm title={"mortage form 1"} />
              </Grid>
              <Grid item sm={3}>
                <AddressForm title="mortage form 2" />
              </Grid>
              <Grid item sm={3}>
                <AddressForm title="mortage values" removeAddress={false} />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <BasicTabs />
              </Grid>
            </Grid>
          </RightPanel>
        </Main>
      </div>
    </ThemeProvider>
  );
}

export default App;
