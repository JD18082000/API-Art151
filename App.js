let device;
console.log(navigator)



if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}

function failure(){
    console.log('Could not connect MIDI');
}

function upadateDevices(event){
    //console.log(event);

}
function success(midiAccess){
    midiAccess.addEventListener('statechange', upadateDevices);

    const inputs = midiAccess.inputs;
    for (var output of midiAccess.outputs.values()){
        device = output;
        console.log('Output device selected', device);
    }
    inputs.forEach((input) => {
     input.addEventListener ('midimessage', handleInput);
    })
}
function handleInput(input){
    console.log(input);

    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];
    //console.log(command);
    //console.log(note);
    //console.log(velocity);

    switch (command) {
        case 144:
        if (velocity > 0){
            noteOn(note);
        } else {
            noteOff(note);
        }
        break;
    /* case 128:
        noteOff(note);
        brek;
    }*/
    }
}

function noteOn(note){
    console.log(`note:${note} //on`);
    if (note == 99){
    document.getElementById("testelm").innerHTML = "Note 99 is on"
    }
}

function noteOff(note){
    console.log(`note:${note} //off`);
    if (note == 99){
        document.getElementById("testelm").innerHTML = "Back To Normal"
    }
}