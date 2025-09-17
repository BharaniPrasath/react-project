import Category from "./category";
import Offer from "./offers";
import Footer from "./footer";

import '../../styles/home/home.css'
import MyNavbar from "./navbar";
function Home(){
    return(
        <>
        <MyNavbar />
        <Category />
        <Offer />
        <Footer />
        
        </>
    )
}

export default Home