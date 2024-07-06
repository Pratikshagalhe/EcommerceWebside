import React from 'react'

const About = () => {
  return (
    <>
      <div className='border border-3 p-5 m-3 ronted-3'>
        <h1 style={{ textAlign: "center", color: "orange", fontSize: 40, marginTop: 22 }}>About Us</h1>
        <div className='row '>
          <div className="col-md-7 m-3 ">
            <p className='' style={{ fontSize: 17, paddingLeft: 6 }}>
              Welcome to Brand Factory, your ultimate destination for all things fashion and lifestyle! At Brand Factory, we believe that style and quality should go hand in hand, and that everyone deserves to look and feel their best without breaking the bank. That’s why we’ve made it our mission to bring you the latest trends and the highest quality products at unbeatable prices.
            </p>
            <h4 className='m-3'>Who We Are</h4>
            <p>Brand Factory was founded with a vision to revolutionize the online shopping landscape. We are passionate about bringing you the best products from renowned brands, all in one place. Our team is dedicated to curating a diverse range of items that cater to your every need, whether you're looking for the latest fashion trends, cutting-edge electronics, or essential home goods.</p>
            <h4 className='m-3'>Our Commitment</h4>
            <ul>
              <li className='fw-bold'>Quality:</li><p>We handpick our products to ensure they meet the highest standards. Our commitment to quality means you can shop with confidence, knowing you're getting the best.</p>
              <li className='fw-bold'>Value:</li><p>We strive to offer competitive prices on all our products. Our goal is to make high-quality items accessible to everyone, without breaking the bank.</p>
              <li className='fw-bold'>Customer Satisfaction: </li><p>Your satisfaction is our top priority. Our customer support team is here to assist you every step of the way, from browsing to purchase to post-sale support.</p>
            </ul>
          </div>
          <div className="col-md-4 m-3">
            <img src="/asset/img2.jpg" alt="" height="500" width="500" style={{ borderRadius: "bold 1 black", }} />
          </div>
        </div>
        <div>
        </div>
      </div>
        
    </>
  )
}

export default About
