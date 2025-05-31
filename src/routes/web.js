
import { initAllRequestRoutes } from "./addDrRoutes.js";
import { initBookingRoutes } from "./bookingRoutes.js";
import { initProfileRoutes } from "./profileRoutes.js";
import { initAllVerifyRoutes } from "./verifyRoutes.js";
import { iniAllHomepageRoutes } from "./homeRoutes.js";


const initAllWebRoutes = (app) => {

    initAllRequestRoutes(app);
    initBookingRoutes(app);
    initProfileRoutes(app);
    initAllVerifyRoutes(app);
    iniAllHomepageRoutes(app);

};

export { initAllWebRoutes }

