import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { TransacoesService } from './transacoes.service';
export declare class TransacoesController {
    private readonly transacoesService;
    constructor(transacoesService: TransacoesService);
    criar(dto: CreateTransacaoDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/transacao.schema").Transacao, {}, {}> & import("./schemas/transacao.schema").Transacao & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/transacao.schema").Transacao, {}, {}> & import("./schemas/transacao.schema").Transacao & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    listar(): Promise<{
        historico: (import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, import("./schemas/transacao.schema").Transacao, {}, {}> & import("./schemas/transacao.schema").Transacao & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
        metricas: import("./transacoes.service").Metricas;
    }>;
}
