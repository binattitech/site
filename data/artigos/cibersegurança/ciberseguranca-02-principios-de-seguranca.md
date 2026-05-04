# Princípios de Segurança na Programação

Anteriormente entendemos a função valiosa da cibersegurança e, além disso, vimos que existem diferentes tipos de ataques. Com isso em mente, é importante abordar alguns princípios básicos que são importantíssimos para garantir a segurança na programação.

---

## Autenticação e Autorização

**Autenticação** tem a função de verificar a identidade do usuário, de um sistema ou dispositivo, garantindo que estes são quem deveriam ser. Com isso, é possível impedir acessos não autorizados. Existem variados métodos de autenticação — o mais famoso é o login com senha, visualizado em variados sistemas, como acesso bancário, escolar e a jogos. Além deste, existem também acesso por biometria e tokens de segurança.

**Autorização** determina quais recursos um usuário já autenticado pode ou não acessar. Mesmo com a identidade confirmada, muitos usuários podem não ter acesso a determinadas camadas ou serviços de um sistema. Um bom exemplo são os sites escolares, onde um aluno pode ver apenas o seu boletim e suas próprias informações após o login, mas o coordenador acadêmico pode acessar dados de múltiplos alunos.

Essas duas funções devem ser combinadas para garantir a segurança do sistema: primeiramente o usuário é autenticado e, posteriormente, é verificado se ele tem permissão para acessar determinadas funções. Com isso, acessos não permitidos são evitados e a exposição de dados sensíveis para pessoas inadequadas não acontece.

---

## Autenticação Multifatorial (MFA)

A autenticação multifatorial (MFA) é um método de segurança que exige mais de uma forma de autenticação. Além da senha (o que você sabe), você pode precisar de algo a mais para conseguir autenticar sua identidade.

A primeira forma adicional que pode ser solicitada é algo que o usuário **possua**, como um código enviado por SMS ou e-mail, ou gerado por um aplicativo de autenticação (como Google Authenticator ou Authy), que cria códigos temporários e dificulta sua descoberta.

Além dessa maneira, o usuário pode precisar provar sua identidade com algo que ele **é**, como características biométricas — impressões digitais, reconhecimento facial e íris —, garantindo que a pessoa tentando acessar a conta é realmente o usuário esperado.

---

## Criptografia

A criptografia é definida como a técnica usada para proteger informações, transformando dados legíveis (texto simples) em dados ilegíveis (texto cifrado), para impedir que terceiros acessem informações sensíveis.

A criptografia é importante por variados aspectos: proteção da privacidade dos usuários, impedindo acessos não autorizados a informações pessoais; garantia da integridade dos dados transmitidos; e prevenção de roubo de identidade.

### Criptografia Simétrica

Usa uma **única chave** para criptografar e descriptografar os dados. Tanto o remetente quanto o destinatário precisam conhecer a mesma chave. No entanto, dessa maneira, um possível atacante só precisaria ter acesso a uma chave para descriptografar a informação.

Um exemplo clássico é a **Cifra de César**, um dos métodos mais antigos e simples: cada letra do texto original é substituída por outra que se encontra um número fixo de posições à frente no alfabeto. Por exemplo, a palavra "Hello" com chave 3 ficaria "Khoor". Devido à sua simplicidade, não é utilizada em aplicações modernas, mas possui valor educativo e aparece em muitos jogos de investigação.

### Criptografia Assimétrica

Utiliza um **par de chaves**: uma chave pública e uma chave privada. A chave pública pode ser compartilhada livremente e é usada para criptografar; a chave privada deve ser mantida em segredo e é usada para descriptografar.

O destinatário gera o par de chaves e compartilha apenas a pública com o remetente, que a usa para criptografar a mensagem. Mesmo que alguém intercepte a mensagem, não conseguirá descriptografá-la sem a chave privada do destinatário.

---

## Uso de Senhas Seguras

As senhas são a principal forma de proteger uma conta contra acesso não autorizado, mas é importante que sejam fortes e protegidas adequadamente. Existem técnicas que ajudam nesse processo: **Hash** e **Salt**.

### Hash

Hash é uma técnica que transforma dados de qualquer tamanho em uma sequência fixa de caracteres. Essa transformação é **irreversível**: a partir do valor hash gerado, não é possível obter o valor original de volta.

