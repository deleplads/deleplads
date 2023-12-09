"use client";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { profiles } from "@prisma/client";
import { Form, useSubmit } from "@remix-run/react";
import { FormEvent, MouseEventHandler, useState } from "react";
import { Toaster } from "react-hot-toast";
import styles from '~/styles/css/components/Account/AccountSettings/AccountSettings.css';

type EditProfileProps = {
  profile: profiles
};

function ProfileSettings(profile: EditProfileProps) {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submit = useSubmit();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleDelete: MouseEventHandler<HTMLButtonElement> = async (event) => {
    submit({ profileId: profile.profile.id, _action: "markUserForDeletion" }, { method: "post", action: "/account/settings" });
  };

  return (
    <div>
      <Toaster position="top-right" />
      <Form onSubmit={handleSubmit}>
        <div className="angry-grid">
          <div id="item-0">
            <div className="ProfileEditHeader">
              <h1>Indstillinger</h1>
              <Button variant="outlined" className="Button">Vis profil</Button>
            </div>
          </div>
          <div id="item-1">
            <Button onClick={handleOpen} color="error" variant="contained">Slet konto</Button>
          </div>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Er du sikker på du vil slette din profil?
                </Typography>
                <Box mt={2} display="flex" justifyContent="center">
                  <Stack direction="row" spacing={10}>
                    <Button onClick={handleDelete} color="error" variant="contained" name="_action" value="markUserForDeletion">Ja</Button>
                    <Button onClick={handleClose} color="primary" variant="contained">Nej</Button>
                  </Stack>
                </Box>
              </Box>
            </Modal>
          </div>
        </div>
      </Form>
    </div >
  )
}

export default ProfileSettings;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}