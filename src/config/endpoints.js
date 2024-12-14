// baseURLLive and baseURLDev are defined for live and development
const baseURLLive = `https://api.camayacoastprestige.com`;
const baseURLDev = `http://localhost:8081`;

const isLive = true;

//isLive is a boolean const that determines the enviroment, if isLive is true the app uses the live api otherwise it uses dev api
const baseUrl = isLive ? baseURLLive : baseURLDev;

const endpoints = {
  fetchTestimonials: `${baseUrl}/fetchTestimonials`,
  properties: `${baseUrl}/properties`,
  propertyOptions: `${baseUrl}/propertyOptions`,
  locationOptions: `${baseUrl}/locationOptions`,
  pricingOptions: `${baseUrl}/pricingOptions`,
  sendInquiry: `${baseUrl}/sendInquiry`,
  fetchAmenities: `${baseUrl}/fetchAmenities`,
  fetchHero: `${baseUrl}/fetchHero`,
};

export default endpoints;
