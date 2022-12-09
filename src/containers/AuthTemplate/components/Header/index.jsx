import { Link } from "react-router-dom";

// Material UI
import { Avatar } from "@mui/material";

import SakitaLogo from "@/assets/images/header-logo.png";

const Header = () => (
  <Link to="/">
    <Avatar
      alt="Sakita logo"
      src={SakitaLogo}
      sx={{
        width: 75,
        height: 75,
      }}
    />
  </Link>
);

export default Header;
