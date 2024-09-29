import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Welcome if you dare</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={10}>
          <Typography mb={4} variant="body1">
            Click the button and wait...
          </Typography>
          <Button
            onClick={() => setModal(true)}
            type="button"
            variant="contained"
            color="primary"
          >
            Open Dialog
          </Button>
        </Box>
        <Dialog open={modal}>
          <DialogContent>
            <DialogTitle>Random Dialog</DialogTitle>
            <DialogContentText>
              Click the button to remove the Dialog
            </DialogContentText>
            <DialogActions>
              <Button variant="outlined" onClick={() => setModal(false)}>
                Close
              </Button>
              <Button variant="outlined" onClick={() => setModal(false)}>
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
}

export default App;
