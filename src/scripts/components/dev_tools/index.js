import { createDevTools } from 'redux-devtools';

import ChartMonitor from 'redux-devtools-chart-monitor';
import SliderMonitor from 'redux-slider-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const Monitor = (
  <DockMonitor toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q">
    <ChartMonitor />
  </DockMonitor>
);

// const Monitor = (
//   <DockMonitor toggleVisibilityKey='ctrl-h'
//                changePositionKey='ctrl-q'>
//     <LogMonitor />
//   </DockMonitor>
// );

// const Monitor = (
//   <DockMonitor toggleVisibilityKey='ctrl-h'
//     changePositionKey='ctrl-q'
//     defaultPosition='bottom'
//     defaultSize={0.15}>
//     <SliderMonitor keyboardEnabled />
//   </DockMonitor>
// );

export default createDevTools(Monitor);
