//cria classes
class Overworld {
	constructor(config) {
		this.element=config.element;//grab games container
		this.canvas=this.element.querySelector(".game-canvas");//find canvas
		this.ctx=this.canvas.getContext("2d");
	}
	init(){
	console.log("hello from the Oveerworld",this);
	}
}