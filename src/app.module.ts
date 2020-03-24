import {Module} from '@nestjs/common';
import {WeewxModule} from './weewx/weewx.module';

@Module({
    imports: [WeewxModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
