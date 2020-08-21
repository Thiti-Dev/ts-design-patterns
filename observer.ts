interface Subject{
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifyObservers();
}

interface Observer{
    update(temperature: number)
}


class WeatherStation implements Subject{
    private tempearature: number;
    private observers: Observer[] = [];

    setTemperature(temp:number){
        console.log("Weatherstation: new temperature measurement: " + temp)
        this.tempearature = temp
        this.notifyObservers();
    }

    registerObserver(o: Observer) {
        this.observers.push(o);
    }
    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o)
        this.observers.splice(index,1)
    }
    notifyObservers() {
        for(let observer of this.observers){
            observer.update(this.tempearature)
        }
    }
}

class TemperatureDisplay implements Observer{
    private subject: Subject
    constructor(weatherStation: Subject){
        this.subject = weatherStation;
        weatherStation.registerObserver(this)
    }
    update(temperature: number) {
        console.log('Temp Display: Pending updating the display')
    }
    
}

class Fan implements Observer{
    private subject: Subject
    constructor(weatherStation: Subject){
        this.subject = weatherStation;
        weatherStation.registerObserver(this)
    }
    update(temperature: number) {
        if(temperature > 25){
            console.log('FAN: more than 25celcius detected, fan is turning on')
        }else{
            console.log('FAN: pause')
        }
    }
    
}

let weatherStation = new WeatherStation()
let tempDisplay = new TemperatureDisplay(weatherStation)
let fan = new Fan(weatherStation)
weatherStation.setTemperature(25)