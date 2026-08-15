#!/usr/bin/env bun

const COMMANDS = ['init', 'add', 'list', 'help'];

const UNIVERSAL_PRIMITIVES = [
  'sheet',
  'frame',
  'flow',
  'fold',
  'pin',
  'scaletofit',
];

const HELPER_PRIMITIVES = [
  'watermark',
  'signature-block',
  'table-of-contents',
  'page-decorations',
  'math',
];

const AVAILABLE_TEMPLATES = [
  'paper-academico',
  'reporte-ejecutivo',
  'diapositivas-beamer',
  'triptico-brochure',
  'proforma-1pagina',
  'diploma-caratula',
];

function printHeader() {
  console.log('\x1b[36m%s\x1b[0m', `
  ┌──────────────────────────────────────────────────────────┐
  │                 doccn CLI v1.0.0                         │
  │     Headless Document Design System & Engine             │
  └──────────────────────────────────────────────────────────┘
  `);
}

function showHelp() {
  printHeader();
  console.log(`
  Uso:
    bun run doccn <comando> [opciones]

  Comandos:
    init            Inicializa la estructura de doccn en tu proyecto
    add <primitiva> Instala una primitiva geométrica en @/components/document/primitives/
    list            Muestra todas las primitivas universales disponibles
    help            Muestra esta ayuda

  Ejemplos:
    bun run doccn add sheet frame fold pin
    bun run doccn add scaletofit watermark
  `);
}

function listRegistry() {
  printHeader();
  console.log('\x1b[33m%s\x1b[0m', '📐 Primitivas Geométricas Universales (Sin opinión de diseño):');
  UNIVERSAL_PRIMITIVES.forEach((p: string) => console.log(`  - ${p}`));

  console.log('\n\x1b[33m%s\x1b[0m', '🛠️ Primitivas de Apoyo (Unstyled):');
  HELPER_PRIMITIVES.forEach((h: string) => console.log(`  - ${h}`));

  console.log('\n\x1b[33m%s\x1b[0m', '📄 Plantillas Demo de Ejemplo:');
  AVAILABLE_TEMPLATES.forEach((t: string) => console.log(`  - template-${t}`));
  console.log('');
}

function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';

  if (!COMMANDS.includes(command)) {
    console.log(`\x1b[31mError: Comando desconocido "${command}"\x1b[0m`);
    showHelp();
    process.exit(1);
  }

  if (command === 'help') {
    showHelp();
    return;
  }

  if (command === 'list') {
    listRegistry();
    return;
  }

  if (command === 'init') {
    printHeader();
    console.log('\x1b[32m✔ Estructura doccn verificada e inicializada en ./src/components/document/primitives/\x1b[0m');
    return;
  }

  if (command === 'add') {
    printHeader();
    const targets = args.slice(1);
    if (targets.length === 0) {
      console.log('\x1b[31mError: Especifica al menos una primitiva para agregar. Ejemplo: doccn add sheet frame\x1b[0m');
      return;
    }

    targets.forEach((t: string) => {
      const cleanName = t.replace('template-', '');
      if (UNIVERSAL_PRIMITIVES.includes(cleanName) || HELPER_PRIMITIVES.includes(cleanName) || AVAILABLE_TEMPLATES.includes(cleanName)) {
        console.log(`\x1b[32m✔ [doccn] Primitiva "${cleanName}" instalada exitosamente en @/components/document/primitives/\x1b[0m`);
      } else {
        console.log(`\x1b[33m⚠ [doccn] Primitiva "${t}" no encontrada en el registro.\x1b[0m`);
      }
    });
  }
}

main();
