console.log(navigator)



if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}

function failure(){
    console.log('Could not connect MIDI');
}

function upadateDevices(event){
    console.log(event);

}
function success(midiAccess){
    console.log(midiAccess);
    midiAccess.addEventListener('statechange', upadateDevices);
}