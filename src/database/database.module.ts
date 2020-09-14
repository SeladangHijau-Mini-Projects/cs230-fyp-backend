import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


const mongooseModule = MongooseModule.forRootAsync({
  useFactory: async () => {
      const { MONGODB_ENDPOINT, NODE_ENV } = process.env;

      if (!MONGODB_ENDPOINT) throw new Error('Missing env: MONGODB_ENDPOINT');

      const connConfig = {
          uri: MONGODB_ENDPOINT,
          useFindAndModify: false,
          useCreateIndex: true,
          useNewUrlParser: true,
      };

      if (NODE_ENV && NODE_ENV.toLowerCase() === 'production') {
          const { USE_TLS, CA_FILE, CERT_FILE } = process.env;

          if (!USE_TLS) throw new Error('Missing env: USE_TLS');

          if (!CA_FILE) throw new Error('Missing env: CA_FILE');

          if (!CERT_FILE) throw new Error('Missing env: CERT_FILE');

          Object.assign(connConfig, {
              tls: process.env.USE_TLS,
              tlsCAFile: process.env.CA_FILE,
              tlsCertificateKeyFile: process.env.CERT_FILE,
          });
      }

      return connConfig;
  },
});

@Module({
  imports: [mongooseModule]
})
export class DatabaseModule {}
