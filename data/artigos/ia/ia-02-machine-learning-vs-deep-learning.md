# IA: Machine Learning vs Deep Learning

---

## O que é IA?

Alan Turing, conhecido como pai da IA, criou um artigo chamado *Computing Machinery and Intelligence*, no qual focou no conceito de uma máquina inteligente e em como avaliá-la. Seu método: caso não fosse possível distinguir máquina e ser humano, ela era considerada inteligente. A partir daí, chegou-se às seguintes definições classificatórias:

- **IA forte** — Máquina que realmente entende o que está acontecendo. Também conhecida como AGI (*Artificial General Intelligence*). Muito presente em filmes (como o C3PO de Star Wars). Muito difícil de alcançar.
- **IA fraca** — Máquina que realiza correspondência entre padrões e foca em tarefas específicas. O que realmente é alcançável.

Posteriormente, McCulloch e Pitts escreveram que as principais funções do cérebro podiam ser explicadas por meio de lógica matemática, com operadores como E, Ou e Não. Com isso, seria possível criar uma rede complexa capaz de processar informações, aprender e pensar.

---

## Machine Learning

Os modelos de machine learning são algoritmos de computador que usam dados para fazer suposições fundamentadas ou tomar decisões. Eles diferem dos algoritmos tradicionais: enquanto um software tradicional precisa ser editado manualmente para ser melhorado, um algoritmo de machine learning utiliza dados para aprimorar uma tarefa específica por conta própria.

### O que são "Modelos" de machine learning?

O modelo é o componente principal do machine learning. Ele é treinado para fazer estimativas ou previsões de alta qualidade, e esse treinamento acontece a partir de dados e de duas partes do código: a **função de objetivo** e o **otimizador**.

- **Objetivo** — O que queremos que o modelo seja capaz de fazer. A função objetiva (ou função de custo) avalia se o modelo está fazendo um bom trabalho ou um trabalho ruim.
- **Dados** — As informações fornecidas ao modelo como entradas.
- **Otimizador** — Código que altera os parâmetros do modelo para que ele faça um trabalho melhor na próxima vez, com base no resultado avaliado pela função de objetivo.

### Tipos de aprendizado

**Aprendizado Supervisionado**

Usa dados rotulados para treinar algoritmos a classificar ou prever resultados. Seus principais tipos são:

- *Classificação* — divide os dados em categorias (ex: detectar spam)
- *Regressão* — prevê valores contínuos (ex: projeção de receita)

**Aprendizado Não Supervisionado**

Usa dados não rotulados para encontrar padrões ocultos. Seus principais tipos são:

- *Clustering* — agrupa dados similares (ex: segmentação de clientes)
- *Associação* — encontra correlações (ex: motores de recomendação)
- *Redução de dimensionalidade* — simplifica dados complexos (ex: reduzir ruídos de imagem)

**Aprendizado por Reforço**

O agente aprende por tentativa e erro, interagindo com um ambiente e buscando maximizar uma recompensa ao longo do tempo. Os principais conceitos são: agente, ambiente, ações, recompensa, política e o equilíbrio entre exploração (testar novas ações) e aproveitamento (repetir boas ações). Exemplos incluem jogos, robótica e sistemas de recomendação adaptativos.

---

## Deep Learning e Redes Neurais

> "Deep learning trata-se de um conjunto de técnicas de Machine Learning que utilizam redes neurais artificiais profundas, com muitas camadas intermediárias entre a camada de entrada e a de saída."

O Deep Learning usa algoritmos organizados em vários níveis chamados de **camadas**, permitindo aprender representações dos dados de forma progressiva e hierárquica. Cada camada aprende características em um nível de complexidade maior que a anterior: as camadas inferiores captam padrões simples (bordas em imagens, sons básicos), enquanto as camadas superiores combinam esses padrões para formar conceitos mais complexos (rostos, palavras).

**Exemplo — modelo treinado para reconhecer gatos:**
1. Camadas inferiores identificam formas básicas: linhas, bordas e cores.
2. Camadas intermediárias detectam partes do corpo: orelhas, olhos e nariz.
3. Camadas superiores juntam essas informações para formar o conceito completo de um gato.

