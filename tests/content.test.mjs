import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('a página mantém todas as áreas previstas na comunicação institucional', () => {
  for (const id of ['inicio', 'solucoes', 'metodo', 'portfolio', 'sobre', 'perguntas', 'contato']) {
    assert.match(app, new RegExp(`id="${id}"`), `seção ausente: ${id}`);
  }
  for (const service of ['Sites e Landing Pages', 'Marketplaces e E-commerce', 'Google Workspace', 'Presença no Google', 'Inteligência Artificial e Automações']) {
    assert.ok(app.includes(service), `serviço ausente: ${service}`);
  }
});

test('a comunicação não anuncia IA como serviço pronto nem fabrica contato', () => {
  assert.match(app, /Em desenvolvimento/);
  assert.match(app, /Estamos preparando soluções de automação e inteligência artificial/);
  assert.doesNotMatch(app, /https:\/\/wa\.me\/|mailto:|tel:/);
  assert.match(app, /https:\/\/www\.instagram\.com\/impulseptu\//);
});

test('a identidade original e a linguagem da página estão configuradas', () => {
  assert.match(app, /logo-original\.jpg/);
  assert.match(html, /lang="pt-BR"/);
  assert.match(html, /name="description"/);
});
