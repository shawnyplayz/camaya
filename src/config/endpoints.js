// baseURLLive and baseURLDev are defined for live and development
const baseURLLive = `https://api.innovativecursor.com`;
const baseURLDev = `https://api.innovativecursor.com`;

const isLive = false;

//isLive is a boolean const that determines the enviroment, if isLive is true the app uses the live api otherwise it uses dev api
const baseUrl = isLive ? baseURLLive : baseURLDev;

const endpoints = {
  fetchTestimonials: `${baseUrl}/fetchTestimonials`,
};

export default endpoints;
