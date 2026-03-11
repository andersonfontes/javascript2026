function calcularDias() {
            const dataAniversario = document.getElementById('dataAniversario').value;
            const resultado = document.getElementById('resultado');
            const caixa = document.getElementById('caixa')

            if (!dataAniversario || !dataAniversario.includes('/') ) { //checa se o campo esta vazio
                resultado.textContent = 'Por favor, insira uma data válida.';
                caixa.style.backgroundColor = '#FF7777'

                return;
            }

            const hoje = new Date();
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

            resultado.textContent = `Faltam ${diasRestantes} dias para o seu próximo aniversário!`;
        }