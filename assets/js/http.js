function teste(){
      document.getElementById('formulario').addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário
      
            var nome = document.getElementById('nome').value;
            var idade = document.getElementById('idade').value;
      
            console.log('Nome:', nome);
            console.log('Idade:', idade);

            var dados = {
                  nome: nome,
                  idade: idade
            };

            fetch('https://localhost:3000/getform', { // Substitua pela URL do seu endpoint
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(dados)
            })
            .then(response => response.json())
            .then(data => {
                  console.log('Sucesso:', data);
            })
            .catch((error) => {
                  console.error('Erro:', error);
            });
      })
}