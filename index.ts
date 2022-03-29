import { getObstacleEvents } from './computer-vision';

// ---------- Types -------------------------------------------------------
interface AutonomousCar {
    isRunning?: boolean
    respond: (events: Events) => void;
}

interface AutonomousCarProps {
    isRunning?: boolean
    steeringControl: Steering;
}

interface Events {
    [e: string]: boolean;
}

interface Control {
    // This type and its type member will allow us to enforce that all controls for our cars must have an .execute() method.
    execute: (command: string) => void;
}

interface Steering extends Control {
    turn: (direction: string) => void;
}

// ---------- Classes -------------------------------------------------------
class Car implements AutonomousCar {
    isRunning;
    steeringControl;
    
    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }

    respond(events: Events) {
        Object.keys(events).forEach(eventKey => {
            if (events[eventKey] === false) return;
            if (eventKey === 'ObstacleLeft') {
                this.steeringControl.turn('right');
            }
            if (eventKey === 'ObstacleRight') {
                this.steeringControl.turn('left');
            }
        })
        if (this.isRunning) {
            return console.log('Running...');
        } else {
            return console.log('Halted!');
        }
    }
}

class SteeringControl implements Steering {
    execute(command: string) {
        console.log(`Executing: ${command}`);
    }

    turn(direction: string) {
        this.execute(`Turn ${direction}`);
    }

}

// ---------- Executables -------------------------------------------------------
const steering = new SteeringControl();
steering.turn('right'); // Tests if "Executes: Turn right"

const autonomousCar =  new Car(
    {
        isRunning: true,
        steeringControl: steering,
    }
)

autonomousCar.respond(getObstacleEvents());