Na prática, ao invés de armazenar a senha diretamente, o sistema guarda o hash derivado dela. Quando o usuário faz login, o sistema compara o hash gerado com o armazenado. Caso o banco de dados seja comprometido, o invasor não terá acesso às senhas originais — apenas aos hashes.

### Salt

O Salt é utilizado junto com o hash para aumentar a segurança. Consiste em adicionar um valor aleatório à senha **antes** de gerar o hash. Isso é importante porque, sem o salt, dois usuários com a mesma senha gerariam o mesmo hash, tornando o sistema vulnerável a ataques como as **Rainbow Tables**.

Uma Rainbow Table é uma tabela com hashes pré-computados de senhas comuns. Ela permite encontrar senhas rapidamente ao comparar hashes. Com o Salt, mesmo que duas pessoas escolham a mesma senha, os hashes gerados serão diferentes, tornando esse tipo de ataque ineficaz.

**Exemplo prático:**

- Ana: senha "1234" + salt "abc" → hash de "abc1234"
- Luiz: senha "1234" + salt "def" → hash de "def1234"

Ambos usam "1234" para entrar, mas o que é armazenado é o hash combinado com o salt único de cada um — o que garante que hashes iguais nunca sejam armazenados.

---

## Gerenciamento de Sessões

Após um usuário ser autenticado, uma sessão é criada para que ele possa interagir com o sistema. É necessário proteger essa sessão, pois ela pode ser "sequestrada" por um atacante que quer agir em nome do usuário legítimo.

Os **cookies de sessão** contêm o ID da sessão e permitem que o servidor identifique o usuário em cada requisição. Para evitar que um atacante consiga acessá-los, é importante configurar os cookies com:

- `HttpOnly` — impede o acesso via JavaScript
- `Secure` — garante que o cookie só seja transmitido por conexões HTTPS

Outro fator importante é a **duração das sessões**. Uma sessão não deve durar indefinidamente — especialmente para evitar riscos caso o usuário se esqueça de sair ou deixe o sistema aberto em um dispositivo público. Por isso, é importante definir um tempo de expiração por inatividade ou por período fixo.

Além disso, cada vez que o usuário fizer login novamente, é importante criar um **novo ID de sessão**, pois um atacante pode conhecer o ID de uma sessão anterior e tentar reutilizá-lo.

### Verificação de Atividade

O sistema pode implementar verificações periódicas para garantir que a sessão ainda pertence ao usuário que a iniciou. Essa verificação pode ser feita verificando se o IP, o tipo de dispositivo ou o navegador mudou durante a sessão, ou solicitando autenticação adicional em transações sensíveis.

---

## Conclusão

A cibersegurança é essencial para proteger sistemas e dados contra acessos não autorizados e ataques. Para garantir uma boa segurança, é necessário implementar práticas como autenticação e autorização adequadas, autenticação multifatorial, criptografia de dados e uso de senhas seguras. Além disso, é fundamental proteger a gestão de sessões para evitar que sejam sequestradas por atacantes. Adotar técnicas como hashing, salt e medidas de segurança para cookies pode ajudar a fortalecer a proteção do sistema e minimizar riscos.

---

## Referências

FEDRECHESKI, Geovane. Modelo de Segurança Zero Trust: entenda como funciona e sua importância. *Alura*, 19 maio 2023. Disponível em: <https://www.alura.com.br/artigos/modelo-seguranca-zero-trust-como-funciona>. Acesso em: 25 fev. 2025.

MATA, Lucas Ribeiro. Criptografia: entendendo as diferenças entre simétrica, assimétrica e homomórfica. *Alura*, 19 out. 2023. Disponível em: <https://www.alura.com.br/artigos/criptografia-diferencas-simetrica-assimetrica-homomorfica>. Acesso em: 25 fev. 2025.

ORESTES, Yan. Como criar uma boa senha. *Alura*, 12 jul. 2018. Disponível em: <https://www.alura.com.br/artigos/como-criar-uma-boa-senha>. Acesso em: 25 fev. 2025.

STEINBERG, Joseph. *Cibersegurança Para Leigos*. Tradução de Júlio Costa. São Paulo: Alta Books, 2018.
