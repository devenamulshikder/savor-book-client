import Banner from "../../components/bannerSec/Banner";
import ClientReviews from "../../components/clientReviews/ClientReviews";
import ContactUs from "../../components/contactUs/ContactUs";
import FAQ from "../../components/faq/FAQ";
import TopRecipes from "../../components/topRecipes/TopRecipes";

const Home = () => {
  return <div>
    <title>Savor Book | Home</title>
    <Banner/>
    <TopRecipes/>
    <ClientReviews/>
    <FAQ/>
    <ContactUs/>
  </div>;
};

export default Home;
