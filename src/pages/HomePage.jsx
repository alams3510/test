import Contact from "../components/Contact";
import { Routes, Route } from "react-router-dom";
import ChartMap from "../components/ChartMap";
import { Box } from "@mui/system";
import FormModal from "../components/FormModal";
import { useSelector } from "react-redux";
// import Editpoppup from "../components/Editpoppup";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  // const [openedit, setOpenedit] = useState(false);
  const { userData, Edit } = useSelector((state) => state.Reducer);
  console.log(Edit);
  useEffect(() => {
    if (Edit !== null) {
      setOpen(true);
    }
  }, [Edit]);

  return (
    <Box>
      <FormModal open={open} setOpen={setOpen} Edit={Edit} />
      {/* <Editpoppup setOpenedit={setOpenedit} openedit={openedit} /> */}
      <Routes>
        <Route path="/" element={<Contact setOpen={setOpen} />} />
        <Route path="/chart" element={<ChartMap />} />
      </Routes>
    </Box>
  );
};

export default HomePage;
