-- Migration: adiciona coluna `details` em team_members
-- Contexto: campo livre TEXT que aparece num modal/popover ao passar o mouse
-- (ou tocar) sobre o card de cada membro na home. Permite descrição expandida
-- de especializações, formação, idiomas, etc., sem poluir o card resumido.
--
-- Compatibilidade: NULL permitido, defaults nulos — cards antigos continuam
-- funcionando exatamente como antes (sem o popover, porque não tem conteúdo).

ALTER TABLE team_members
  ADD COLUMN IF NOT EXISTS details TEXT;
