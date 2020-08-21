class FireAlarm{
    public switchOn(){
        console.log('FireAlarm is ringing')
    }
    public switchOff(){
        console.log('FireAlarm is off , and stay silent')
    }
}

class Phone{
    public call(num:number){
        console.log('Phone is calling ' + num)
    }
    public hangUp(){
        console.log('Phone is putting to sleep mode , awaiting for a new call')
    }
}

class EmergencyLightLeadWay{
    public turnOn(){
        console.log('Emergency light is leading the way to the safe exit')
    }
    public turnOff(){
        console.log('Emergency light turned off')
    }
}

class HomeGuard{
    private fireAlarm : FireAlarm;
    private phone :Phone
    private emergencyLightLeadWay : EmergencyLightLeadWay
    
    constructor(fireAlarm:FireAlarm,phone: Phone,emergencyLightLeadWay : EmergencyLightLeadWay){
        this.fireAlarm = fireAlarm
        this.phone = phone
        this.emergencyLightLeadWay = emergencyLightLeadWay
    }

    public alertOn(){
        this.fireAlarm.switchOn();
        this.emergencyLightLeadWay.turnOn();
        this.phone.call(911);
    }
    public alertOff(){
        this.fireAlarm.switchOff();
        this.emergencyLightLeadWay.turnOff();
        this.phone
    }
}

let fireAlarm = new FireAlarm();
let phone = new Phone();
let emergencyLightLeadWay = new EmergencyLightLeadWay();

let homeguard = new HomeGuard(fireAlarm,phone,emergencyLightLeadWay)
homeguard.alertOn()