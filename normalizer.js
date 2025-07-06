function normalizeAmharicText(text) {
    const normalizationMap = {
        'ሀ': 'ሐ'
    }
    return text.split('').map(char => normalizationMap[char] || char).join('');
};

module.exports = { normalizeAmharicText }