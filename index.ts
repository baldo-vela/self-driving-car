import { getObstacleEvents } from './computer-vision';

// ----- Types -----
interface AutonomousCar {
    isRunning?: boolean
}

interface AutonomousCarProps {
    isRunning?: boolean
}

// ----- Classes -----
class Car implements AutonomousCar {
    isRunning;
    
    constructor(props: AutonomousCarProps) {

    }
}

// ----- Executables -----