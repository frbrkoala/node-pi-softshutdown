var five = require('johnny-five');
var raspi = require('raspi-io');
var exec = require('child_process').exec;
var cmd = 'shutdown -P now';

try {
    var board = new five.Board({
        io: new raspi(),
        repl: false,
        debug: false
    });
} catch (err) {
    console.log('Error: ' + err);
};

try {
    board.on('ready', function() {

        // Create a new "button" hardware instance with onlut on pin 7.
        button = new five.Button(7);

        // "down" the button is pressed
        button.on("down", function() {
            //  console.log('Button pressed');
            exec(cmd, function(error, stdout, stderr) {
                // command output is in stdout
            });
        });

    });
} catch (err) {
    console.log('Error: ' + err);
};