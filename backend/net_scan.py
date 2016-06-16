#!/usr/bin/python

import sys, getopt, nmap

def usage():
    print 'sword_nmap.py -t <target> -p <port range>'

def main(argv):
    target=''
    port_range=''
    try:
        opts, args = getopt.getopt(argv,'ht:p:',['target=','ports='])
    except getopt.GetoptError:
        usage()
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            usage()
            sys.exit()
        elif opt in ('-t', '--target'):
            target = arg
        elif opt in ('-p', '--ports'):
            port_range = arg

    if target == '':
        usage()
        sys.exit(1)
    if port_range == '':
        usage()
        sys.exit(1)

    scan(target, port_range)

def scan (target, port_range):
    print ('Scanning %s %s' %(target, port_range))
    nm = nmap.PortScanner()
    nm.scan(target, port_range)
    nm.command_line()

    for host in nm.all_hosts():
        print('Host : %s (%s): %s' % (host, nm[host].hostname(), nm[host].state()))

        for proto in nm[host].all_protocols():
            lport = nm[host][proto].keys()
            lport.sort()

            for port in lport:
                print ('\t%s port %s %s' % (proto, port, nm[host][proto][port]['state']))

if __name__ == '__main__':
    main(sys.argv[1:])

