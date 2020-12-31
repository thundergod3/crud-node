import { connect } from "mongoose";

const connectMongoDB = async (): Promise<void> => {
	const dbURI: string = "mongodb+srv://congphan:test123@cluster0.vvygu.mongodb.net/crud-node";

	try {
		await connect(dbURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("connect successfully");
	} catch (error) {
		console.log("error", error);
	}
};

export default connectMongoDB;
