const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type:'number',
                    demandOption: true
                })
                .check((argv, options)=>{
                   if (isNaN(argv.b))
                        throw "La base debe ser un número";
                    return true;
                })
                .argv;

console.log(argv.b);

