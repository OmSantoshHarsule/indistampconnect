import './styles.css';
import React from 'react'

function Home() {
  return (
    <>
    <div className="logo">
        <img src="./images/logo.jpg" alt="" height="100px" width="150px"/>
    </div>
    <div className="container">
        <div className="searchbar">
            <div className="search">
                <img  src="./images/searchbar icon.png" alt=""/>
            </div>
            <div className="S">Search for stamps...</div>
            <div className="camera">
                <img src="./images/camera icon.png" alt=""/>
            </div>
        </div>     
    </div>
    <div className="login">Profile</div>
    <div className="s"><img src="./images/user(2).png" alt=""/></div>
    <div className="wishlist">Wishlist</div>
        <div className="w"><img src="./images/favorite(1).png" alt=""/></div>
    <div className="Bag">Bag</div>
        <div className="b"><img src="./images/shopping-bag.png" alt=""/></div>
        
    <div className="navbar">
        <ul className="links">   
            {/* <a>Cancellation and regulation </a>
            <a>Community </a>
            <a>Listing of Stamps </a>
            <a>Postal Circles </a>
            <a>Marketplace </a> 
            <a>NPDA </a>   */}
            <a href="/">NPDA</a> 
            <a href="/">Marketplace</a>
            <a href="/">Postal Circles</a>
            <a href="/">Listing of Stamps</a>
            <a href="/">Community</a>
            <a href="/">Cancellation and regulation</a>
        </ul>
    </div>
    <div className="background">
        <img src="./images/stamp1.jpg" alt="" height="500px" width="1710px"/>
    </div>

    <div className="stamp1">
        <img src="./images/stamp1.png" alt="" height="350px" width="330px"/>
    </div>
    <div className="stamp2">
        <img src="./images/stamp4.png" alt="" height="350px" width="330px"/>
    </div>  

    <div className="stamp3"><img src="./images/stamp3.png" alt="" height="350px" width="330px"/></div>
    <div className="heading">Most Popular</div>
    <div className="heading2">Stamps</div>
    <div className="space"></div>
    
    
    
    </>
  )
}

export default Home