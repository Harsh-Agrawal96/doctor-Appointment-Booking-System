
import cors from "cors";


function corsConfigure (app) {

    const corsConfig = {
        origin : "*",
        credential: true,
        methods : ["GET", "POST", "PUT", "DELETE"],
    };

    app.use(cors(corsConfig));
    app.options("", cors(corsConfig));

};

export default corsConfigure