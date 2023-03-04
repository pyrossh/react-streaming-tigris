import { Tigris } from "@tigrisdata/core";

const tigrisClient = new Tigris();
const tigrisDB = tigrisClient.getDatabase();

export default tigrisDB;
