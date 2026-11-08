# TRPP – Fiscalização de Transporte Rodoviário de Produtos Perigosos (PWA)

Aplicativo web instalável que funciona **sem internet** depois da primeira abertura. As coordenadas usam o **GPS do aparelho**, que não depende de internet.

## Arquivos do pacote
| Arquivo | Função |
|---|---|
| `index.html` | O formulário completo (base de ONUs, norma, enquadramentos, ARLA 32 e gerador de PDF embutidos) |
| `manifest.webmanifest` | Nome, cores e ícones do aplicativo |
| `sw.js` | Guarda os arquivos no aparelho para uso offline |
| `icons/` | Ícones do aplicativo |
| `.nojekyll` | Evita que o GitHub Pages processe os arquivos (não apagar) |

## 1. Publicar no GitHub Pages
1. Entre em https://github.com e crie um repositório (por exemplo, `trpp`).
   - Na conta gratuita, o GitHub Pages exige repositório **público**. O código e a base de produtos ficarão visíveis a qualquer pessoa. **Não envie dados de fiscalizações** ao repositório; o aplicativo não envia nenhum dado a servidores.
2. Descompacte este pacote. No repositório, clique em **Add file > Upload files** e arraste **o conteúdo** da pasta (`index.html`, `manifest.webmanifest`, `sw.js`, a pasta `icons` e o arquivo `.nojekyll`), não a pasta em si. Clique em **Commit changes**.
   - Se o sistema ocultar o `.nojekyll` ao arrastar, crie-o em **Add file > Create new file** com esse nome e conteúdo vazio.
3. Vá em **Settings > Pages**. Em **Source**, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)**, e clique em **Save**.
4. Aguarde 1 a 3 minutos. O endereço será:
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

## 2. Instalar no celular (cada aparelho, uma vez)
Faça com **internet** ligada:
- **Android (Chrome):** abra o endereço, aguarde carregar por completo, toque no menu (⋮) e em **Instalar aplicativo** (ou **Adicionar à tela inicial**).
- **iPhone (Safari):** abra o endereço, toque em **Compartilhar** e em **Adicionar à Tela de Início**.

Depois, abra o aplicativo uma vez ainda com internet. A partir daí ele abre e funciona sem rede.

## 3. GPS e coordenadas sem internet
- O GPS funciona sem rede, mas precisa da **permissão de localização**: aceite quando o aplicativo pedir. Se negar, ative em Configurações do aparelho > Aplicativos > navegador/TRPP > Permissões > Localização.
- Ligue a **Localização** do aparelho. Em modo avião, o GPS do celular costuma continuar funcionando se a localização estiver ligada.
- Sem internet, a primeira localização ("início a frio") pode demorar de 30 segundos a alguns minutos. Fique **a céu aberto**. Se falhar, toque em **Atualizar localização**.
- O aplicativo mostra a **precisão aproximada** (± metros) abaixo do campo.

## 4. Gerar o relatório em PDF
O botão **Gerar Relatório PDF** funciona sem internet. O arquivo recebe o nome `TRPP_PLACA_DATA.pdf` e vai para a pasta de downloads (ou para o menu de compartilhamento, no iPhone).

## 5. Atualizar o aplicativo
Substitua o `index.html` no repositório (e, se alterar ícones ou o manifesto, mude o número `VERSAO` em `sw.js`). Os celulares atualizam na próxima abertura com internet e mostram o aviso para fechar e abrir o aplicativo.

## 6. Cuidados
- **Salvar Fiscalização** guarda os dados no navegador do aparelho, com limite de cerca de 5 MB (as fotos pesam). Gere o PDF logo após cada fiscalização. Limpar os dados do navegador apaga o que foi salvo.
- Use **Limpar Formulário / Nova Fiscalização** entre um veículo e outro.
- Os textos de lei e de norma foram transcritos dos documentos oficiais recebidos; revise a base legal antes de usar em autuações.

Versão do pacote: 1.0.1
