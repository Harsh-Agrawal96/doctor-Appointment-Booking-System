
import { initAllRequestRoutes } from "./addDrRoutes.js";
import { initBookingRoutes } from "./bookingRoutes.js";
import { initProfileRoutes } from "./profileRoutes.js";
import { initAllVerifyRoutes } from "./verifyRoutes.js";
import { iniAllHomepageRoutes } from "./homeRoutes.js";
import { unformalRoutes } from "./unformaladdroute.js";



const initAllWebRoutes = (app) => {

    initAllRequestRoutes(app);
    initBookingRoutes(app);
    initProfileRoutes(app);
    initAllVerifyRoutes(app);
    iniAllHomepageRoutes(app);
    unformalRoutes(app);

};

export { initAllWebRoutes }

