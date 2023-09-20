import express from "express"
import { graphqlHTTP } from "express-graphql";

import schema from "./graphql";

class App {
    public app: express.Application;
    public port: number;

    constructor(middlewares: any[], port: number) {
        this.app = express();
        this.port = port;
        
        this.app.use(middlewares);
        this.app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;