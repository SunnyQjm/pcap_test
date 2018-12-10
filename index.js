const pcap = require('pcap'),
    tcpTracker = new pcap.TCPTracker(),
    pcap_session = pcap.createSession('eno1', "ip proto \\tcp");

tcpTracker.on('session', function (session) {
    console.log("Start of session between " + session.src_name + " and " + session.dst_name);
    session.on('end', function (session) {
        console.log("End of TCP session between " + session.src_name + " and " + session.dst_name);
    });
});

console.log(pcap.findalldevs());

pcap_session.on('packet', function (raw_packet) {
    const packet = pcap.decode.packet(raw_packet);
    tcpTracker.track_packet(packet);
});