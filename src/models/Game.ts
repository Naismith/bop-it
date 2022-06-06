export class Game {
  public validMoves = ["bop", "pull", "twist"] as const;
  private level = 1;
  private audio = {
    bopIt: new Audio("/sfx/Bop_C.wav"),
    twistIt: new Audio("/sfx/Twist_C.wav"),
    pullIt: new Audio("/sfx/Pull_C.wav"),
  };

  constructor() {
    this.audio.bopIt.preload = "auto";
    this.audio.twistIt.preload = "auto";
    this.audio.pullIt.preload = "auto";
    // var audio = new Audio("");
  }

  bopIt = () => {
    this.audio.bopIt.play();
  };

  twistIt = () => {
    this.audio.twistIt.play();
  };

  pullIt = () => {
    this.audio.pullIt.play();
  };
}
