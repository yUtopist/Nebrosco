import { Donut, Line, Bar, Vertical, LargeGroup, MediumGroup } from './Widget/Widget'

export interface widgetTypes {
  id: string;
  type: typeof Donut | typeof Line | typeof Bar | typeof Vertical;
  title?: string;
  description?: string;
  keys?: string[];
  labels?: string[];
  values: number[] | number[][];
  display?: string;
}
export interface groupTypes {
  id: string;
  type: typeof LargeGroup | typeof MediumGroup;
  members: widgetTypes[][];
}

export const dashboardData: Array<groupTypes | widgetTypes> = [
  {
    id: 'top-wide-group',
    type: LargeGroup,
    members: [
      [
        {
          id: 'widget-total-tasks',
          type: Donut,
          title: 'Total Tasks',
          description: 'Total of visible tasks to me.',
          labels: ['Opened', 'In Progress', 'Resolved', 'Reopened'],
          values: [15, 12, 10, 2],
          display: '23'
        },
        {
          id: 'widget-today-update',
          type: Donut,
          title: "Today's Update",
          description: 'Total of updated tasks today.',
          labels: ['Opened'],
          values: [15],
          display: '15'
        },
        {
          id: 'widget-today-goal',
          type: Donut,
          title: "Today's Goal",
          description: 'Progress of the goals set for today.',
          labels: ['Resolved'],
          values: [10],
          display: '1/10'
        }
      ],
      [
        {
          id: 'widget-opened-tasks',
          type: Donut,
          title: 'Opened',
          description: 'Total of still opened tasks.',
          labels: ['High', 'Medium', 'Low'],
          values: [1, 3, 1],
          display: '15'
        },
        {
          id: 'widget-inprogress-tasks',
          type: Donut,
          title: 'In Progress',
          description: 'Total of still in progress tasks',
          labels: ['High', 'Medium', 'Low'],
          values: [3, 5, 4],
          display: '12'
        }
      ]
    ]
  },
  {
    id: 'widget-linegraph-tasks',
    type: Line,
    title: 'Tasks',
    keys: ['4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12'],
    labels: ['Opened', 'Resolved'],
    values: [[8, 8], [0, 0], [0, 0], [4, 8], [5, 8], [8, 7], [8, 6], [4, 6], [0, 0], [0, 0], [8, 6]],
  },
  {
    id: 'widget-bargraph-tasks',
    type: Bar,
    title: 'Activities',
    keys: ['4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12'],
    values: [28, 0, 0, 48, 35, 46, 40, 44, 0, 0, 43]
  },
  {
    id: 'widget-agents-vertical',
    type: Vertical,
    title: 'Agents',
    keys: [
      'Tommy Wiseau',
      'Greg Sestero',
      'Juliette Danielle',
      'Robyn Paris',
      'Dan Janjigian',
      'Philip Haldiman'],
    labels: ['Opened', 'Resolved'],
    values: [[3, 8], [3, 8], [3, 8], [3, 8], [3, 8], [3, 8]],
  },
  {
    id: 'widget-projects-vertical',
    type: Vertical,
    title: 'Projects',
    keys: [
      'Parabola Media',
      'Hoodyaeva Photography',
      'iRadio Bishkek',
      'All Kids WebSite',
      'mSpeed Landing'],
    labels: ['Opened', 'Resolved'],
    values: [[5, 7], [5, 3], [2, 5], [8, 0], [6, 0]],
  },
  {
    id: 'widget-agents-vertical',
    type: Vertical,
    title: 'Teams',
    keys: [
      'Tommy Wiseau',
      'Greg Sestero',
      'Juliette Danielle',
      'Robyn Paris',
      'Dan Janjigian',
      'Philip Haldiman'],
    labels: ['Opened', 'Resolved'],
    values: [[3, 8], [3, 8], [3, 8], [3, 8], [3, 8], [3, 8]],
  }
]