import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Cards() {
  return (
    <Card
      sx={{
        display: "flex",
        width: "70%",
        mt: "20%",
        ml: "20%",
        p: 5,
        bgcolor: "lightgray",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <CancelIcon color="warning" />
          </IconButton>
          <Typography component="h2" variant="h5">
            No Contact Found Please Add From Create Contact Botton
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
