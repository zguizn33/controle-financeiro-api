"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransacoesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const transacao_schema_1 = require("./schemas/transacao.schema");
let TransacoesService = class TransacoesService {
    constructor(transacaoModel) {
        this.transacaoModel = transacaoModel;
    }
    async criar(dto) {
        return new this.transacaoModel(dto).save();
    }
    async listar() {
        const historico = await this.transacaoModel.find().lean().exec();
        return { historico, metricas: this.calcularMetricas(historico) };
    }
    calcularMetricas(transacoes) {
        let totalReceitas = 0;
        let totalDespesas = 0;
        let totalGastoImpulso = 0;
        for (const t of transacoes) {
            if (t.tipo === 'receita') {
                totalReceitas += t.valor;
            }
            else if (t.tipo === 'despesa') {
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
};
exports.TransacoesService = TransacoesService;
exports.TransacoesService = TransacoesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(transacao_schema_1.Transacao.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TransacoesService);
//# sourceMappingURL=transacoes.service.js.map