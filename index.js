"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
// ---------- Classes -------------------------------------------------------
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        Object.keys(events).forEach(eventKey => {
            if (events[eventKey] === false)
                return;
            if (eventKey === 'ObstacleLeft') {
                this.steeringControl.turn('right');
            }
            if (eventKey === 'ObstacleRight') {
                this.steeringControl.turn('left');
            }
        });
        if (this.isRunning) {
            return console.log('Running...');
        }
        else {
            return console.log('Halted!');
        }
    }
}
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(`Turn ${direction}`);
    }
}
// ---------- Executables -------------------------------------------------------
const steering = new SteeringControl();
steering.turn('right'); // Tests if "Executes: Turn right"
const autonomousCar = new Car({
    isRunning: true,
    steeringControl: steering,
});
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
