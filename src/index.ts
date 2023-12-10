import { Command } from "commander";
import { gmail } from './gmail.js';

import command from './commands/index.js';

const program = new Command();

program
    .option('--order', 'start ordering')
    .option('--order-info <number-of-days>', 'start getting info till the number of days')

program.parse(process.argv);

async function main() {
    const options = program.opts();
    if (options.orderInfo) {
        await command.orderInfo(+options.orderInfo);
    } else if (options.order) {
        const res = await gmail.users.messages.list({userId: 'shaildatauser@gmail.com'});
        console.log(res.data);
    } else {
        program.help();
    }
}

main();
