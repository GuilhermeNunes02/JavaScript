// ===============================
// Temporizador de Contagem Regressiva no Console
// ===============================

// Data futura (Meu casamento: 26 de junho de 2026 às 19:00)
const dataFutura = new Date("2026-06-26T19:00:00");

// 1. Função para calcular o tempo restante
function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const diferenca = dataFutura - agora; // diferença em milissegundos

    if (diferenca <= 0) {
        return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
}

// 2. Função para atualizar o temporizador no console
function atualizarTemporizador() {
    const tempo = calcularTempoRestante(dataFutura);

    process.stdout.write(`\r⏳ Restante: ${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s   `);

    // Se chegar a zero, parar o contador
    if (
        tempo.dias === 0 &&
        tempo.horas === 0 &&
        tempo.minutos === 0 &&
        tempo.segundos === 0
    ) {
        clearInterval(intervalo);
        console.log("\n🎉 O tempo chegou!");
        process.exit();
    }
}

// 3. Atualiza o temporizador a cada segundo
const intervalo = setInterval(atualizarTemporizador, 1000);

// Atualiza imediatamente ao iniciar
atualizarTemporizador();
