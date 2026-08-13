# Projeto Final — Planejai (Portfólio)

> Aplicação de simulação financeira que gera diagnósticos personalizados via API de linguagem (Gemini).

Resumo rápido

- Formulário passo-a-passo para capturar dados financeiros e objetivo (renda, despesas, dívidas, meta, prazo).
- Gera insights automatizados usando o modelo Gemini (via variável de ambiente `VITE_GEMINI_API_KEY`).
- Histórico de simulações salvo em `localStorage` com listagem, exclusão e navegação para detalhes.

Principais arquivos

- `src/pages/SimulationFormPage.tsx` — formulário da simulação.
- `src/pages/SimulationResultsPage.tsx` — página de resultados com cartões e painel de insights.
- `src/pages/SimulationHistoryPage.tsx` — página de histórico (lista, excluir, ver detalhes).
- `src/hooks/useSimulationStorage.tsx` — API simples de persistência em `localStorage`.
- `src/services/aiService.ts` — integração com a API Gemini.

Tecnologias

- React + TypeScript
- Vite
- Tailwind CSS
- Lucide (ícones)

Instalação

1. Instale dependências:

```
npm install
```

2. Defina a variável de ambiente (arquivo `.env` na raiz):

```
VITE_GEMINI_API_KEY=seu_api_key_aqui
```

Observação: sem a chave a chamada ao Gemini falhará; a aplicação usa `import.meta.env.VITE_GEMINI_API_KEY`.

Scripts úteis

- `npm run dev` — iniciar servidor de desenvolvimento (Vite).
- `npm run build` — compilar para produção.
- `npm run preview` — servir a build localmente.
- `npm run lint` — rodar ESLint e aplicar correções automáticas.
- `npm run format` — formatar com Prettier.

Como usar (fluxo)

1. Acesse `/` e preencha o formulário passo a passo.
2. Ao concluir, a aplicação salva a simulação e redireciona para `/resultado/:id`.
3. A página de resultados exibe cartões com os dados e aciona o painel de insights (chamada ao Gemini).
4. Em `/historico` você vê todas as simulações salvas, pode excluir ou navegar para ver detalhes.

Notas de implementação e dicas

- Informações das simulações são salvas no `localStorage` sob a chave `simulation-data`.
- `useSimulationStorage` expõe `saveFormData`, `getFormData`, `getAll`, `updateSimulation` e `deleteSimulation`.
- A resposta do Gemini é esperada em JSON estrito conforme o prompt definido em `src/data/aiPrompt.ts`.

Problemas comuns

- Erro 404 ao navegar para `/resultado`: verifique a rota em `src/router.tsx` — ela deve ser `/resultado/:id`.
- Import não resolvido: confirme caminhos relativos e capitalização dos arquivos (`.tsx` vs `.ts`).
- Chave Gemini ausente/inválida: defina `VITE_GEMINI_API_KEY` antes de iniciar o dev server.

Contribuições

- Abra uma issue ou envie um PR com melhorias, correções ou novos recursos.

Quer que eu adicione instruções rápidas para rodar com Docker ou um exemplo de `.env.example`? Escreva aqui e eu adiciono.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			// Other configs...

			// Remove tseslint.configs.recommended and replace with this
			tseslint.configs.recommendedTypeChecked,
			// Alternatively, use this for stricter rules
			tseslint.configs.strictTypeChecked,
			// Optionally, add this for stylistic rules
			tseslint.configs.stylisticTypeChecked,

			// Other configs...
		],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			// Other configs...
			// Enable lint rules for React
			reactX.configs['recommended-typescript'],
			// Enable lint rules for React DOM
			reactDom.configs.recommended,
		],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```
