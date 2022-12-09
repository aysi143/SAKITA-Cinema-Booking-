import { useDispatch, useSelector } from "react-redux";

// Material UI
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Stack,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

// Components
import Loader from "@/components/Loader";

// Redux actions
import { actBookTicket } from "@/store/actions/ticketBooking";

// Scss
import "./style.scss";

const TicketBookingCard = () => {
  const dispatch = useDispatch();
  const { ticketBookingDetails, selectedSeats, bookTicket } = useSelector(
    (rootReducer) => rootReducer.ticketBooking,
  );

  const movie = ticketBookingDetails.data?.thongTinPhim;
  const loading = ticketBookingDetails.loading;

  const renderSelectedSeats = () =>
    selectedSeats?.map((selectedSeat, idx) => {
      const endLine = idx === selectedSeats.length - 1;
      return (
        <span key={idx}>
          {selectedSeat.code}
          {endLine ? "" : ", "}
        </span>
      );
    });

  const renderPriceTotal = () => {
    const priceTotal = selectedSeats?.reduce(
      (priceTotal, selectedSeat) => priceTotal + selectedSeat.price,
      0,
    );

    return priceTotal.toLocaleString();
  };

  const handleBookTicket = () => {
    const ticket = {
      maLichChieu: movie?.maLichChieu,
      danhSachVe: selectedSeats?.map((seat) => ({ maGhe: seat.id, giaVe: seat.price })),
    };

    dispatch(actBookTicket(ticket));
  };

  return (
    <Card className="ticket-booking-card" elevation={24} square>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Movie image */}
          <CardMedia
            className="ticket-booking-card__media"
            component="img"
            alt="movie picture"
            image={movie?.hinhAnh}
          />
          {/* Card content */}
          <CardContent className="ticket-booking-card__content">
            {/* Movie name */}
            <Typography className="ticket-booking-card__movie-name" component="h2" variant="h5">
              {movie?.tenPhim}
            </Typography>
            <Stack direction="row" justifyContent="between" alignItems="center" spacing={1}>
              <Box className="ticket-booking-card__movie-age-limit-label">C13</Box>
              <Typography className="ticket-booking-card__movie-age-limit-content" component="p">
                (*) The film is only for audiences 13 years and older
              </Typography>
            </Stack>
            {/* Booking details */}
            <List>
              <ListItem className="ticket-booking-card__booking-details">
                <ListItemText disableTypography>
                  <strong>Theater:</strong> {movie?.tenCumRap} | {movie?.tenRap}
                </ListItemText>
              </ListItem>
              <ListItem className="ticket-booking-card__booking-details">
                <ListItemText disableTypography>
                  <strong>Address:</strong> {movie?.diaChi}
                </ListItemText>
              </ListItem>
              <ListItem className="ticket-booking-card__booking-details">
                <ListItemText disableTypography>
                  <strong>Show date:</strong> {movie?.gioChieu} | {movie?.ngayChieu}
                </ListItemText>
              </ListItem>
            </List>
            <Divider className="ticket-booking-card__divider" />
            {/* Booked Seats */}
            <List>
              <ListItem className="ticket-booking-card__booking-details">
                <ListItemText disableTypography>
                  <strong>Chair:</strong> {renderSelectedSeats()}
                </ListItemText>
              </ListItem>
            </List>
            <Divider className="ticket-booking-card__divider" />
            {/* Total payment */}
            <Typography className="ticket-booking-card__total" variant="h5" sx={{ mt: "13px" }}>
              <strong>Total:</strong>{" "}
              <strong style={{ color: "var(--primary)" }}>{renderPriceTotal()} Birr</strong>
            </Typography>
          </CardContent>
          {/* Book ticket */}
          <CardActions sx={{ justifyContent: "center" }}>
            <LoadingButton
              className="ticket-booking-card__btn-booking"
              variant="contained"
              onClick={handleBookTicket}
              loading={bookTicket.loading}
            >
              Book Tickets
            </LoadingButton>
          </CardActions>{" "}
        </>
      )}
    </Card>
  );
};

export default TicketBookingCard;
