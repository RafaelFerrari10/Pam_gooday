const fs = require('fs');
const path = require('path');

const tmp = 'C:/Users/RAFAE_~1/AppData/Local/Temp/opencode/gooday-data';

const estadosCsv = fs.readFileSync(path.join(tmp, 'estados.csv'), 'utf8');
const municipiosCsv = fs.readFileSync(path.join(tmp, 'municipios.csv'), 'utf8');

const parse = (csv) =>
  csv
    .split(/\r?\n/)
    .slice(1)
    .filter((line) => line.length > 0)
    .map((line) => {
      const cols = [];
      let current = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i += 1) {
        const ch = line[i];
        if (ch === '"') {
          inQuotes = !inQuotes;
        } else if (ch === ',' && !inQuotes) {
          cols.push(current);
          current = '';
        } else {
          current += ch;
        }
      }
      cols.push(current);
      return cols;
    });

const estados = new Map();
const ufOrder = [];
for (const [codigoUf, uf, nome] of parse(estadosCsv)) {
  estados.set(codigoUf, nome);
  ufOrder.push({ uf, nome });
}

const byState = new Map();
for (const [, nome, , , , codigoUf] of parse(municipiosCsv)) {
  const stateName = estados.get(codigoUf);
  if (!byState.has(stateName)) {
    byState.set(stateName, []);
  }
  byState.get(stateName).push(nome);
}

const lines = [];
lines.push('// Gerado a partir do dataset de municípios do IBGE (5.571 municípios).');
lines.push('// Fonte: https://github.com/kelvins/Municipios-Brasileiros');
lines.push('');
lines.push('export const CITIES_BY_STATE = {');
for (const { uf, nome } of ufOrder) {
  const cities = byState.get(nome);
  if (cities) {
    cities.sort((a, b) => a.localeCompare(b, 'pt-BR'));
    lines.push(`  '${nome} (${uf})': [`);
    for (const city of cities) {
      lines.push(`    '${city.replace(/'/g, "\\'")}',`);
    }
    lines.push('  ],');
  }
}
lines.push('};');
lines.push('');
lines.push('export const STATES = Object.keys(CITIES_BY_STATE);');
lines.push('');

const outFile = path.join(__dirname, '..', 'src', 'data', 'cities.js');
fs.writeFileSync(outFile, lines.join('\n'), 'utf8');
console.log('written', outFile);
const total = [...byState.values()].reduce((a, b) => a + b.length, 0);
console.log('states:', ufOrder.length, 'municipalities:', total);
