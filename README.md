# nlw3
Happy, aplicação realixada durante o evento Next Level Week #3 da rocketseat.com
Usando node js, react e reactnative.



usando o typeorm  que falcilita a criacao do banco dedados e torna facil e compativel com outros tipos.

para criar uma tabela usamos as migration 
yarn typeorm migrations:create -n nome da migration 

nesse arquivo criado escolhemos o nome da tabela e os campo que estarao nela

pra subir a migration 
yarn typeorm migration:run

se precisar alterar algo no banco de dados devemos desfaxer a migration com o seyarn typeorm migration:revert

