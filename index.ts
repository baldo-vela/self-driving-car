import { getObstacleEvents } from './computer-vision';

// ----- Types -----
interface AutonomousCar {
    isRunning?: boolean
    respond: (events: Events) => void;
}

interface AutonomousCarProps {
    isRunning?: boolean
}

interface Events {
    [e: string]: boolean;
}

// ----- Classes -----
class Car implements AutonomousCar {
    isRunning;
    
    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning
    }

    respond(events: Events) {
        if (this.isRunning) {
            return console.log('Running...');
        } else {
            return console.log('Halted!');
        }
    }
}

// ----- Executables -----
const autonomousCar =  new Car(
    {
        isRunning: true
    }
)

autonomousCar.respond(getObstacleEvents());