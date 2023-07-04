import { ICONS } from '../constants/hicons';

interface IconTag {
  name: string
  icon: string
  tags: Array<string>
}

interface IconScore {
  name: string
  icon: string
  priority: number
}

const longestCommomSubstr = (s: string, t: string, n: number, m: number) => {
  const dp = Array(2).fill(0).map(() => Array(m + 1).fill(0));
  let res = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s.charAt(i - 1) === t.charAt(j - 1)) {
        dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
        if (dp[i % 2][j] > res) { res = dp[i % 2][j]; }
      } else dp[i % 2][j] = 0;
    }
  }
  return res;
};

const findCommonTags = (suitChart: IconTag[]) => {
  let commonTags = suitChart[0].tags;
  for (let i = 1; i < suitChart.length; i++) {
    commonTags = commonTags.filter(tag => suitChart[i].tags.includes(tag));
    if (commonTags.length === 0) return [];
  }
  return commonTags;
};

const levenshteinDistance = (userInput: string, tagName: string) : number => {
  let distance = 0;
  let constantIndex = tagName.indexOf(userInput[0]);
  if (constantIndex === -1) constantIndex = 0;
  else distance += constantIndex;
  const newTagName = tagName.substring(constantIndex);
  let newUserInput = '';
  for (let i = 0; i < newTagName.length; i++) {
    if (i >= userInput.length) break;
    const tmpIdx = userInput.indexOf(newTagName[i], i);
    if (tmpIdx !== -1) {
      distance += (tmpIdx - i);
      newUserInput = userInput.slice(0, i) + userInput.substring(tmpIdx);
    } else if (tmpIdx !== i) distance += 1;
  }
  return distance + Math.abs(newUserInput.length - newTagName.length);
};

const suggestIcon = (userInput: string): { name: string, icon: string, priority: number }[] => {
  const suitableCharts :IconTag[] = [];
  ICONS.forEach(chart => {
    const tags: Array<string> = [];
    chart.tags.forEach(tag => {
      if (longestCommomSubstr(tag, userInput.toLowerCase(), tag.length, userInput.length) >= 3) {
        tags.push(tag);
      }
    });
    if (tags.length > 0) {
      suitableCharts.push({
        name: chart.name,
        icon: chart.icon,
        tags,
      });
    }
  });
  let arrayToBeLV = suitableCharts;
  // sanitize the suitableCharts
  if (suitableCharts.length === ICONS.length && findCommonTags(suitableCharts).length > 0) {
    const theCommonTags = findCommonTags(suitableCharts);
    suitableCharts.forEach(chart => {
      chart.tags = chart.tags.filter(tagName => theCommonTags.indexOf(tagName) === -1);
    });
    arrayToBeLV = suitableCharts.filter(chart => chart.tags.length > 0);
  }
  // levenshtein distance
  const result: IconScore[] = [];
  arrayToBeLV.forEach(chart => {
    let min = 1000;
    userInput.split(/\s+/g).forEach(brokenWord => {
      chart.tags.forEach(tag => {
        if (min > levenshteinDistance(brokenWord.toLowerCase(), tag)) {
          min = levenshteinDistance(brokenWord.toLowerCase(), tag);
        }
      });
    });
    result.push({
      name: chart.name,
      icon: chart.icon,
      priority: min,
    });
  });
  return result.sort((chart1, chart2) => ((chart1.priority > chart2.priority) ? 1 : -1)); // should be sort order by priority
};

export default suggestIcon;
