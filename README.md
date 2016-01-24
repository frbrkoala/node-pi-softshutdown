# node-pi-softshutdown
Script on Node JS for soft shut down button for [Raspberry Pi](http://www.raspberrypi.org/), inspired by the article [Adding an On/Off switch to your Raspberry Pi](http://www.raspberry-pi-geek.com/Archive/2013/01/Adding-an-On-Off-switch-to-your-Raspberry-Pi).

It is based on [Johnny-Five](https://github.com/rwaldron/johnny-five) and [Raspi-IO](https://github.com/nebrius/raspi-io), so all the limitations and requirements are applied here. Script supports the Model B Rev 1, Model B Rev 2, Model A+, Model B+, Raspberry Pi 2 Model B, and Raspbery Pi Zero, but does _not_ support the Model A.

## System Requirements

- Raspberry Pi Model B Rev 1 or newer (sorry Model A users)
- Raspbian Jessie
- GCC 4.8 or newer (for Raspi-IO)
- Node 0.10 or newer
- Button, connected to GPIO4 (which is pin# 7 accroding to the [pin information doc](https://github.com/nebrius/raspi-io/wiki/Pin-Information))
The schematics can be found in [this project on Fritzing](http://fritzing.org/projects/node-pi-softshutdown).

## Installation

Clone this git repository:

```
git clone https://github.com/frbrkoala/node-pi-softshutdown.git
```
Install all dependencies:

```
cd node-pi-softshutdown && sudo npm install
```

**Warning**: Raspi-IO module requires GCC 4.8 or newer. This means that you should be running Raspbian Jessie or newer, released in September of 2015.

## Usage

To test the script, you may just run it:

``` 
sudo node app.js
```
## Running script when booting up
If you want this script to run during the startup time, you will need to have johnny-five and raspi-io modules to be installed globally:

```
sudo npm install -g johnny-five raspi-io
```

Then edit /etc/rc.local with your favorite editor:

```
sudo nano /etc/rc.local
```
And add the following line rigth before "exit 0":

```
su pi -c 'sudo /usr/bin/node /home/pi/node-pi-softshutdown/app.js > /dev/null'
```

Reboot the system

```
sudo reboot
```

License
=======

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
