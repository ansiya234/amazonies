

// Home.js
import React from 'react';
import { Container, Nav, Navbar, Button, Card } from 'react-bootstrap';

function ProductCard({ image, title, price }) {



  return (
    <Card style={{ width: '18rem' }} size="lg">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', color: 'black' }}>
          <p>{title} <br /> ₹ {price}</p>
        </Card.Title>
        <Button
          variant="outline-primary"
          style={{ padding: '10px', width: '100%' }}
        >Order Now
        </Button>
      </Card.Body>
    </Card>
  );
}

function Home() {

  const products = [
    { image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwd11cc631/images/ss24/festive2443ss24skblu_1.jpg?sw=242&sh=363", title: "Inddus", price: 2378 },
    { image: "https://5.imimg.com/data5/SELLER/Default/2024/3/397968509/HW/ZK/UX/23397429/ladies-dress-500x500.jpeg", title: "Vishudh", price: 2378 },
    { image: "https://www.jaipuriadaah.com/cdn/shop/files/DSC_6226copy_600x.jpg?v=1692791991https://5.imimg.com/data5/SELLER/Default/2023/5/305004250/WT/MP/WB/7424477/ladies-night-gown-500x500.JPG", title: "KALKI Fashion", price: 2378 },
    { image: "https://5.imimg.com/data5/SELLER/Default/2024/3/397968526/DN/ZQ/LK/23397429/ladies-dress-500x500.jpeg", title: "AKS Couture", price: 2378 },

    { image: "https://5.imimg.com/data5/SELLER/Default/2020/10/SO/PK/KA/9664580/ladies-designer-dress.jpg", title: "Inddus", price: 2378 },
    { image: "https://www.seasonbazaar.com/wp-content/uploads/2018/01/1023.jpg", title: "Vishudh", price: 2378 },
    { image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwee249761/images/ss23/csld1971ss23org_1.jpg?sw=242&sh=363", title: "KALKI Fashion", price: 2378 },
    { image: "https://i.etsystatic.com/10020309/r/il/2fe439/2772346884/il_570xN.2772346884_7t8s.jpg", title: "AKS Couture", price: 2378 },


    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9aaiBCvy5VnDr2B3CZnXZU3js7qsX96swg&s", title: "Inddus", price: 2378 },
    { image: "https://cdn.pixabay.com/photo/2021/03/15/17/40/ladies-dress-wear-6097570_960_720.jpg", title: "Vishudh", price: 2378 },
    { image: "https://5.imimg.com/data5/ANDROID/Default/2021/1/HQ/UE/WF/29603120/product-jpeg-500x500.jpg", title: "KALKI Fashion", price: 2378 },
    { image: "https://www.nameerabyfarooq.com/cdn/shop/products/Ladies_dress_for_summer_620x.jpg?v=1564069316", title: "AKS Couture", price: 2378 },



  ];

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: 'bold', fontSize: '40px', color: 'brown' }}>
            AMAZONIES
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: '30%' }}>
            <Nav className="me-auto">
              <Nav.Link href="home"><Button variant="outline-primary" style={{ padding: '10px', width: '100px' }}>Home</Button></Nav.Link>
              <Nav.Link href="about"><Button variant="outline-primary" style={{ padding: '10px', width: '100px' }}>About</Button></Nav.Link>
              <Nav.Link href="contact"><Button variant="outline-primary" style={{ padding: '10px', width: '100px' }}>Contact</Button></Nav.Link>
              <Nav.Link href="order">
                <button style={{ backgroundColor: 'green', padding: '10px', borderRadius: '10px', width: '200px', fontWeight: 'bold', color: 'white' }}>
                  Waiting For Your Order
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div style={{ paddingLeft: '100px', paddingRight: '100px', textAlign: 'center', color: 'black' }}>
        <h2 style={{ textDecoration: 'underline', fontWeight: 'bold' }}>WOMEN'S         <span style={{ color: 'brown' }}>Dresses</span></h2>
        <p style={{ textAlign: 'center' }}>Sway your way through life with AJIO’s collection of fabulous dresses. Be it for your everyday wear, your clubbing nights or for your corporate chic looks, AJIO has just the right selection of dresses for women to make the right statement. Browse through and get bewitched!  <br />

          Brands On AJIO
          We have tons of other stylish dresses online for you to check out, from some of the best brands in women’s fashion. Go on and shop online for women, browse through brands like Only, Rio, Closet London, Ginger, TALLY WEiJL and more!</p>
      </div>


      {/* Product Cards */}
      <Container className="mt-4">
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-between" >
              <ProductCard image={product.image} title={product.title} price={product.price} />
            </div>
          ))}
        </div>
      </Container>

      <p style={{ textAlign: 'center', paddingLeft: '50px', paddingRight: '50px', color: 'black' }}>
        <span style={{ fontWeight: 'bold' }}> Casual Dresses :- </span>
        Get your casual looks right with stylish dresses from AJIO. Whether it is a cute shift dress you are looking for or a relaxed beach dress, we have them all here for you.Play with your style with cool cold-shoulder dresses and belted denim dresses. You could also choose to go the boho-chic way in printed summer dresses or chic maxi dresses. <br />

        <span style={{ fontWeight: 'bold' }}> Party Dresses :- </span>
        Turn heads with your on-point style with AJIO’s selection of party dresses. Be it flattering bodycon dresses, shimmery shift dresses or classic LBDs, we have everything here. There are short dresses to flaunt those long legs of yours and maxi dresses with side slits to keep them guessing. <br />

        <span style={{ fontWeight: 'bold' }}> Formal Dresses :- </span>
        Slay with your style in your office looks with formal dresses for women. Keep it sleek in solid shift dresses, bring in the big guns with cool A-line dresses or go the playful way with skater dresses. Keep it classic in black dresses or go bold with a red dress. We have them all. <br />
      </p>


      <div style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', paddingTop: '50px' }}>

        <h3 style={{ fontWeight: 'bold' }}>AMAZONIES</h3><br />

        <div style={{ paddingLeft: '200px', paddingRight: '200px' }}>

          <input style={{}} type="text" placeholder=' enter yor email' />
          <button style={{ width: '30px', height: '30px', backgroundColor: 'darkviolet' }}><i style={{ color: 'white' }} class="fa-solid fa-arrow-right"></i></button><br /><br />
          <div className='icons' style={{ display: 'flex', justifyContent: 'space-between',paddingLeft:'300px', paddingRight:'300px' }}>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-headphones"></i>
            <i class="fa-solid fa-phone"></i>
          </div>
        </div>


        <p className='text-center mt-5 text-white'>Copyright © Dec 2024 , AMAZONIES , Built with react</p>

        <br />
      </div>









    </>
  );
}

export default Home;
