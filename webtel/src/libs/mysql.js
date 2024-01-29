import mysql from "serverless-mysql";

const connection = mysql({
    config: {
        host: "localhost",
        user: "root",
        password: "admin",
        database: "bd",
        timezone: "+0000"
    }
});

export default connection;