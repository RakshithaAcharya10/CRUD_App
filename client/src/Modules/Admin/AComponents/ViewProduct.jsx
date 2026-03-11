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

export default function ViewProduct() {
    const [products, setProduct] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:7000/product/getproduct')
        .then((res)=>{
            console.log(res.data.allproducts)
            setProduct(res.data.allproducts)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    })
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Serial NO.</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">QUANTITY</TableCell>
            <TableCell align="right">DESCRIPTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {index+1}
              </TableCell>
              <TableCell align="right">{row.pname}</TableCell>
              <TableCell align="right">{row.pprice}</TableCell>
              <TableCell align="right">{row.pquantity}</TableCell>
              <TableCell align="right">{row.pdescription}</TableCell>
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
