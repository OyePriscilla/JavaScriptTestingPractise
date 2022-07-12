const capitalString = ([firstLetter, ...lastWorlds]) => {
    return firstLetter.toUpperCase() + lastWorlds.join('');
}
module.exports = capitalString;
