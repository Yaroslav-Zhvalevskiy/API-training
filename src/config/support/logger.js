const winston = require('winston');
const moment = require('moment');

const now = moment().format('YYYY-MM-DD_HH-mm-ss');
const { combine, timestamp, label, printf, colorize } = winston.format;

class Printer {

    #logger;

    #logLevels = {
        levels: {
            ERROR: 0,
            WARN: 1,
            DESCRIBE: 2,
            IT: 3,
            step: 4,
            method: 5
        },
        colors: {
            ERROR: 'red',
            WARN: 'magenta',
            DESCRIBE: 'cyan',
            IT: 'blue',
            step: 'yellow',
            method: 'gray'
        }
    };

    #myFormat = printf((info) => {
        return `${info.timestamp} ${info.level}: ${info.message}`;
    });

    #colorized = combine(
        colorize({ all: true }),
        label({ label: 'right meow!' }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        this.#myFormat
    );

    #monochrome = combine(
        label({ label: 'right meow!' }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        this.#myFormat
    );

    #setTransports() {
        const transports = {
            file: new winston.transports.File({
                filename: `logs/winston-basic_${now}.log`,
                level: 'method',
                format: this.#monochrome
            }),
            console: new winston.transports.Console({
                level: 'method',
                format: this.#colorized
            })
        };
        const _transports = [];
        if (process.env.npm_config_log === 'console') {
            _transports.push(transports.console);
        } else if (process.env.npm_config_log === 'file') {
            _transports.push(transports.file);
        } else {
            _transports.push(transports.file);
            _transports.push(transports.console);
        }
        return _transports;
    }

    get logger() {
        if (!this.#logger) {
            winston.addColors(this.#logLevels.colors);
            this.#logger = winston.createLogger({
                levels: this.#logLevels.levels,
                transports: this.#setTransports()
            });
        }
        return this.#logger;
    }

    print(...args) {
        this.logger.log(...args);
    }

}

module.exports = new Printer();