import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddressForm from "./Form1";
import { Grid } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Tab One" {...a11yProps(0)} />
          <Tab label="Tab Two" {...a11yProps(1)} />
          <Tab label="Tab Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
     
        <AddressForm title="demo form 2" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container gap={2}>
          <Grid item sm={3}>
            <AddressForm title="demo form 2" />
          </Grid>
          <Grid item sm={3}>
            <AddressForm title="demo form 2" />
          </Grid>
          <Grid item sm={3}>
            <AddressForm title="demo form 2" />
          </Grid>
          <Grid item sm={3}>
            <AddressForm title="demo form 2" />
          </Grid>
          <Grid item sm={3}>
            <AddressForm title="demo form 2" />
          </Grid>
          <Grid item sm={3}>
            <AddressForm title="demo form 2" />
          </Grid>
          <Grid item sm={3}>
            <AddressForm title="demo form 2" />
          </Grid>
          <Grid item sm={3}>
            <AddressForm title="demo form 2" />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddressForm title="demo form 4" removeAddress />
      </TabPanel>
    </Box>
  );
}
