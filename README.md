# Impulse Soluções Tecnológicas — site institucional

Landing page responsiva em React, TypeScript e Vite, com a identidade visual e os textos definidos pela Impulse. A imagem em `public/logo-original.jpg` foi preservada como recebida na conversa de referência.

## Executar

Requer Node.js 20.19+ (ou 22.12+).

```bash
npm install
npm run dev
```

Abra o endereço local exibido pelo Vite. Para verificar e gerar os arquivos de produção:

```bash
npm test
npm run build
npm run preview
```

O resultado fica em `dist/` e pode ser servido por qualquer hospedagem de arquivos estáticos.

## Conteúdo e contato

- O conteúdo segue as seções aprovadas: apresentação, soluções, processo, portfólio, equipe, diferenciais, perguntas frequentes, contato e rodapé.
- IA e automações aparecem como **em desenvolvimento**.
- Não há projetos comerciais, depoimentos, métricas, telefone ou e-mail inventados. O portfólio explica o estado atual e a ilustração está identificada como conceitual.
- Os botões de orçamento levam ao contato da própria página e ao Instagram `@impulseptu`, canal informado na conversa. Antes de ativar WhatsApp ou formulário, é necessário confirmar o canal comercial oficial.
- Nomes, funções, descrição dos serviços e textos institucionais devem ser validados pelos sócios antes da divulgação pública.

## Ajustes de marca

As cores estão em `src/styles.css`: azul profundo `#061C47`, azul elétrico `#0A59E8` e ciano `#19D9E8`. Títulos usam Montserrat e textos usam Inter. As fontes são carregadas do Google Fonts, com fontes locais de fallback.

## Publicação sugerida

1. Crie ou selecione um repositório da organização `impulseptu` com permissão de escrita para a conexão GitHub.
2. Envie todos os arquivos deste diretório, inclusive `public/logo-original.jpg`. Se gerar `package-lock.json` com `npm install`, inclua-o também.
3. Configure a hospedagem estática para executar `npm ci && npm run build` e publicar `dist/`.
4. Confirme o domínio e revise os metadados sociais ao definir a URL oficial.

O projeto não inclui implantação automática porque o destino público e as permissões do repositório precisam ser confirmados.
