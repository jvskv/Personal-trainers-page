import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditCustomer({ updateCustomer, params }) {
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState({
    firstname: "",
    lastname: "",
    streetaddress: "",
    postcode: "",
    city: "",
    email: "",
    phone: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
    console.log(params.data);
    setCustomer({
      firstname: params.data.firstname,
      lastname: params.data.lastname,
      streetaddress: params.data.streetaddress,
      postcode: params.data.postcode,
      city: params.data.city,
      email: params.data.email,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    updateCustomer(customer, params.value);
    setOpen(false);
  };

  const inputChanged = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          <TextField
            name="firstname"
            margin="dense"
            label="First name"
            value={customer.firstname}
            onChange={inputChanged}
            fullWidth
            variant="standard"
          />
          <TextField
            name="lastname"
            margin="dense"
            label="Last name"
            value={customer.lastname}
            onChange={inputChanged}
            fullWidth
            variant="standard"
          />
          <TextField
            name="streetaddress"
            margin="dense"
            label="Street address"
            value={customer.streetaddress}
            onChange={inputChanged}
            fullWidth
            variant="standard"
          />
          <TextField
            name="postcode"
            margin="dense"
            label="Postcode"
            value={customer.postcode}
            onChange={inputChanged}
            fullWidth
            variant="standard"
          />
          <TextField
            name="city"
            margin="dense"
            label="City"
            value={customer.city}
            onChange={inputChanged}
            fullWidth
            variant="standard"
          />
          <TextField
            name="email"
            margin="dense"
            label="Email"
            value={customer.email}
            onChange={inputChanged}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
