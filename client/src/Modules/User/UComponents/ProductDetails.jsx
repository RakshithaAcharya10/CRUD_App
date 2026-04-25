import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Typography } from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();   
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:7000/product/getproductbyid/${id}`)
      .then((res) => {
        console.log(res.data.byid);
        setProduct(res.data.byid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

//   return (
//     <Paper style={{ padding: "20px", margin: "20px" }}>
//       <Typography variant="h4">{product.pname}</Typography>

//       <img
//         src={`http://localhost:7000/image/${product.productimage}`}
//         alt=""
//         style={{ width: "300px", height: "300px" }}
//       />

//       <Typography variant="h6">Price: ₹{product.pprice}</Typography>
//       <Typography>Quantity: {product.pquantity}</Typography>
//       <Typography>Description: {product.pdescription}</Typography>
//     </Paper>
//   );

return (
  <Paper
    sx={{
      padding: "40px",
      margin: "20px",
      display: "flex",
      gap: "50px",
      width: "90%",
      marginX: "auto",
      alignItems: "center",
      justifyContent: "space-between"
    }}
  >
    {/* 🔹 LEFT SIDE - IMAGE (50%) */}
    <div style={{ flex: 1 }}>
      <img
  src={`http://localhost:7000/image/${product.productimage}`}
  alt=""
  style={{
    width: "100%",
    height: "400px",
    objectFit: "contain",   
    borderRadius: "10px",
    background: "#f5f5f5"   
  }}
/>
    </div>

    {/* 🔹 RIGHT SIDE - DETAILS (50%) */}
    <div style={{ flex: 1 }}>
      <Typography variant="h3" gutterBottom>
        {product.pname}
      </Typography>

      <Typography variant="h4" color="green" gutterBottom>
        ₹ {product.pprice}
      </Typography>

      <Typography variant="body1" gutterBottom>
        <b>Quantity:</b> {product.pquantity}
      </Typography>

      <Typography variant="body1" color="text.secondary" gutterBottom>
        {product.pdescription}
      </Typography>

      <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
        <button style={{
          padding: "12px 25px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Add to Cart
        </button>

        <button style={{
          padding: "12px 25px",
          background: "orange",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={()=>navigate(`/Bookingform/${product._id}`)}>
          Buy Now
        </button>
      </div>
    </div>
  </Paper>
);

}