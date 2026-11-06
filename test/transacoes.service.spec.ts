import { TransacoesService } from '../src/transacoes/transacoes.service';

describe('TransacoesService - métricas', () => {
  const service = new TransacoesService(null as any);

  it('calcula saldo, total de despesas e gasto por impulso', () => {
    const metricas = service.calcularMetricas([
      { tipo: 'receita', valor: 3000, consumoConsciente: true },
      { tipo: 'despesa', valor: 1000, consumoConsciente: true },
      { tipo: 'despesa', valor: 200, consumoConsciente: false },
      { tipo: 'despesa', valor: 50, consumoConsciente: false },
    ]);

    expect(metricas).toEqual({
      saldoTotal: 1750,
      totalDespesas: 1250,
      totalGastoImpulso: 250,
    });
  });

  it('retorna zeros quando não há transações', () => {
    expect(service.calcularMetricas([])).toEqual({
      saldoTotal: 0,
      totalDespesas: 0,
      totalGastoImpulso: 0,
    });
  });
});
