import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(parseInt(config.port as string), () => {
      console.log(`BookBazaar Server Running...`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
