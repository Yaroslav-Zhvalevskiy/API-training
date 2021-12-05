const statistic = {
    title: 'Schema for final statistic',
    type: 'object',
    required: ['failed', 'broken', 'skipped', 'passed', 'unknown', 'total'],
    additionalProperties: false,
    properties: {
        failed: { type: 'number' },
        broken: { type: 'number' },
        skipped: { type: 'number' },
        passed: { type: 'number' },
        unknown: { type: 'number' },
        total: { type: 'number' },
    }
}


const summary = {
    title: 'Schema for /widgets.summary.json req',
    type: 'object',
    required: ['reportName', 'testRuns', 'statistic', 'time'],
    additionalProperties: false,
    properties: {
        reportName: { type: 'string' },
        testRuns: {
            type: 'array'
        },
        statistic,
        time: {
            type: 'object',
            required: ['start', 'stop', 'duration', 'minDuration', 'maxDuration', 'sumDuration'],
            additionalProperties: false,
            properties: {
                start: { type: 'number' },
                stop: { type: 'number' },
                duration: { type: 'number' },
                minDuration: { type: 'number' },
                maxDuration: { type: 'number' },
                sumDuration: { type: 'number' },
            }
        }
    }
};

module.exports = summary;