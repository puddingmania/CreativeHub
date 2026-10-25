window.LoopTimeline={
  bars:16,
  steps:16,
  totalFrames:256,
  barFromBeat(beat){return Math.floor(beat/this.steps)%this.bars},
  stepFromBeat(beat){return ((beat%this.steps)+this.steps)%this.steps},
  frameFromBeat(beat){return this.barFromBeat(beat)*this.steps+this.stepFromBeat(beat)}
};
