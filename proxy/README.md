##### Install [MacPorts](https://www.macports.org)

##### Install Tor

`sudo port install tor`

##### Set PATH [for MacPorts](https://guide.macports.org/chunked/installing.shell.html)

`export PATH=/opt/local/bin:/opt/local/sbin:$PATH`

##### Config File

`/opt/local/etc/tor/torrc`

##### Example Configs

`SOCKSPolicy accept *`

`MaxCircuitDirtiness 60`

`CircuitIdleTimeout 90`
