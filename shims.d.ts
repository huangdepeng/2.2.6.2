// Auto-generated. Do not edit.



    //% color=50 weight=8
    //% icon="\uf1eb"
declare namespace Mbit_IR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="on |%btn| button pressed" shim=Mbit_IR::ir_received_left_event
    function ir_received_left_event(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="connect ir receiver to %pin" shim=Mbit_IR::ir_init
    function ir_init(pin: hicbit_Port): void;
}

// Auto-generated. Do not edit. Really.
