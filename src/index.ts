import { Command } from "commander";

const program = new Command();

program
    .option('--order', 'start ordering')
    .option('--order-info <number-of-days>', 'start getting info till the number of days')

program.parse(process.argv);

async function main() {
}

main();
