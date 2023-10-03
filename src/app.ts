import express from "express"
import { startStandaloneServer } from '@apollo/server/standalone'

import schema from "./graphql";
import { ApolloServer } from "@apollo/server";
import authenticationMiddleware from "./middlewares/authentication";

class App {
    public app: express.Application;
    public port: number;

    constructor(middlewares: any[], port: number) {
        this.app = express();
        this.port = port;

        this.app.use(middlewares);
    }

    public async listen() {
        const server = new ApolloServer({
            schema, plugins: [{
                requestDidStart: authenticationMiddleware
            }]
        });
        const { url } = await startStandaloneServer(server, {
            listen: { port: this.port },
        });

        console.log(`🚀 Server listening at: ${url}`);
    }

}

export default App;