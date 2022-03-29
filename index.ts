import { getObstacleEvents } from './computer-vision';

// ----- Types -----
interface AutonomousCar {
    isRunning?: boolean
}

// ----- Classes -----
class Car implements AutonomousCar {
    isRunning;
}

// ----- Executables -----