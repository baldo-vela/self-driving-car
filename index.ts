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

    respond: (events: Events) => void;
}

// ----- Executables -----
const autonomousCar =  new Car(
    {
        isRunning: true
    }
)

console.log(`Is the Autonomous Car working? \n`, autonomousCar.isRunning);