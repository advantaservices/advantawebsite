import { HomeHero } from "@/components/Home/HomeHero";
// import { HomeTradeSplit } from "@/components/Home/HomeTradeSplit";
import { HomeServices } from "@/components/Home/HomeServices";
import { HomeWhyUs } from "@/components/Home/HomeWhyUs";
import { HomeLocations } from "@/components/Home/HomeLocations";
import { HomeRecommendations } from "@/components/Home/HomeRecommendations";
import { HomeEnquiryForm } from "@/components/Home/HomeEnquiryForm";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Electrical & Air Conditioning in Spalding | Advanta",
  description:
    "Advanta Services: electrical and air conditioning around Spalding and Peterborough. Rewires, EICRs, lighting, EV charging and air-con.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HomeHero />
      {/* <HomeTradeSplit /> */}
      <HomeServices />
      <HomeWhyUs />
      <HomeLocations
        variant="electrics"
        sectionId="areas"
        detailBasePath="/areas"
        viewAllHref="/areas"
        viewAllLabel="View all areas"
        heading={{
          kicker: "Coverage",
          title: "Based around Spalding and Peterborough",
          lead: "Wisbech, Boston and Stamford sit with Spalding and Peterborough. We cover Lincolnshire, Cambridgeshire, Norfolk, Suffolk, Essex, Hertfordshire, Northamptonshire and Rutland. Call us with the town and the job.",
        }}
      />
      <HomeRecommendations />
      <HomeEnquiryForm />
    </>
  );
}
