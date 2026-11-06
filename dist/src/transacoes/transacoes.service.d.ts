import { Model } from 'mongoose';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { Transacao, TransacaoDocument } from './schemas/transacao.schema';
export interface Metricas {
    saldoTotal: number;
    totalDespesas: number;
    totalGastoImpulso: number;
}
export declare class TransacoesService {
    private readonly transacaoModel;
    constructor(transacaoModel: Model<TransacaoDocument>);
    criar(dto: CreateTransacaoDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Transacao, {}, {}> & Transacao & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Transacao, {}, {}> & Transacao & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    listar(): Promise<{
        historico: (import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, Transacao, {}, {}> & Transacao & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
        metricas: Metricas;
    }>;
    calcularMetricas(transacoes: Pick<Transacao, 'tipo' | 'valor' | 'consumoConsciente'>[]): Metricas;
}
