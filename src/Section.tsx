import * as React from "react";
import Typography from "@mui/material/Typography";

import { Paper } from "@mui/material";

export default function SectionPanel({
  title,
  children,
}: {
  children?: React.ReactNode;

  title: string;
}) {
  return (
    <Paper
      elevation={2}
      style={{
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {children}
    </Paper>
  );
}
