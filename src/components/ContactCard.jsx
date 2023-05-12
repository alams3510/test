import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { Did, edit } from "../redux/Action";

export default function ContactCard({ item, i }) {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{ minWidth: 200, m: 3, paddingLeft: "15px", bgcolor: "lightpink" }}
    >
      <CardContent>
        <Typography variant="h5" component="h4" sx={{ fontSize: 22 }}>
          {item.firstname}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => dispatch(edit(i))}
          size="small"
        >
          Edit
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(Did(i))}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
