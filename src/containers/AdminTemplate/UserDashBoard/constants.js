const headCells = [
  {
    id: "STT",
    numeric: false,
    disablePadding: true,
    label: "Numerical order",
    sortFunction: true,
  },
  {
    id: "taiKhoan",
    numeric: false,
    disablePadding: false,
    label: "Account",
    sortFunction: false,
  },
  {
    id: "matKhau",
    numeric: false,
    disablePadding: false,
    label: "Password",
    sortFunction: false,
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
    sortFunction: true,
  },
  {
    id: "soDienThoai",
    numeric: false,
    disablePadding: false,
    label: "Phone number",
    sortFunction: true,
  },
  {
    id: "hanhDong",
    numeric: false,
    disablePadding: false,
    label: "Act",
    sortFunction: false,
  },
];

export default headCells;
