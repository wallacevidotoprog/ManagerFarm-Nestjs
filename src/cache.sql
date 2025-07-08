INSERT INTO public.departaments (name, functions, description) VALUES
-- Administrativos
('Administração Central', 'ADMINISTRATIVE', 'Gestão geral da fazenda'),
('RH', 'ADMINISTRATIVE', 'Recursos Humanos e folha de pagamento'),

-- Financeiros
('Financeiro', 'FINANCIAL', 'Gestão financeira e contábil'),
('Tesouraria', 'FINANCIAL', 'Fluxo de caixa e bancos'),

-- Operacionais
('Agricultura', 'AGRICULTURAL', 'Plantio, colheita e cultivos'),
('Pecuária', 'LIVESTOCK', 'Criação e manejo animal'),
('Irrigação', 'OPERATIONAL', 'Manejo hídrico e sistemas de irrigação'),

-- Técnicos
('Manutenção', 'MAINTENANCE', 'Equipamentos e infraestrutura'),
('Técnico Agrícola', 'TECHNICAL', 'Assistência técnica e planejamento'),
('Veterinário', 'TECHNICAL', 'Saúde animal e controle sanitário'),

-- Comercial
('Vendas', 'COMMERCIAL', 'Comercialização da produção'),
('Marketing', 'COMMERCIAL', 'Divulgação e relações comerciais');


INSERT INTO public.functions ( name, description, "departamentId") VALUES
-- Administração Central
( 'Gerente Geral', 'Responsável pela gestão geral da fazenda', 'db1d4100-6d26-4410-8ce6-c81d407823ea'),
( 'Assistente Administrativo', 'Apoio nas atividades administrativas', 'db1d4100-6d26-4410-8ce6-c81d407823ea'),

-- RH
( 'Coordenador de RH', 'Gestão de pessoas e processos de RH', '7ae895e0-6b47-4e44-86e9-351c17de6f24'),
( 'Recrutador', 'Seleção e contratação de colaboradores', '7ae895e0-6b47-4e44-86e9-351c17de6f24'),

-- Financeiro
( 'Contador', 'Responsável pela contabilidade da fazenda', 'd5dd4862-5641-4324-9624-1b9db8cfcaea'),
( 'Analista Financeiro', 'Análise de custos e orçamentos', 'd5dd4862-5641-4324-9624-1b9db8cfcaea'),

-- Tesouraria
( 'Tesoureiro', 'Gestão do fluxo de caixa diário', '3f260f1f-496f-4ab7-b538-10b231a1f89d'),

-- Agricultura
( 'Engenheiro Agrônomo', 'Planejamento agrícola e orientação técnica', 'e537160e-02de-4dda-a483-8bbe307dc8ae'),
( 'Supervisor Agrícola', 'Supervisão das atividades de campo', 'e537160e-02de-4dda-a483-8bbe307dc8ae'),
( 'Operador de Máquinas Agrícolas', 'Operação de tratores e colheitadeiras', 'e537160e-02de-4dda-a483-8bbe307dc8ae'),

-- Pecuária
( 'Gerente de Pecuária', 'Gestão geral da criação animal', '04c6907d-d72c-407a-9425-b5ec062b9662'),
( 'Ordenhador', 'Responsável pela ordenha diária', '04c6907d-d72c-407a-9425-b5ec062b9662'),
( 'Tratador de Animais', 'Cuidados diários com os animais', '04c6907d-d72c-407a-9425-b5ec062b9662'),

-- Irrigação
( 'Técnico em Irrigação', 'Manutenção e operação dos sistemas de irrigação', '54383fab-4443-4d55-af40-3c67080d7578'),

-- Veterinário
( 'Médico Veterinário', 'Cuidados com a saúde animal', '3102644e-36b9-40f5-a234-4f1b0551b7b6'),
( 'Auxiliar Veterinário', 'Apoio nos procedimentos veterinários', '3102644e-36b9-40f5-a234-4f1b0551b7b6'),

-- Técnico Agrícola
( 'Técnico Agrícola', 'Assistência técnica no campo', '03462a02-3ead-4b3b-b262-b55b05898759'),

-- Manutenção
( 'Mecânico', 'Manutenção de máquinas e veículos', '8fa31203-86ad-443c-8a13-0f7fe3b4e3ce'),
( 'Eletricista', 'Manutenção elétrica da fazenda', '8fa31203-86ad-443c-8a13-0f7fe3b4e3ce'),

-- Vendas
( 'Vendedor', 'Comercialização dos produtos da fazenda', '6124f247-0640-42d3-b67b-cc2a7cccce43'),
( 'Representante Comercial', 'Captação de novos clientes', '6124f247-0640-42d3-b67b-cc2a7cccce43'),

-- Marketing
( 'Analista de Marketing', 'Divulgação e promoção da marca', '78f68344-39cd-4c6d-a55d-295c287767bf');