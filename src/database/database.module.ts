import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const mongooseModule = MongooseModule.forRootAsync({
    useFactory: async () => {
        const { MONGODB_ENDPOINT } = process.env;

        if (!MONGODB_ENDPOINT) throw new Error('Missing env: MONGODB_ENDPOINT');

        const connConfig = {
            uri: MONGODB_ENDPOINT,
            useFindAndModify: false,
            useCreateIndex: true,
            useNewUrlParser: true,
        };

        return connConfig;
    },
});

@Module({
    imports: [mongooseModule],
})
export class DatabaseModule {}
