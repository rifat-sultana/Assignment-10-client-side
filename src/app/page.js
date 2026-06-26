import HeroBanner from "../components/HeroBanner";
import FeaturedBooks from "../components/FeaturedBooks";
import PopularCategories from "../components/PopularCategories";
import FeaturedLibrarians from "../components/FeaturedLibrarians";
import ReaderTestimonials from "../components/ReaderTestimonials";

export default function Home() {
  return (
    <>
      <HeroBanner />

      <FeaturedBooks/>

    <PopularCategories />

    <FeaturedLibrarians />

    <ReaderTestimonials />
 

   

     
    </>
  );
}