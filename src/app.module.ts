import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from "@nestjs/serve-static";//Lo importamos, junto con otro que necesitamos para indicar dónde estarán nuestros archivos 

import { join } from 'path';

@Module({
  imports: [ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
//Aqui configuramos la ruta y forma de acceso a la carpeta ‘client’ que es donde estarán nuestros archivos estáticos

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
