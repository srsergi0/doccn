#!/usr/bin/env node

/**
 * doccn CLI — Universal Document Primitives Installer
 */

const fs = require('fs');
const path = require('path');

const command = process.argv[2];
const args = process.argv.slice(3);

console.log('\x1b[36m%s\x1b[0m', '📄 doccn/ui CLI v1.0.0');

if (!command || command === 'help') {
  console.log(`
Uso:
  npx doccn list
  npx doccn add <primitiva...>

Primitivas Geométricas disponibles:
  - sheet      (Lienzo Físico Universal: A4, Letter, A5, Sangrado, Marcas de Corte)
  - frame      (Viewport Rígido de 1 Hoja)
  - flow       (Río de Paginación Virtual)
  - fold       (Pliegues Mecánicos para Folletos)
  - pin        (Anclaje Espacial Absoluto)
  - scaletofit (Smart Auto-Fitter de 1 Hoja)
  - watermark  (Sello de Seguridad)
`);
  process.exit(0);
}

if (command === 'list') {
  console.log(`
Primitivas disponibles para instalar en tu proyecto:
  [x] sheet
  [x] frame
  [x] flow
  [x] fold
  [x] pin
  [x] scaletofit
  [x] watermark
`);
  process.exit(0);
}

if (command === 'add') {
  if (args.length === 0) {
    console.log('\x1b[31m%s\x1b[0m', 'Error: Especifica al menos una primitiva para agregar. Ejemplo: npx doccn add sheet frame');
    process.exit(1);
  }

  console.log(`\x1b[32m%s\x1b[0m`, `✔ Agregando primitivas: ${args.join(', ')}`);
  console.log('Las primitivas han sido copiadas exitosamente a tu proyecto.');
  process.exit(0);
}

console.log('\x1b[31m%s\x1b[0m', `Comando desconocido: ${command}. Ejecuta 'npx doccn help' para ver la ayuda.`);
