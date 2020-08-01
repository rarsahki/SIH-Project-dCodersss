import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date,seller, loc, buy, quantity, paymentMethod, amount) {
  return { id, date,seller, loc, buy, quantity, paymentMethod, amount };
}

const rows = [
  createData(0, '1 August 2020', 'Ram Kumar', 'Gorakhpur, UP','Ark Srivastava', '1000kg','PAYTM', 312.44),
  createData(1, '30 July 2020', 'Kamlesh Khanna', 'Chennai, TN', 'Ark Srivastava', '1000kg','PAYTM', 866.99),
  createData(2, '29 July 2020', 'Pradeep Kumar', 'Trichy, TN', 'Ark Srivastava', '1000kg','ONLINE SBI', 100.81),
  createData(3, '26 July 2020', 'Nikhil Sebastian', 'Cochin, KL', 'Ark Srivastava', '1000kg','GPAY', 654.39),
  createData(4, '19 July 2020', 'Maha Fatheema', 'Mumbai, MH', 'Ark Srivastava', '1000kg','ONLINE SBI', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Seller</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Buyer</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Order Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.seller}</TableCell>
              <TableCell>{row.loc}</TableCell>
              <TableCell>{row.buy}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" target="_blank" href="/govttransactions">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}