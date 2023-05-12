import { Box, Button, Container, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import ContactCard from "./ContactCard";

const Contact = ({ setOpen }) => {
  const { userData, Edit } = useSelector((state) => state.Reducer);

  console.log(userData, Edit);

  return (
    <Container>
      <Toolbar />
      <Button
        size="large"
        sx={{ m: "10% auto 0 15%" }}
        onClick={() => setOpen(true)}
        variant="contained"
      >
        Create Contact
      </Button>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {userData.length === 0 ? (
          <Cards />
        ) : (
          userData.map((item, i) => <ContactCard item={item} i={i} />)
        )}
      </Box>
    </Container>
  );
};

export default Contact;
