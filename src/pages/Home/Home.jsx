import Banner from "../../components/bannerSec/Banner";
import ClientReviews from "../../components/clientReviews/ClientReviews";
import ContactUs from "../../components/contactUs/ContactUs";
import TopRecipes from "../../components/topRecipes/TopRecipes";

const Home = () => {
  return <div>
    <title>Savor Book | Home</title>
    <Banner/>
    <TopRecipes/>
    <ClientReviews/>
    <ContactUs/>
  </div>;
};

export default Home;
