import { TipoTransacao } from '../schemas/transacao.schema';
export declare class CreateTransacaoDto {
    descricao: string;
    valor: number;
    tipo: TipoTransacao;
    categoria: string;
    consumoConsciente?: boolean;
}
