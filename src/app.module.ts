import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransacoesModule } from './transacoes/transacoes.module';

// Defina MONGODB_URI com a string de conexão do MongoDB Atlas, por exemplo:
// mongodb+srv://usuario:senha@cluster.mongodb.net/controle-financeiro
@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI ?? 'mongodb://localhost:27017/controle-financeiro',
    ),
    TransacoesModule,
  ],
})
export class AppModule {}
