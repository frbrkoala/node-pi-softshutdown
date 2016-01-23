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

        // Create a new `button` hardware instance.
        // This example allows the button module to
        // create a completely default instance
        button = new five.Button(7);

        // Inject the `button` hardware into
        // the Repl instance's context;
        // allows direct command line access
        //board.repl.inject({
        //  button: button
        //});

        // Button Event API

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