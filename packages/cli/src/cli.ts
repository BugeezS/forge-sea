#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .name('build')
  .description('build the node module package')
  .version('0.0.1')
  .action(() => {
    console.log('Build the npm packages')
  });

program
  .name('init')
  .description('Init the forge.sea.config file')
  .version('0.0.1')
  .action(() => {
    console.log("Init the forge.sea.config file");
  });

program
  .name('inspect')
  .description('print the metadata')
  .version('0.0.1')
  .action(() => {
    console.log('Print the metadata');
  });

program
  .name('run')
  .description('run binary with verbose SEA logs')
  .version('0.0.1')
  .action(() => {
    console.log('Run the binary');
  })
