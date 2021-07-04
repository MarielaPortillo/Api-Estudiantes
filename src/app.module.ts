import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EstudiantesService } from './estudiantes/estudiantes.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EstudiantesModule,MongooseModule.forRoot('mongodb+srv://admin:HolaMundo123456@cluster0.ml90l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
