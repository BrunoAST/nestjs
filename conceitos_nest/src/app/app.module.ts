import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from 'src/recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // Nome do serviço do banco de dados no docker-compose.yml
      port: 5432,
      username: 'postgres',
      database: 'conceitos_nest',
      password: 'postgres',
      autoLoadEntities: true, // Carrega entidades sem precisar especifica-las
      synchronize: false, // Sincroniza com o BD. Não deve ser usado em produção
    }),
    RecadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
