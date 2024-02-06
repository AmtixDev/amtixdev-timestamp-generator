function generateTimestamp(duration) {
    console.log('Received duration:', duration);

    if (typeof duration !== 'string') {
        console.error('Invalid duration format');
        return '';
    }

    const timeInSeconds = parseDuration(duration);
    if (isNaN(timeInSeconds)) {
        console.error('Invalid duration format');
        return '';
    }

    const targetTime = Math.floor((Date.now() + timeInSeconds * 1000) / 1000);

    // Discord timestamp format: <t:timestamp:R>
    const timestamp = `<t:${targetTime}:R>`;

    // Return the generated timestamp
    return timestamp;
}

function parseDuration(duration) {
    const match = duration.match(/(\d+)([ymwdhms])/);
    if (match) {
        const value = parseInt(match[1]);
        const unit = match[2].toLowerCase();
        const multipliers = {
            y: 31536000, // years
            mo: 2592000, // months
            w: 604800,  // weeks
            d: 86400,   // days
            h: 3600,    // hours
            m: 60,      // minutes
            s: 1        // seconds
        };

        return value * multipliers[unit];
    }
    return NaN; // Return NaN for invalid durations
}

module.exports = generateTimestamp;