As técnicas de Deep Learning são divididas em três grandes categorias:

- **Redes profundas não supervisionadas** — usadas quando não há rótulos previamente definidos. Tentam identificar padrões e estruturas ocultas por meio da análise de correlações de alta ordem entre os dados.
- **Redes profundas supervisionadas** — usadas quando os dados vêm acompanhados de rótulos ou respostas esperadas. Chamadas de *discriminativas*, pois focam em distinguir corretamente os padrões.
- **Redes profundas híbridas** — combinam características dos dois tipos, beneficiando-se da capacidade generativa das redes não supervisionadas para melhorar a performance das supervisionadas.

### Redes Neurais

Uma rede neural é um modelo computacional inspirado no funcionamento do cérebro humano, composto por unidades de processamento simples chamadas "neurônios" que se conectam entre si em camadas. Elas são comumente utilizadas na resolução de problemas complexos onde o comportamento das variáveis não é rigorosamente conhecido, com capacidade de aprender por meio de exemplos e generalizar a informação aprendida.

Ao implementar uma Rede Neural Artificial, é necessário definir:

1. **Número de nós na camada de entrada** — corresponde à quantidade de variáveis usadas como entrada para a rede.
2. **Número de camadas escondidas e neurônios** — essas camadas processam as informações, aprendendo padrões e relações complexas. A escolha é baseada em experimentação.
3. **Número de neurônios na camada de saída** — depende do tipo de problema. Em classificação binária, normalmente há apenas um neurônio na saída.

Existem três classes principais de arquiteturas:

- *Single-layer feedforward networks* — simples, com capacidade limitada de aprendizado.
- *Multilayer feedforward networks* — permitem aprender padrões mais complexos; o tipo mais usado atualmente.
- *Recurrent networks* — possuem conexões que formam ciclos, sendo capazes de lidar com dados sequenciais e temporais (séries temporais, linguagem natural).

Seus principais componentes são: **entradas**, **sinapses** (conexões com pesos), **neurônios** (que recebem sinais e aplicam uma função de ativação), e **bias** (valor extra para ajustar resultados).

Para ser treinada, a rede começa com pesos aleatórios, gera um resultado, compara com a resposta correta e ajusta os pesos (correções Δw). Esse processo se repete até que a rede aprenda corretamente.

**Rede Neural Convolucional (CNN)**

Um dos modelos mais conhecidos e populares. Sua principal característica é o uso de **camadas convolucionais**, que analisam pequenas regiões da entrada (campos receptivos locais), ao contrário de camadas totalmente conectadas (*fully connected*), que analisam toda a entrada de uma vez. As CNNs também utilizam **pooling**, que reduz a dimensionalidade espacial das representações mantendo as características mais relevantes.

---

## Machine Learning vs Deep Learning

**Machine Learning** é a prática de usar algoritmos para analisar dados, aprender com eles e tomar decisões. Ao invés de escrever um código com instruções específicas, a máquina é "treinada" com grandes volumes de dados e algoritmos que lhe dão a capacidade de aprender. As abordagens incluem: árvore de decisão, programação lógica indutiva, agrupamento, aprendizado por reforço, redes bayesianas, entre outras.

**Deep Learning** é uma *subárea* do machine learning que estrutura algoritmos em camadas para criar uma "rede neural artificial" capaz de aprender e tomar decisões por conta própria, inspirada na rede biológica de neurônios do cérebro humano.

A diferença essencial é que o Deep Learning é uma subárea dentro do Machine Learning, e que enquanto o machine learning ainda necessita de análise e correção humana, com deep learning um algoritmo pode determinar por si mesmo se uma previsão é precisa ou não por meio de sua própria rede neural.

---

## Referências

TAULLI, Tom. *Introdução à inteligência artificial: uma abordagem não técnica*. Tradução de Luciana do Amaral Teixeira. São Paulo: Novatec, 2020.

HOSAKI, Gabriel Yuri; RIBEIRO, Douglas Francisco. Deep Learning: Ensinando a aprender. *Revista de Gestão e Estratégia – RGE*, Assis: FATEC, v. 3, n. 1, p. 1–8, 2021.
