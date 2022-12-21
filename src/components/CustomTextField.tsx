import { TextField, TextFieldProps } from "@mui/material";
import * as React from "react";

export default function CustomTextField(props: Partial<TextFieldProps>) {
  return (
    <TextField
      fullWidth
      autoComplete="given-name"
      variant="outlined"
      size="small"
      margin="dense"
      {...props}
    />
  );
}
