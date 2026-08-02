import { createBrowserRouter } from 'react-router-dom';
import { Button } from './components/shared/shared/Button';
import { PiggyBank } from 'lucide-react';
import { RootLayout } from './components/shared/layout/RootLayout';

export const router = createBrowserRouter([
	{
		element: <RootLayout />, // Exibe para todos os caminhos
		children: [
			{
				path: '/',
				element:
					<>
						<h1>Formulário de Simulação</h1>
						<Button variant="primary" icon={PiggyBank} className="w-full">Clique aqui</Button>
					</>
			},
			{
				path: '/resultado',
				element: <h1>Resultado da Simulação</h1>
			},
			{
				path: '/historico',
				element: <h1>Histórico da Simulação</h1>
			}
		],
	},
]);
