import mongoose from 'mongoose'

let connected = false

const connectDB = async () => {
	mongoose.set('strictQuery', true)
  // mongoose.set('bufferTimeoutMS', 30000)

	// If the database is already connected, don't connect again
	if (connected) {
		console.log('MongoDB is connected')
		return
	}

	// Connect to MongoDB
	try {
		await mongoose.connect(process.env.MONGODB_URI)
		connected = true
		console.log('MongoDB connected ...')
	} catch (error) {
		console.log(error)
	}
}

export default connectDB