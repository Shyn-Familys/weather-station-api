<h1>Weather Station API for WeeWX</h1>
<img alt="weather icon" src="Weather_Icons_-_hi_tsra.svg.png">


## Description

This is a NodeJS application that will provide a REST API for the data collected by 
[WeeWX](http://www.weewx.com/).

For years WeeWX has been, in my opinion, one of the top tools for running your own
personal weather station (PWS). It integrates with almost every weather like device
out there. It has served me well for years running on a 
[RaspberryPI](https://www.raspberrypi.org/) in my basement collecting data. However
it is not known for its UI. It also does not expose a web API so that it can integrate
with one.

So I decided it was time for it to have one so I could also build a proper modern web
UI for it (coming soon). 

## Installation

Check out the source code to a location you plan to run it from
```bash
$ git checkout https://github.com/jkworth/weather-station-api.git

$ cd weather-station-api

$ npm i
```

#### RaspberryPI

On the PI you will have issues with the Sqlite3 node module. To install the application
on, as I did, on the same device that WeeWX is running you will need to `sudo` a number
of the calls. If you are not then you may omit them when running the commands below.

```bash
$ cd /etc

$ sudo git checkout https://github.com/jkworth/weather-station-api.git

$ cd weather-station-api

$ sudo npm install sqlite3 --build-from-source

$ sudo npm i
```

## Configuration

All of the configuration is done through a single file. `.env`. The file is located
in the root of the `weather-station-api` folder.

```bash
# This is the port that the API will be exposed from 
SERVER_PORT=3000

# A prefix to the URL. This be any valid URL portion but can not be blank.
# if unwanted then set to /
URL_PREFIX=/api/v1

# Absolute/Relative path to the weewx.sdb database file
DATABASE_FILE=/var/lib/weewx/weewx.sdb

# timezone the data within the database is using
DATA_TIMEZONE=UTC

# timezone the station is running in
STATION_TIMEZONE=America/New_York
```

## Manually Running the app

```bash
# see below for how to set up as systmed service
$ npm run start:prod
```

## Run as systemd service (RaspberryPI)
```bash
$ sudo nano /lib/systemd/system/weather-station-api.service
```

Add the following to the file:
```text
[Unit]
Description=weewx weather station rest API
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/etc/weather-station-api/
ExecStart=/usr/bin/npm run start:prod
Restart=on-failure

[Install]
WantedBy=multi-user.target
```
---
```bash
# Enable service to start on boot
$ sudo systemctl enable weather-station-api

# Start the service
$ sudo systemctl start weather-station-api
```

## Support

If you find any issues or have suggestions please create an issue in the 
[github project](https://github.com/jkworth/weather-station-api/issues)

## Stay in touch

- Author - [jkworth]() (programmer, pilot, and lover of weather and technology)
