//
// ─── VGA TO DVI ─────────────────────────────────────────────────────────────────
//

interface VGA{
    connectToVGASlot() : void
}

interface DVI{
    conntectToDVISlot(): void
}

class Gtx950 implements VGA{
    connectToVGASlot(): void {
        console.log('Connecting to VGA slot')
    }
    
}

class Gtx1660 implements DVI{
    conntectToDVISlot(): void {
        console.log('Connecting to DVI slot')
    }
    
}

class VgaToDviConverter implements DVI{
    public vgaCard: VGA;
    constructor(gpu: VGA){
        this.vgaCard = gpu
    }

    conntectToDVISlot(): void {
        // Logic goes here
        console.log('Converting VGA to DVI slot compatibility')
        console.log('Now connecting VGA with DVI slot')
    }
    
}

let graphic_card_950 = new Gtx950()
graphic_card_950.connectToVGASlot()

let vga_converter = new VgaToDviConverter(graphic_card_950)
vga_converter.conntectToDVISlot()