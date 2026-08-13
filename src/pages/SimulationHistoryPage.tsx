import { useEffect, useState } from 'react';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';
import { PageHero } from '@/components/shared/PageHero';
import { useNavigate } from 'react-router-dom';

export function SimulationHistoryPage() {
	const { getAll, deleteSimulation } = useSimulationStorage();
	const [items, setItems] = useState(() => getAll());
	const navigate = useNavigate();

	useEffect(() => {
		setItems(getAll());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleDelete = (id: string) => {
		if (!confirm('Tem certeza que deseja excluir essa simulação?')) return;
		deleteSimulation(id);
		setItems(getAll());
	};

	if (items.length === 0) {
		return (
			<main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
				<PageHero title="Histórico de Simulações" subtitle="Nenhuma simulação encontrada." />
			</main>
		);
	}

	return (
		<main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
			<PageHero title="Histórico de Simulações" subtitle="Resumo das suas simulações salvas." />

			<div className="mt-8 grid gap-4">
				{items.map((item) => (
					<div key={item.id} className="bg-card flex flex-col gap-3 rounded-2xl p-4">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-lg font-semibold">{item.goalName}</h3>
								<p className="text-muted-foreground text-sm">
									Custo: {item.goalAmount} • Prazo: {item.goalDeadline} meses
								</p>
							</div>
							<div className="flex gap-2">
								<button
									className="bg-primary rounded-md px-3 py-1 text-sm text-white"
									onClick={() => navigate(`/resultado/${item.id}`)}
								>
									Ver detalhes
								</button>
								<button
									className="rounded-md border border-red-300 px-3 py-1 text-sm text-red-600"
									onClick={() => handleDelete(item.id)}
								>
									Excluir
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
