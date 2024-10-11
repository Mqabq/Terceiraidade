document.addEventListener('DOMContentLoaded', () => {
    const agendarForm = document.getElementById('agendar-viagem');
    const perfilForm = document.getElementById('perfil-usuario');
    const notificacoesDiv = document.getElementById('lista-notificacoes');

    agendarForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const destino = e.target.destino.value;
        const data = e.target.data.value;
        const hora = e.target.hora.value;

        const notificacao = document.createElement('div');
        notificacao.innerText = `Viagem agendada para ${destino} em ${data} às ${hora}.`;
        notificacoesDiv.appendChild(notificacao);
    });

    perfilForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = e.target.nome.value;
        const endereco = e.target.endereco.value;
        const contato = e.target.contato.value;

        alert('Perfil salvo com sucesso!');
    });
});

function abrirChat() {
    alert('Iniciando chat de suporte...');
}
