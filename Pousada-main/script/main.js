document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const dataEntrada = document.getElementById("data-entrada");
    const dataSaida = document.getElementById("data-saida");
    const pessoas = document.getElementById("pessoas");
    const reservarBtn = document.querySelector("button[type='submit']");

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validarTelefone(telefone) {
        const re = /^\(\d{2}\)\s9\d{4}-\d{4}$/;
        return re.test(telefone);
    }

    function validarFormulario(event) {
        event.preventDefault();
        
        if (nome.value.trim() === "") {
            alert("O campo Nome Completo é obrigatório.");
            return;
        }
        
        if (!validarEmail(email.value)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        if (!validarTelefone(telefone.value)) {
            alert("Por favor, insira um número de telefone válido no formato (XX) 9 XXXX-XXXX.");
            return;
        }

        if (dataEntrada.value === "" || dataSaida.value === "") {
            alert("As datas de entrada e saída são obrigatórias.");
            return;
        }
        
        if (new Date(dataSaida.value) <= new Date(dataEntrada.value)) {
            alert("A data de saída deve ser posterior à data de entrada.");
            return;
        }
        
        if (pessoas.value === "0") {
            alert("A quantidade de pessoas deve ser pelo menos 1.");
            return;
        }
        
        alert("Formulário enviado com sucesso!");
        form.submit();
    }

    reservarBtn.addEventListener("click", validarFormulario);
});



