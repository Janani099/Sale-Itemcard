import { useState } from "react";
import "./styles.css";
import Card from "@material-ui/core/Card";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MuiAlert from "@material-ui/lab/Alert";

export default function App() {
  const fillCart = [
    {
      image: "https://dummyimage.com/250x179/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      priceDollar: "$40.00-$80.00"
    },
    {
      image: "https://dummyimage.com/250x179/dee2e6/6c757d.jpg",
      productName: "Special Item",
      priceDollar: "$18.00"
    },
    {
      image: "https://dummyimage.com/250x179/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      priceDollar: "$25.00"
    },
    {
      image: "https://dummyimage.com/250x179/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      priceDollar: "$40.00"
    },
    {
      image: "https://dummyimage.com/250x179/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      priceDollar: "$25.00"
    },
    {
      image: "https://dummyimage.com/250x179/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      priceDollar: "$120.00 - $280.00"
    },
    {
      image: "https://dummyimage.com/250x179/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      priceDollar: "$18.00"
    },
    {
      image: "https://dummyimage.com/250x179/dee2e6/6c757d.jpg",
      productName: "Special Item",
      priceDollar: "$40.00"
    }
  ];
  const [price, setPrice] = useState(fillCart);
  const [image, setImage] = useState("");
  const [poll, setPoll] = useState([]);
  const [cart, setCart] = useState([]);
  const [addCart, setaddCart] = useState([cart.length]);

  return (
    <div className="App">
      <div className="tab">
        <AppBar
          position="sticky"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <Toolbar>
            <Typography variant="h6" className="title">
              FillCart
            </Typography>

            <p style={{ paddingLeft: "30px" }}>Home</p>
            <p style={{ paddingLeft: "30px" }}>About</p>
            <p style={{ paddingLeft: "30px" }}>Shop</p>
            <ArrowDropDownIcon />
            <Button style={{ marginLeft: "auto" }}>
              <ShoppingCartIcon style={{ marginLeft: "8px" }} />
              cart()
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className="header">
        <br />
        <h1>Shop in style</h1>
        <h3 style={{ fontSize: "20px" }}>With this shop homepage template</h3>
      </div>
      <div className="poll">
        {price.map((detail) => (
          <CreateCard
            image={detail.image}
            productName={detail.productName}
            priceDollar={detail.priceDollar}
          />
        ))}
      </div>

      <footer className="fooStyle">
        <div class="container">
          <p className="footer">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </div>
  );
}

function CreateCard(props) {
  const [price, setPrice] = useState([]);
  const [cart, setCart] = useState([]);

  const addCart = (price) => {
    console.log("Cart");

    setCart([...cart, price]);
  };
  return (
    <div className="Card-grid">
      <Card className="ShopCard">
        <img className="ImageTop" src={props.image} alt="No Image" />
        <Badge badgeContent={"sale"} color="primary" />
        <div className="CardBody">
          <h2 className="CardTitle">{props.productName}</h2>
          <p className="CardText">{props.priceDollar}</p>
          <Button variant="contained" onClick={() => addCart(price)}>
            Add to Cart
          </Button>
        </div>
      </Card>
    </div>
  );
}
