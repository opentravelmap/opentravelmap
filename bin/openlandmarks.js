#!/usr/bin/env node
'use strict';
const program = require('commander');
const commands = require('../lib/commands');

program
  .description('')
  .command('add-label')
  .action(function () {
		commands.addLabel(process.stdin, process.stdout);
  });

program
  .description('')
  .command('to-wikidata')
  .action(function () {
		commands.toWikidata(process.stdin, process.stdout);
  });

program
  .command('to-geojson')
  .option('--include-labels <s>', 'Comma separated list of languages to keep')
  .action(function (cmd) {
		commands.toGeoJSON(process.stdin, process.stdout, {
      includeLabels: cmd.includeLabels ? cmd.includeLabels.split(',') : []
    });
  });

program
  .command('to-collection')
  .action(function () {
		commands.toCollection(process.stdin, function(collection) {
      console.log(JSON.stringify(collection));
    });
  });

program.parse(process.argv);
