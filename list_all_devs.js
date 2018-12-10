const pcap = require('pcap');

/**
 *
 [ { name: 'eno1',
    addresses: [ <1 empty item>, [Object], [Object], [Object] ] },
 { name: 'any',
    description: 'Pseudo-device that captures on all interfaces',
    addresses: [] },
 { name: 'lo',
    addresses: [ <1 empty item>, [Object], [Object] ],
    flags: 'PCAP_IF_LOOPBACK' },
 { name: 'nflog',
    description: 'Linux netfilter log (NFLOG) interface',
    addresses: [] },
 { name: 'nfqueue',
    description: 'Linux netfilter queue (NFQUEUE) interface',
    addresses: [] },
 { name: 'usbmon1',
    description: 'USB bus number 1',
    addresses: [] },
 { name: 'usbmon2',
    description: 'USB bus number 2',
    addresses: [] } ]
 */
const devs = pcap.findalldevs();

console.log(JSON.stringify(devs));

