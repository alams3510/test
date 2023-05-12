// import React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import {
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   TextField,
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { saveEdit } from "../redux/Action";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   height: 450,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
// const Editpoppup = ({ Edit, setOpenedit, openedit }) => {
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.Reducer.userData);
//   const singledata = userData[Edit];
//   console.log(singledata, Edit);
//   const [edata, seteData] = React.useState({
//     // firstname: singledata.firstname,
//     // lastname: singledata.lastname,
//     // status: singledata.status,
//   });
//   console.log(edata);
//   const edithandleChange = (e) => {
//     seteData({
//       ...edata,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const edithandleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(saveEdit(edata));
//     seteData({});
//     setOpenedit(false);
//   };
//   if (Edit !== null) {
//     return (
//       <Box>
//         <Modal
//           openedit={openedit}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Typography id="modal-modal-title" variant="h4" component="h2">
//               Edited Contact
//             </Typography>
//             <Box component="form" sx={{ mt: 1 }} onSubmit={edithandleSubmit}>
//               <Box className="center">
//                 <label>First Name :</label>
//                 <TextField
//                   value={edata.firstname}
//                   name="firstname"
//                   margin="normal"
//                   type="text"
//                   onChange={edithandleChange}
//                   required
//                 />
//               </Box>

//               <Box className="center">
//                 <label>Last Name :</label>
//                 <TextField
//                   required
//                   value={edata.lastname}
//                   name="lastname"
//                   margin="normal"
//                   type="text"
//                   onChange={edithandleChange}
//                 />
//               </Box>
//               <Box className="center">
//                 <FormLabel>Status :</FormLabel>
//                 <RadioGroup
//                   name="status"
//                   value={edata.status}
//                   onChange={edithandleChange}
//                 >
//                   <FormControlLabel
//                     name="status"
//                     value="active"
//                     control={<Radio />}
//                     label="Active"
//                   />
//                   <FormControlLabel
//                     name="status"
//                     value="inactive"
//                     control={<Radio />}
//                     label="Inactive"
//                   />
//                 </RadioGroup>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   mt: "15px",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   onClick={edithandleSubmit}
//                 >
//                   Save Edited contacts
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Modal>
//       </Box>
//     );
//   }
// };

// export default Editpoppup;
