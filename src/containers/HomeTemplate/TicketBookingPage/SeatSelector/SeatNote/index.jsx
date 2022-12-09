// Material UI
import { Box, Typography, Grid, Stack } from "@mui/material";

// Scss
import "./style.scss";

const seatNoteItems = [
  {
    type: "selected",
    content: "Selected chair",
  },
  {
    type: "sold",
    content: "Chairs sold",
  },
  {
    type: "vip",
    content: "VIP seats",
  },
  {
    type: "selectable",
    content: "Can choose",
  },
  {
    type: "unavailable",
    content: "Can't choose",
  },
];

const SeatNote = () =>
  seatNoteItems.map((item, idx) => (
    <Grid item xs={3} key={idx}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Box className={`seat-selector__seat-note-box ${item.type}`}></Box>
        <Typography className="seat-selector__seat-note-text">{item.content}</Typography>
      </Stack>
    </Grid>
  ));

export default SeatNote;
