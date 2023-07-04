import type { IconName } from "@holistics/icon";

export interface IconEntry {
  name: string, icon: IconName, tags: string[]
}

export const ICONS: IconEntry[] = [
  {
    name: 'Sankey chart',
    icon: 'custom-chart/sankey',
    tags: ['sankey', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Spline chart',
    icon: 'custom-chart/spline',
    tags: ['spline', 'line', 'curve', 'curved', 'smooth', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Box plot',
    icon: 'custom-chart/boxplot',
    tags: ['whisker', 'boxplot', 'box', 'plot', 'box-whisker', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Histogram',
    icon: 'custom-chart/histogram',
    tags: ['histogram', 'distribution', 'uniform', 'symmetric', 'bimodal', 'probability', 'chart', 'graph', 'visualization', 'heatmap'],
  },
  {
    name: 'Gantt chart',
    icon: 'custom-chart/gantt',
    tags: ['gantt', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Waterfall chart',
    icon: 'custom-chart/waterfall',
    tags: ['waterfall', 'water', 'fall', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Treemap chart',
    icon: 'custom-chart/treemap',
    tags: ['tree', 'map', 'treemap', 'chart', 'graph', 'visualization', 'diagram'],
  },
  {
    name: 'Pie chart',
    icon: 'custom-chart/pie',
    tags: ['pie', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Area chart',
    icon: 'custom-chart/area',
    tags: ['area', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Line chart',
    icon: 'custom-chart/line',
    tags: ['line', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Column chart',
    icon: 'custom-chart/column',
    tags: ['column', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Horizontal column chart',
    icon: 'custom-chart/column-horizontal',
    tags: ['column', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Bar chart',
    icon: 'chart/bar',
    tags: ['bar', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Bubble chart',
    icon: 'custom-chart/bubble',
    tags: ['bubble', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Combination chart',
    icon: 'custom-chart/combination',
    tags: ['combination', 'chart', 'graph', 'visualization'],
  },
  {
    name: 'Candlestick chart',
    icon: 'custom-chart/candlestick',
    tags: ['candlestick', 'chart', 'graph', 'visualization'],
  },
];
