# Prova de Prática Profissional I

Aqui está o trabalho final de Prática Profissional I cursado no IFRS em 2020/2. Trata-se de uma API de Cardápio desenvolvida em Node + Express + Mongo.

## Rotas

| Recurso                   | URI                                                                      | Método | Código Esperado | Retorno Esperado                                                    |
|---------------------------|--------------------------------------------------------------------------|--------|-----------------|---------------------------------------------------------------------|
| /cardapio                 | http://localhost:3005/api/cardapio/                                      | GET    | 200 Ok          | Listagem de todos os items do recurso                               |
| /cardapio                 | http://localhost:3005/api/cardapio/                                      | POST   | 201 Created     | A informação criada                                                 |
| /cardapio/<id>            | http://localhost:3005/api/cardapio/5fc0298a8dee089234920802              | PUT    | 200 Ok          | A informação atualizada                                             |
| /cardapio/<br><id>        | http://localhost:3005/api/cardapio/5fc029c88dee08923492081c              | DELETE | 204 No Content  | Nada                                                                |
| /cardapio/<br><id>        | http://localhost:3005/api/cardapio/5fc029c88dee08923492081c              | GET    | 200 Ok          | A informação do recurso buscado                                     |
| /cardapio/procurar/<data> | http://localhost:3005/api/cardapio/procurar/2020-02-12T00%3A00%3A00.000Z | GET    | 200 Ok          | Todas as informações referente ao cardápio da semana do dia passado |

## Exemplos de Requisição

### Criar Almoço

#### Criar Almoço por Dia

```json
{
	"startDate": "2020-02-15",
	"week": [
		{
			"name": "Quarta-feira",
			"mealType": "Jantar",
			"foods": [
				{ "name": "Arroz" } ,
				{ "name": "Feijão" },
				{ "name": "Strogonoff" }
			]
		}
	]
}
```

#### Criar Almoço por Refeição

```json
{
	"startDate": "2020-02-12",
	"week": [
		{
			"name": "Segunda-feira",
			"mealType": "Almoço",
			"foods": [
				{ "name": "Arroz" } ,
				{ "name": "Feijão" },
				{ "name": "Frango" }
			]
		},
		{
			"name": "Terça-feira",
			"mealType": "Almoço",
			"foods": [
				{ "name": "Arroz" } ,
				{ "name": "Lentilha" },
				{ "name": "Salada" }
			]
		},
		{
			"name": "Quarta-feira",
			"mealType": "Almoço",
			"foods": [
				{ "name": "Batata-frita" } ,
				{ "name": "Arroz" },
				{ "name": "Strogonoff" }
			]
		},
		{
			"name": "Quinta-feira",
			"mealType": "Almoço",
			"foods": [
				{ "name": "Pure de Batata" } ,
				{ "name": "Salada" },
				{ "name": "Peixe" }
			]
		},
		{
			"name": "Sexta-feira",
			"mealType": "Almoço",
			"foods": [
				{ "name": "Lasanha de Frango" } ,
				{ "name": "Arroz" },
				{ "name": "Batata-frita" }
			]
		}
	]
}
```

#### Criar todas refeições de uma vez

```json
{
	"startDate": "2020-02-12",
	"week": [
		{
			"name": "Segunda-feira",
			"mealType": "Almoço",
			"foods": [
				{ "name": "Arroz" } ,
				{ "name": "Feijão" },
				{ "name": "Frango" }
			]
		},
		{
			"name": "Terça-feira",
			"mealType": "Almoço",
			"foods": [
				{ "name": "Arroz" } ,
				{ "name": "Lentilha" },
				{ "name": "Salada" }
			]
		},
		{
			"name": "Quarta-feira",
			"mealType": "Almoço",
			"foods": [
				{ "name": "Batata-frita" } ,
				{ "name": "Arroz" },
				{ "name": "Strogonoff" }
			]
		},
		{
			"name": "Quinta-feira",
			"mealType": "Almoço",
			"foods": [
				{ "name": "Pure de Batata" } ,
				{ "name": "Salada" },
				{ "name": "Peixe" }
			]
		},
		{
			"name": "Sexta-feira",
			"mealType": "Almoço",
			"foods": [
				{ "name": "Lasanha de Frango" } ,
				{ "name": "Arroz" },
				{ "name": "Batata-frita" }
			]
		},
		{
			"name": "Segunda-feira",
			"mealType": "Jantar",
			"foods": [
				{ "name": "Arroz" } ,
				{ "name": "Feijão" },
				{ "name": "Frango" }
			]
		},
		{
			"name": "Terça-feira",
			"mealType": "Jantar",
			"foods": [
				{ "name": "Arroz" } ,
				{ "name": "Lentilha" },
				{ "name": "Salada" }
			]
		},
		{
			"name": "Quarta-feira",
			"mealType": "Jantar",
			"foods": [
				{ "name": "Batata-frita" } ,
				{ "name": "Arroz" },
				{ "name": "Strogonoff" }
			]
		},
		{
			"name": "Quinta-feira",
			"mealType": "Jantar",
			"foods": [
				{ "name": "Pure de Batata" } ,
				{ "name": "Salada" },
				{ "name": "Peixe" }
			]
		},
		{
			"name": "Sexta-feira",
			"mealType": "Jantar",
			"foods": [
				{ "name": "Lasanha de Frango" } ,
				{ "name": "Arroz" },
				{ "name": "Batata-frita" }
			]
		}
	]
}
```