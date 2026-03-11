const readline = require('readline');

function calcularDiasParaAniversario(dataAniversario) {
    const hoje = new Date();
    
    // Divide a data de aniversário em dia e mês
    const [diaAniversario, mesAniversario] = dataAniversario.split('/');
    
    // Cria uma data para o próximo aniversário
    let proximoAniversario = new Date(hoje.getFullYear(), mesAniversario - 1, diaAniversario);
    
    // Se o aniversário já passou neste ano, define o próximo aniversário para o ano seguinte
    if (hoje > proximoAniversario) {
        proximoAniversario.setFullYear(hoje.getFullYear() + 1);
    }
    
    // Calcula a diferença em milissegundos e converte para dias
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
    const diasRestantes = Math.ceil((proximoAniversario - hoje) / umDiaEmMilissegundos);
    
    return diasRestantes;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a data do seu aniversário (formato: DD/MM): ', (dataAniversario) => {
    const diasRestantes = calcularDiasParaAniversario(dataAniversario);
    console.log(`Faltam ${diasRestantes} dias para o seu próximo aniversário!`);
    rl.close();
});