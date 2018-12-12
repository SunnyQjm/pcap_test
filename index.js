const pcap = require('pcap'),
    tcpTracker = new pcap.TCPTracker(),
    pcap_session = pcap.createSession('eno1', "ether proto \\ip");

tcpTracker.on('session', function (session) {
    console.log("Start of session between " + session.src_name + " and " + session.dst_name);
    session.on('end', function (session) {
        console.log("End of TCP session between " + session.src_name + " and " + session.dst_name);
    });
});

// console.log(pcap.findalldevs());

function PcapHeader(raw_header) {
    this.tv_sec = raw_header.readUInt32LE(0, true);
    this.tv_usec = raw_header.readUInt32LE(4, true);
    this.caplen = raw_header.readUInt32LE(8, true);
    this.len = raw_header.readUInt32LE(12, true);
}

pcap_session.on('packet', function (raw_packet) {
    // console.log(raw_packet);
    const packet = pcap.decode.packet(raw_packet);
    let pcap_header = new PcapHeader(raw_packet.header);
    console.log('----');
    console.log(pcap_header.len);
    console.log(raw_packet.buf.length);
    console.log(packet.payload.payload.payload.data.length);
    console.log('----');
    // console.log(JSON.stringify(packet));
    // tcpTracker.track_packet(packet);
});