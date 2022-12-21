import * as React from "react";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import { createTheme, MenuItem, Select, ThemeProvider } from "@mui/material";
import SectionPanel from "./Section";
import CustomTextField from "./components/CustomTextField";

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});

export default function AddressForm({
  title,
  removeAddress = true,
}: {
  title: string;
  removeAddress?: boolean;
}) {
  const [age, setAge] = React.useState("");
  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  return (
    <ThemeProvider theme={theme}>
      <SectionPanel title={title}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}>
            <CustomTextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
              size="small"
              margin="dense"
            />
            <CustomTextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              size="small"
              variant="outlined"
              margin="dense"
            />

            <FormControl fullWidth size="small" margin="dense">
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <CustomTextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              size="small"
              variant="outlined"
              margin="dense"
              multiline
            />
            {removeAddress ? (
              <>
                <CustomTextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line1"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  multiline
                />
                <CustomTextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 3"
                  fullWidth
                  autoComplete="shipping address-line1"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  multiline
                  rows={5}
                />
              </>
            ) : null}
          </Grid>
          {!removeAddress ? (
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
          ) : null}
        </Grid>
      </SectionPanel>
    </ThemeProvider>
  );
}
