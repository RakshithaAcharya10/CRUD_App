import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { red } from '@mui/material/colors';

export default function ViewProduct() {
  const [products, setProduct] = useState([])

  useEffect(() => {
    axios.get('http://localhost:7000/product/getproduct')
      .then((res) => {
        console.log(res.data.allproducts)
        setProduct(res.data.allproducts)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])


  const handleDelete = (uid) => {
    axios.delete(`http://localhost:7000/product/deleteproduct/${uid}`)

      .then((res) => {
        alert("Product deleted")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* <TableHead>
          <TableRow sx={{color:"red"}}>
            <TableCell align="center">SI. NO.</TableCell>
            <TableCell align="center">NAME</TableCell>
            <TableCell align="center">PRICE</TableCell>
            <TableCell align="center">QUANTITY</TableCell>
            <TableCell align="center">DESCRIPTION</TableCell>
            <TableCell align="center">PRODUCT IMAGE</TableCell>
            <TableCell align='center'>ACTION</TableCell>
          </TableRow>
        </TableHead> */}

        <TableHead>
          <TableRow sx={{ '& th': { color: 'red', fontWeight: 'bold' } }}>
            <TableCell align="center" sx={{ width: "5%" }}>SI. NO.</TableCell>
            <TableCell align="center" sx={{ width: "15%" }}>NAME</TableCell>
            <TableCell align="center" sx={{ width: "10%" }}>PRICE</TableCell>
            <TableCell align="center" sx={{ width: "10%" }}>QUANTITY</TableCell>
            <TableCell align="center" sx={{ width: "30%" }}>DESCRIPTION</TableCell>
            <TableCell align="center" sx={{ width: "15%" }}>PRODUCT IMAGE</TableCell>
            <TableCell align="center" sx={{ width: "15%" }}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.pname}</TableCell>
              <TableCell align="center">{row.pprice}</TableCell>
              <TableCell align="center">{row.pquantity}</TableCell>
              <TableCell align="center">{row.pdescription}</TableCell>
              <TableCell align="center">
                <img src={`http://localhost:7000/image/${row.productimage}`} alt="" style={{ width: "200px", height: "200px" }} />
              </TableCell>
              <TableCell align='center'>
                <Button variant='contained' component={Link} to={`/Admin/UpdateProduct/${row._id}`}>UPDATE</Button>
                <Button variant='outlined' onClick={() => handleDelete(row._id)}>DELETE</Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}









//   return (
//     <TableContainer>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//             <TableRow>
//             <TableCell>Serial NO.</TableCell>
//             <TableCell align="right">Product Name</TableCell>
//             <TableCell align="right">Price</TableCell>
//             <TableCell align="right">Rating</TableCell>
//             <TableCell align="right">Stock</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {Products.map((product) => (
//             <TableRow key={product.ProductName}>
//               <TableCell>{product.pname}</TableCell>
//               <TableCell>{product.pprice}</TableCell>
//               <TableCell>{product.pquantity}</TableCell>
//               <TableCell>{product.pdescription}</TableCell>
//               <TableCell><img src={product.ProductImage} alt="Image" style={{ width: "60px",height: "60px"}}/></TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
