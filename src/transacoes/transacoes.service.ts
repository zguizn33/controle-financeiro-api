import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { Transacao, TransacaoDocument } from './schemas/transacao.schema';

export interface Metricas {
  saldoTotal: number;
  totalDespesas: number;
  totalGastoImpulso: number;
}

@Injectable()
export class TransacoesService {
  constructor(
    @InjectModel(Transacao.name)
    private readonly transacaoModel: Model<TransacaoDocument>,
  ) {}

  async criar(dto: CreateTransacaoDto) {
    return new this.transacaoModel(dto).save();
  }

  async listar() {
    const historico = await this.transacaoModel.find().lean().exec();
    return { historico, metricas: this.calcularMetricas(historico) };
  }

  calcularMetricas(
    transacoes: Pick<Transacao, 'tipo' | 'valor' | 'consumoConsciente'>[],
  ): Metricas {
    let totalReceitas = 0;
    let totalDespesas = 0;
    let totalGastoImpulso = 0;

    for (const t of transacoes) {
      if (t.tipo === 'receita') {
        totalReceitas += t.valor;
      } else if (t.tipo === 'despesa') {
        totalDespesas += t.valor;
        if (t.consumoConsciente === false) {
          totalGastoImpulso += t.valor;
        }
      }
    }

    return {
      saldoTotal: totalReceitas - totalDespesas,
      totalDespesas,
      totalGastoImpulso,
    };
  }
}
