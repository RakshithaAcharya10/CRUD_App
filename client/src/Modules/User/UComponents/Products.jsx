import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";

export default function Products() {
  
  const navigate = useNavigate();

  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedcategory, setSelectedcategory] = useState("All");

  //Fetch Products
  useEffect(() => {
    axios.get('http://localhost:7000/product/getproduct')
      .then((res) => {
        setProduct(res.data.allproducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Fetch Categories
  useEffect(() => {
    axios.get('http://localhost:7000/category/getcategory')
      .then((res) => {
        setCategories(res.data.allcategory);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filter Products
  const filteredproducts =
    selectedcategory === "All"
      ? products
      : products.filter((pro) => pro.categoryId === selectedcategory);

  return (
    <div style={{ marginTop: "30px", padding: "10px" }}>

      <FormControl fullWidth sx={{ mb: "20px" }}>
        <InputLabel style={{fontSize:'25px'}}>Category</InputLabel>
        <Select
          label="Category"
          value={selectedcategory}
          onChange={(e) => setSelectedcategory(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat._id} value={cat._id}>
              {cat.category_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          // width: "100%"
        }}
      >
        {filteredproducts.map((pdata) => (
          <Card
            key={pdata._id}
            sx={{
              height: 380,
              display: "flex",
              flexDirection: "column",
              cursor: "pointer"
            }}
            // onClick={() => navigate(`/product/${pdata._id}`)}
          >

            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }}>
                  {pdata.pname[0]}
                </Avatar>
              }
              action={
                <IconButton onClick={(e) => e.stopPropagation()}>
                  <MoreVertIcon />
                </IconButton>
              }
              title={pdata.pname}
              // subheader="Product"
            />

            <CardMedia
              component="img"
              image={`http://localhost:7000/image/${pdata.productimage}`}
              alt={pdata.pname}
              sx={{
                height: 180,
                width: "100%",
                objectFit: "contain"
              }}
              onClick={() => navigate(`/product/${pdata._id}`)}
            />

            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                Price: {pdata.pprice}
              </Typography>
            </CardContent>

            {/* <CardActions disableSpacing>
              <IconButton onClick={(e) => e.stopPropagation()}>
                <FavoriteIcon />
              </IconButton>
              <IconButton onClick={(e) => e.stopPropagation()}>
                <ShareIcon />
              </IconButton>
            </CardActions> */}

            <Button variant='contained' color='success' 
            onClick={()=>navigate(`/Bookingform/${pdata._id}`)}>
              BOOK NOW
              </Button>

          </Card>
        ))}
      </div>
    </div>
  );
}