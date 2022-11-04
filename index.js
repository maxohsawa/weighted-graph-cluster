const data = require('./sample-data.json');
const key = require('./data-key.json');

const NUMBER_OF_GROUPS = 4;
const groups = {};
for (let i = 0; i < NUMBER_OF_GROUPS; i++) {
  groups[i] = {
    score: 0,
    members: [
      {
        id: 3,
        preferences: [7, 9, 0],
      },
    ],
  };
}

console.log(getScoreOfNodePlacedInGroup(node, groups[0]));

function getScoreOfNodePlacedInGroup(node, group) {
  const nodeId = node.id;
  const nodePrefs = node.preferences;
  const members = group.members;
  let score = 0;
  for (let m = 0; m < members.length; m++) {
    const memberId = members[m].id;
    const prefs = members[m].preferences;
    // if member preferences include node
    if (prefs[0] && prefs[0] === nodeId) score += 3;
    if (prefs[1] && prefs[1] === nodeId) score += 2;
    if (prefs[2] && prefs[2] === nodeId) score += 1;
    // if node preferences include member
    if (nodePrefs[0] && nodePrefs[0] === memberId) score += 3;
    if (nodePrefs[1] && nodePrefs[1] === memberId) score += 2;
    if (nodePrefs[2] && nodePrefs[2] === memberId) score += 1;
  }
  return score;
}
