import gallo from "../../src/assets/gallo.jpeg";
import mush from "../assets/mush.png";
import quiz from "../assets/quiz.png";
import jollof from "../assets/jollof.jpeg";
import hunan from "../assets/hunan.jpeg";
import vegetables from "../assets/vegetables.jpg";
import iphonei from "../assets/iphonei.png";
import iphoneP from "../assets/iphoneP.png";
import macbook from "../assets/macbook.png";
import watch from "../assets/watch.png";
import all from "../assets/all.png";
import only from "../assets/only.png";

export const Items = [
  {
    gadgets: [
      {
        id: 1,
        img: watch,
        discover: "new arrival",
        icon: "addd",
        name: "apple watch series 10",
        price: "$24.32",
      },
      {
        id: 2,
        img: iphonei,
        discover: "best seller",
        icon: 1234,
        name: "iphone 16 pro",
        price: "$25.90",
      },
      {
        id: 3,
        img: iphoneP,
        discover: "few left",
        icon: 123445,
        name: "iphone 16 plus",
        price: "$30.56",
      },
      {
        id: 4,
        img: macbook,
        discover: "best seller",
        icon: 12345,
        name: "macbook m4 pro",
        price: "$12.16",
      },
    ],
  },

  {
    gadgetItems: [
      {
        id: 1,
        name: "Mikrotik RB750UP 5-Port Switch/Router, 4 POE + 1 USB",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches"],
        currency: "NGN",
        description: `
            5 x Ethernet 10/100 Mbit/s  
            Atheros 7241 CPU, 400MHz  
            32MB DDR SDRAM  
            64MB NAND  
            USB 2.0 Port  
            PoE output on port 2-5 (max. 500mA per Port)  
            RouterOS L4 licence  
            Includes enclosure and power supply  

            **Special Features:**  
            - MikroTik RouterBOARD RB750UP can power up to 4 connected devices via passive PoE.  
            - The output voltage is the same voltage applied to RB750UP (between 8 and 30V).  
            - Maximum output current per port: 500mA.  

            **MikroTik RouterOS v5.x (Level 4 License)**  
            - Free upgrades to MikroTik RouterOS v6.x  
            - License never expires  
            - Valid for one installation  
            - Unlimited number of interfaces  
            - Supports AP, wireless station/client, point-to-point, and point-to-multipoint setups  
            - RIP, OSPF, and BGP support  
            - Unlimited number of EoIP tunnels  
            - Up to 200 PPPoE, PPTP, L2TP, and OVPN tunnels  
            - Unlimited VLAN interfaces  
            -
            - 
                `,
        warranty: "645675",
        reviews: [],
        price: "109,901.10",
        discountPercentage: 12,
        quantity: 54,
        images: [only, all],
        manufacturer: "daniel",
        slug: "",
        specification: [{ id: 1, key: "game", value: "seeee" }],
      },
      {
        id: 2,
        name: "Cisco 110 Series 16-Port Gigabit Unmanaged Switch (SG110-16)",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
        currency: "NGN",
        description: `
        **Device Type:**  
        - Switch – 16 ports – Unmanaged  
        
        **Enclosure Type:**  
        - Desktop / Rack-mountable – 1U  
        
        **Ports:**  
        - 16x 10/100/1000 Mbps Ethernet ports  
        
        **Switching Capacity:**  
        - 32 Gbps  
        - Forwarding Performance (64-byte packet size): 23.8 Mpps  
        
        **MAC Address Table Size:**  
        - 8000 entries  
        
        **Jumbo Frame Support:**  
        - Yes  
        
        **Flow Control & Features:**  
        - Layer 2 switching  
        - Auto-negotiation, Auto-uplink (Auto MDI/MDI-X)  
        - Weighted Round Robin (WRR) queuing  
        - Quality of Service (QoS)  
        - Cable diagnostics, Loop detection  
        - Energy Efficient Ethernet (EEE)  
          `,
        warranty: "",
        reviews: [],
        price: "233,176.25",
        discountPercentage: 0,
        quantity: 1,
        images: [all, only],
        manufacturer: "Cisco",
        slug: "cisco-110-series-16-port-gigabit-unmanaged-switch-sg110-16",
        specification: [{ id: 1, key: "gameboy", value: "playstation" }],
      },

      //    id:3,
      //    name:"Mikrotik RB750UP 5-Port Switch/Router, 4 POE + 1 USB",
      //    categories:["Networking", "Wired Networking", "Switches"],
      //    description:`5 x Ethernet 10/100 Mbit/s
      //    Atheros 7241 CPU, 400MHz
      //   32MB DDR SDRAM
      //   64MB NAND
      //   USB 2.0 Port
      //   PoE output on port 2-5 (max. 500mA per Port)
      //   RouterOS L4 licence
      //   Includes enclosure and power supply `,
      //   'specification':`- MikroTik RouterBOARD RB750UP can power up to 4 connected devices via passive PoE.
      // - The output voltage is the same voltage applied to RB750UP (between 8 and 30V).
      // - Maximum output current per port: 500mA.

      // **MikroTik RouterOS v5.x (Level 4 License)**
      // - Free upgrades to MikroTik RouterOS v6.x
      // - License never expires
      // - Valid for one installation
      // - Unlimited number of interfaces
      // - Supports AP, wireless station/client, point-to-point, and point-to-multipoint setups
      // - RIP, OSPF, and BGP support
      // - Unlimited number of EoIP tunnels
      // - Up to 200 PPPoE, PPTP, L2TP, and OVPN tunnels
      // - Unlimited VLAN interfaces
      // -`
      //   ,
      //   warranty: "645675",
      //   reviews: [],
      //   price: 109901.10,
      //   discountPercentage: 12,
      //   quantity: 54,
      //   images: [all],

      {
        id: 3,
        name: "Cisco 110 Series 24-Port Unmanaged Network Switch (SF110-24)",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
        currency: "NGN",
        description: `
        Ports: 
        - 24 x Fast Ethernet Ports  
        
        Performance:
        - 4.8 Gbps Switching Capacity  
        - 3.6 Mpps Forwarding Capacity  
        
        Network Standards:
        - IEEE 802.3, 802.3u, 802.3ab, 802.3z, 802.3x, 802.3af  
        
        Memory:
        - 128MB RAM  
        - 128MB Flash Memory          
        
          Design & Features:
        - Fanless, Rack-Mountable Design  
        - Supports Jumbo Frames up to 9216 bytes  
          `,
        warranty: "",
        reviews: [],
        price: "135,953.58",
        discountPercentage: 0,
        quantity: 1,
        images: [all, only],
        manufacturer: "Cisco",
        slug: "cisco-110-series-24-port-unmanaged-network-switch-sf110-24",
        specification: [{ id: 1, key: "you", boy: "dush" }],
      },

      {
        id: 4,
        name: "Cisco Catalyst 2960X-24TD-L Network Switch, 24 Gigabit Ethernet Ports, 2 10G SFP+ Uplink Ports",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
        currency: "NGN",
        description: `
        **Overview:**  
        The Cisco Catalyst 2960X-24TD-L is a fixed-configuration, stackable Gigabit Ethernet switch designed for enterprise-class access in campus and branch applications. It runs on Cisco IOS Software and supports simple device and network management. The switch includes advanced Layer 2 and Layer 3 features, optional PoE+ power, and enhanced application visibility, network reliability, and resiliency.  
        
        **Features:**  
        - **Ethernet Port Configuration:** 24 x 10/100/1000 Gigabit Ethernet ports, 2 x 10G SFP+ uplink ports  
        - **Device Management:** Web UI, over-the-air access via Bluetooth, and CLI (command-line interface)  
        - **Console Access:** SNMP (Simple Network Management Protocol) and RJ-45 or USB console access  
        - **Security Features:** 802.1X, Switched Port Analyzer (SPAN), and Bridge Protocol Data Unit (BPDU) Guard  
        - **Warranty:** Enhanced limited lifetime warranty  
          `,
        warranty: "Enhanced Limited Lifetime Warranty",
        reviews: [],
        price: "1.492,413.97",
        discountPercentage: 0,
        quantity: 1,
        images: [all, only],
        manufacturer: "Cisco",
        slug: "cisco-catalyst-2960x-24td-l-network-switch",
        specification: [{ id: 1, key: "device port", value: "game" }],
      },

      {
        id: 5,
        name: "Cisco Catalyst WS-C3560V2-24TS-S Network Switch, 24 10/100 + 2 SFP + IPB",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
        currency: "NGN",
        description: `
        **Overview:**  
        The Cisco Catalyst 3560V2-24TS-S is an energy-efficient, next-generation Layer 3 Fast Ethernet switch designed for enterprise, retail, and branch-office environments. It supports Cisco EnergyWise technology, allowing companies to measure and manage power consumption to reduce costs and carbon footprint. With enhanced security, routing, and management capabilities, this switch is ideal for unified networks handling data, voice, and video.  
        
        **Features:**  
        - **Port Configuration:** 24 x 10/100 Ethernet ports + 2 SFP-based Gigabit Ethernet ports  
        - **Switching Capacity:** 32 Gbps  
        - **Performance:** Supports up to 1000 VLANs and Switched Virtual Interfaces (SVIs)  
        - **Routing Protocols:** RIP-1, RIP-2, HSRP, Static IP Routing  
        - **Management & Security:**  
          - Remote Management: SNMP 1, 2c, 3, RMON 1, 2, 3, 9, Telnet, HTTPS, TFTP, SSH  
          - Security Features: 802.1X authentication, MAC address filtering, Dynamic ARP Inspection (DAI), SSH v2  
        - **Layer 2 & Layer 3 Features:**  
          - VLAN support, IGMP snooping, Spanning Tree Protocol (STP, RSTP, MSTP)  
          - DHCP snooping, Dynamic Trunking Protocol (DTP), Port Aggregation Protocol (PAgP)  
        - **Software Included:** Cisco IOS IP Base  
        - **Form Factor:** Rack-mountable (1U)  
          `,
        warranty: "Standard Cisco Limited Warranty",
        reviews: [],
        price: "2.457,282.10",
        discountPercentage: 0,
        quantity: 1,
        images: [all, only],
        manufacturer: "Cisco",
        manufacturerPartNumber: "WS-C3560V2-24TS-S",
        slug: "cisco-catalyst-ws-c3560v2-24ts-s-network-switch",
        specification: [
          { id: 1, key: "Product Type", value: "Layer 3 Managed Switch" },
          { id: 2, key: "MAC Address Table Size", value: "12K entries" },
          { id: 3, key: "Jumbo Frame Support", value: "9016 bytes" },
          {
            id: 4,
            key: "Performance",
            value: "Up to 1000 Switched Virtual Interfaces (SVIs)",
          },
          {
            id: 5,
            key: "Connectivity Interfaces",
            value:
              "24 x 10/100 Ethernet (RJ-45), 2 x SFP (mini-GBIC), 1 x Console (RJ-45)",
          },
          { id: 6, key: "Power Supply", value: "Internal (AC 120/230V, 50/60Hz)" },
          {
            id: 7,
            key: "Redundant Power System",
            value: "RPS Connector Available",
          },
          {
            id: 8,
            key: "Supported Standards",
            value:
              "IEEE 802.3, 802.3u, 802.3z, 802.3ab, 802.1D, 802.1Q, 802.1p, 802.1x, 802.1s, 802.1w, 802.3x, 802.3ad (LACP)",
          },
          {
            id: 9,
            key: "Routing Protocols",
            value: "RIP-1, RIP-2, HSRP, Static IP Routing",
          },
          {
            id: 10,
            key: "Security & Encryption",
            value: "SSL, SSH v2, Kerberos, RADIUS, TACACS+",
          },
          { id: 11, key: "Dimensions", value: "44.3 cm x 29.5 cm x 4.4 cm" },
          { id: 12, key: "Weight", value: "3.7 kg" },
          {
            id: 13,
            key: "MTBF (Mean Time Between Failures)",
            value: "377,260 hours",
          },
          {
            id: 14,
            key: "Compliance Standards",
            value:
              "CE, GOST, CISPR 24, NOM, EN55024, EN55022 Class A, CISPR 22, EMC, UL 60950-1, IEC 60950-1, EN 60950-1, FCC Part 15 A",
          },
        ],
      },

      {
        id: 6,
        name: "Cisco SF110D-16HP | 110 Series 16-Port Unmanaged PoE Network Switch",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
        currency: "NGN",
        description: `Overview:  
      The Cisco SF110D-16HP is a reliable, high-performance 16-port Fast Ethernet switch designed for small businesses. It offers **plug-and-play** operation with no setup required and supports **Power over Ethernet (PoE)** on 8 of its 16 ports. The switch ensures seamless connectivity for IP phones, wireless access points, security cameras, and other PoE-enabled devices, making it an excellent choice for businesses looking for affordability, ease of use, and energy efficiency.
      
      **Features:**  
      - **Port Configuration:** 16 x Fast Ethernet (10/100) ports, 8 with PoE support  
      - **Switching Capacity:** 3.2 Gbps  
      - **Forwarding Capacity:** 1.4 Mpps  
      - **Power Over Ethernet (PoE):** Supports IEEE 802.3af PoE standard  
      - **Energy Efficiency:** 802.3az (Energy Efficient Ethernet) support to reduce power consumption  
      - **Fanless Design:** Silent operation, rack-mountable form factor  
      - **Plug-and-Play:** No configuration or software installation needed  
      - **Auto Cable Detection:** Automatically adjusts for incorrect cables  
      - **Built-in QoS & Traffic Handling:**  
        - Prioritizes voice/video traffic for smoother performance  
        - Supports loop detection to prevent network interruptions  
        - Fast store-and-forward switching to filter out damaged packets`,
        warranty: "Standard Cisco Limited Warranty",
        reviews: [],
        price: "291,810.36 ",
        discountPercentage: 0,
        quantity: 1,
        images: [all, only],
        manufacturer: "Cisco",
        manufacturerPartNumber: "SF110D-16HP",
        slug: "cisco-sf110d-16hp-110-series-16-port-unmanaged-poe-switch",
        specification:[
        {
          id: 1,
          key: "Product Type",
          value: "Unmanaged PoE Network Switch",
        },
        {
          id: 2,
          key: "Ports",
          value: "16 x Fast Ethernet (10/100 Mbps), 8 PoE-enabled",
        },
        { id: 3, key: "Switching Capacity", value: "3.2 Gbps" },
        { id: 4, key: "Forwarding Capacity", value: "1.4 Mpps" },
        {
          id: 5,
          key: "Power Over Ethernet (PoE)",
          value: "Supports IEEE 802.3af on 8 ports",
        },
        { id: 6, key: "RAM & Flash Memory", value: "128MB RAM / 128MB Flash" },
        {
          id: 7,
          key: "Energy Efficiency",
          value: "802.3az Energy Efficient Ethernet",
        },
        { id: 8, key: "Jumbo Frame Support", value: "9216 bytes" },
        { id: 9, key: "Design", value: "Fanless, Rack-Mountable" },
        {
          id: 10,
          key: "QoS & Traffic Control",
          value:
            "Integrated QoS prioritization for voice/video, loop detection, and cable diagnostics",
        },
        {
          id: 11,
          key: "Compliance Standards",
          value: "IEEE 802.3, 802.3u, 802.3ab, 802.3z, 802.3x, 802.3af, 802.3az",
        },
        { id: 12, key: "Dimensions", value: "279.4 mm x 170 mm x 44 mm" },
        { id: 13, key: "Weight", value: "1.5 kg" },
      ],
      },

    

      {
        id: 7,
        name: "Cisco SG110-16HP-NA 16 Ports Gigabit POE unmanaged Switch",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
        currency: "NGN",
        description: `Affordable, Easy-to-Use Switches for Small Business Networks, with Zero Configuration Required
        
        Give your office network a boost of speed and performance at a low price that takes almost no time to set up. Easily build a highly reliable network to connect your computers, printers, copiers and other office equipment. If your business is like most small companies, you do not have an IT staff to set up your network for you. Now you can have a high-performance, business-class office network that just works, right out of the box, with the Cisco 110 Series Unmanaged Switches. Users, workgroups, labs, departments or growing offices can now deliver large amounts of multimedia, image and video information across the network in almost no time.
        
        Cisco 110 Series Unmanaged Switches deliver basic network connectivity and reliability for small businesses that is easy on the budget and without all the complexity. These switches provide all of the features, expandability and investment protection you expect from Cisco, with no installation software and nothing to configure. Just plug it in, connect your computers and other business equipment and get to work.
        
        Cisco 110 Series Unmanaged Switches part of the Cisco Small Business networking solutions, are a line of unmanaged switches that provide wire-speed Fast Ethernet and Gigabit Ethernet connectivity to connect your small business office. Available in desktop and rack-mount models, these switches are designed to suit any office space with basic network needs and to optimize power efficiency. They use less power and provide the robust, reliable connectivity your business demands, as well as support for advanced features such as quality of service (QoS), loop detection and cable diagnostics, all in a switch that you can set up yourself in minutes. A business-class, affordable network solution, Cisco 110 Series switches bring the proven reliability and investment protection of Cisco networking solutions to your small business.
        
        **Cisco SG110-16HP Specifications**
        
        **Standards**  
        IEEE 802.3 10BASE-T Ethernet, IEEE 802.3u 100BASE-TX Fast Ethernet, IEEE 802.3ab 1000BASE-T Gigabit Ethernet, IEEE 802.3z Gigabit Ethernet, IEEE 802.3x Flow Control, 802.1p priority, Energy Efficient Ethernet, 802.3af, Power over Ethernet
        
        **Cabling type**  
        Category 5e or better
        
        **LED indicators**  
        System/PWR, link/activity, 100M, PoE, Max PoE, cable diagnostics, loop detection, gigabit, mini-GBIC
        
        **Power supply**  
        Internal, universal: 10-240VAC, 50-60 Hz
        
        **Lock slot**  
        Slot for Kensington lock
        
        **Ports**  
        16x RJ-45 connectors for 10BASE-T/100BASE-TX/1000BASE-T ports
        
        **Power over Ethernet (PoE)**  
        Power Dedicated to PoE: 64W  
        Number of PoE Ports: 8
        
        **Fanless**  
        Yes
        
        **Switching capacity**  
        32 Gbps
        
        **Forwarding capacity**  
        23.8 mpps (million packets per second) based on 64-byte packets
        
        **Head-of-line (HOL) blocking**  
        HOL blocking prevention
        
        **Jumbo frame**  
        9216 bytes
        
        **Quality of service (QoS)**  
        802.1p priority-based, 4 hardware queues, priority queuing and weighted round-robin (WRR)
        
        **Loop detection**  
        Helps discover loops in the network to avoid broadcast storms
        
        **Cable diagnostics**  
        Quickly identify and troubleshoot network cable faults and/or shorts
        
        **Mounting options**  
        Desktop or Rack mount
        
        **Physical security lock**  
        Kensington lock slot
        
        **Minimum Requirements**  
        Devices supporting 802.3 Ethernet, 802.3u Faster Ethernet, or 802.3ab Gigabit Ethernet  
        Cat5 or better Ethernet cable  
        Network interface card for each computer
        
        **Compliance/certifications**  
        UL (UL 60950), CSA (CSA 22.2), CE mark, FCC Part 15 (CFR 47) Class A, FCC Class B
        
        **Operating temperature**  
        32 to 104 deg. F (0 to 40 deg. C)
        
        **Storage temperature**  
        -4 to 158 deg. F (-20 to 70 deg. C)
        
        **Operating humidity**  
        10% to 90%, relative, noncondensing
        
        **Storage humidity**  
        5% to 90%, relative, noncondensing
        
        **System memory**  
        128-MB RAM  
        128-MB Flash
        
        **Dimensions (WxDxH)**  
        11 x 1.75 x 6.7″ (279.40 x 44.45 x 170.18mm)
        
        **Weight**  
        4.15 lbs (1.88kg)`,
        warranty: "Standard Cisco Limited Warranty",
        reviews: [],
        price: "327,553.28",
        discountPercentage: 0,
        quantity: 1,
        images: [only, all],
        manufacturer: "Cisco",
        manufacturerPartNumber: "SG110-16HP-NA",
        slug: "cisco-sg110-16hp-na-16-ports-gigabit-poe-unmanaged-switch",
        specification: [
          { id: 1, key: "Product Type", value: "Unmanaged PoE Network Switch" },
          {
            id: 2,
            key: "Ports",
            value: "16 x Gigabit Ethernet (10/100/1000 Mbps), 8 PoE-enabled",
          },
          { id: 3, key: "Switching Capacity", value: "32 Gbps" },
          { id: 4, key: "Forwarding Capacity", value: "23.8 Mpps" },
          {
            id: 5,
            key: "Power Over Ethernet (PoE)",
            value: "Supports IEEE 802.3af on 8 ports",
          },
          { id: 6, key: "RAM & Flash Memory", value: "128MB RAM / 128MB Flash" },
          {
            id: 7,
            key: "Energy Efficiency",
            value: "802.3az Energy Efficient Ethernet",
          },
          { id: 8, key: "Jumbo Frame Support", value: "9216 bytes" },
          { id: 9, key: "Design", value: "Fanless, Rack-Mountable" },
          {
            id: 10,
            key: "QoS & Traffic Control",
            value:
              "Integrated QoS prioritization for voice/video, loop detection, and cable diagnostics",
          },
          {
            id: 11,
            key: "Compliance Standards",
            value: "IEEE 802.3, 802.3u, 802.3ab, 802.3z, 802.3x, 802.3af, 802.3az",
          },
          { id: 12, key: "Dimensions", value: "279.40 mm x 44.45 mm x 170.18 mm" },
          { id: 13, key: "Weight", value: "1.88 kg" },
        ],
      },
      //       {
      //         id:9,
      //         name: "Cisco SG110-24 | 24 Ports Gigabit Switch",
      //   cartQuantity: 1,
      //   categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
      //   currency: "NGN",
      //   description: `
      // **Device Type:**
      // - Switch – 24 ports – Unmanaged

      // **Enclosure Type:**
      // - Desktop / Rack-mountable

      // **Ports:**
      // - 24x 10/100/1000 Mbps Ethernet ports

      // **Power over Ethernet:**
      // - Supports Power over Ethernet (PoE) models for devices such as IP phones, access points, etc.

      // **Switching Capacity:**
      // - 48 Gbps
      // - Forwarding Performance (64-byte packet size): High

      // **Reliability & Expandability:**
      // - High reliability for small businesses
      // - Simple plug-and-play setup with no configuration required

      // **QoS & Advanced Features:**
      // - Quality of Service (QoS)
      // - Loop detection
      // - Cable diagnostics

      // **Power Efficiency:**
      // - Energy-efficient Ethernet (EEE) for reduced power consumption

      // **Installation:**
      // - No installation software needed, easy to set up
      //   `,
      //   warranty: "",
      //   reviews: [],
      //   price: 283886.97,
      //   discountPercentage: 0,
      //   quantity: 1,
      //  images: [all],
      //   manufacturer: "Cisco",
      //  slug: "cisco-sg110-24-24-ports-gigabit-switch",
      //   specifications: `
      //     {
      //       "key": "Ports",
      //       "value": "24x 10/100/1000 Mbps Ethernet ports"
      //     },
      //     {
      //       "key": "Power over Ethernet",
      //       "value": "Supports Power over Ethernet (PoE)"
      //     },
      //     {
      //       "key": "Switching Capacity",
      //       "value": "48 Gbps"
      //     },
      //     {
      //       "key": "Power Efficiency",
      //       "value": "Energy Efficient Ethernet (EEE)"
      //     },
      //     {
      //       "key": "Enclosure Type",
      //       "value": "Desktop / Rack-mountable"
      //     }
      //   `,
      //       },

      {
        id: 8,
        name: "Cisco SG110-24 | 24 Ports Gigabit Switch",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
        currency: "NGN",
        description: `
  **Device Type:**  
  - Switch – 24 ports – Unmanaged  
  
  **Enclosure Type:**  
  - Desktop / Rack-mountable  
  
  **Ports:**  
  - 24x 10/100/1000 Mbps Ethernet ports  
  
  **Power over Ethernet:**  
  - Supports Power over Ethernet (PoE) models for devices such as IP phones, access points, etc.  
  
  **Switching Capacity:**  
  - 48 Gbps  
  - Forwarding Performance (64-byte packet size): High  
  
  **Reliability & Expandability:**  
  - High reliability for small businesses  
  - Simple plug-and-play setup with no configuration required  
  
  **QoS & Advanced Features:**  
  - Quality of Service (QoS)  
  - Loop detection  
  - Cable diagnostics  
  
  **Power Efficiency:**  
  - Energy-efficient Ethernet (EEE) for reduced power consumption  
  
  **Installation:**  
  - No installation software needed, easy to set up  
    `,
        warranty: "",
        reviews: [],
        price: "283,886.97",
        discountPercentage: 0,
        quantity: 1,
        images: [all, only],
        manufacturer: "Cisco",
        slug: "cisco-sg110-24-24-ports-gigabit-switch",
        specification: [
          { id: 1, key: "Ports", value: "24x 10/100/1000 Mbps Ethernet ports" },
          {
            id: 2,
            key: "Power over Ethernet",
            value: "Supports Power over Ethernet (PoE)",
          },
          { id: 3, key: "Switching Capacity", value: "48 Gbps" },
          {
            id: 4,
            key: "Power Efficiency",
            value: "Energy Efficient Ethernet (EEE)",
          },
          { id: 5, key: "Enclosure Type", value: "Desktop / Rack-mountable" },
        ],
      },

      {
        id: 9,
        name: "Cisco WS-C2960-24TC-L Catalyst 2960 24-port 10/100 Switch With 2x SFP",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
        currency: "NGN",
        description: `
  Catalyst 2960 Series Intelligent Ethernet Switches are a new family of fixed-configuration standalone devices that provide desktop Fast Ethernet and Gigabit Ethernet connectivity, enabling enhanced LAN services for entry-level enterprise, mid-market, and branch office networks. The Catalyst 2960 Series offers integrated security, including network admission control (NAC), advanced quality of service (QoS), and resiliency to deliver intelligent services for the network edge.
    `,
        warranty: "Limited lifetime warranty",
        reviews: [],
        price: "1.228,672.63",
        discountPercentage: 0,
        quantity: 1,
        images: [only, all],
        manufacturer: "Cisco",
        slug: "cisco-ws-c2960-24tc-l-catalyst-2960-24-port-10-100-switch-with-2x-sfp",
        specification: [
          { id: 1, key: "Device Type", value: "Switch - 24 ports - Managed" },
          { id: 2, key: "Enclosure Type", value: "Rack-mountable - 1U" },
          { id: 3, key: "Ports", value: "24 x 10/100 + 2 x combo Gigabit SFP" },
          {
            id: 4,
            key: "Performance",
            value:
              "Switching capacity: 32 Gbps, Forwarding performance (64-byte packet size): 6.5 Mpps",
          },
          { id: 5, key: "MAC Address Table Size", value: "8K entries" },
          {
            id: 6,
            key: "Remote Management Protocol",
            value:
              "SNMP 1, SNMP 2, RMON 1, RMON 2, RMON 3, RMON 9, Telnet, SNMP 3, SNMP 2c, HTTP, HTTPS, TFTP, SSH",
          },
          {
            id: 7,
            key: "Compliant Standards",
            value:
              "IEEE 802.3, IEEE 802.3u, IEEE 802.3z, IEEE 802.1D, IEEE 802.1Q, IEEE 802.3ab, IEEE 802.1p, IEEE 802.3x, IEEE 802.3ad (LACP), IEEE 802.1w, IEEE 802.1x, IEEE 802.1s, IEEE 802.3ah, IEEE 802.1ab (LLDP)",
          },
          { id: 8, key: "Power", value: "AC 120/230 V (50/60 Hz)" },
          {
            id: 9,
            key: "Dimensions (WxDxH)",
            value: "44.5 cm x 23.63 cm x 4.4 cm",
          },
          { id: 10, key: "Weight", value: "3.63 kg" },
        ],
      },

      {
        id: 10,

        name: "Cisco WS-C2960-24TC-S Catalyst 2960 24-port 10/100 Switch",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
        currency: "NGN",
        description:
          "Cisco Catalyst 2960 Intelligent Ethernet Switches enable entry-level enterprise, medium-sized, and branch office networks to provide enhanced LAN services. This family of fixed-configuration, standalone devices provide desktop 10/100 Fast Ethernet and 10/100/1000 Gigabit Ethernet connectivity.",
        warranty: "Limited lifetime warranty",
        reviews: [],
        price: "1.228,672.63",
        discountPercentage: 0,
        quantity: 1,
        images: [all, only],
        manufacturer: "Cisco",
        slug: "cisco-ws-c2960-24tc-s-catalyst-2960-24-port-10-100-switch",
        specification: [
          { id: 1, key: "Device Type", value: "Switch – 24 ports – Managed" },
          { id: 2, key: "Enclosure Type", value: "Rack-mountable – 1U" },
          { id: 3, key: "Ports", value: "24 x 10/100 + 2 x combo Gigabit SFP" },
          {
            id: 4,
            key: "Performance",
            value:
              "Switching capacity : 16 Gbps | Forwarding performance (64-byte packet size) : 6.5 Mpps",
          },
          { id: 5, key: "MAC Address Table Size", value: "8K entries" },
          {
            id: 6,
            key: "Remote Management Protocol",
            value:
              "SNMP 1, SNMP 2, RMON 1, RMON 2, Telnet, SNMP 3, SNMP 2c, HTTP, HTTPS, TFTP, SSH-2",
          },
          {
            id: 7,
            key: "Features",
            value:
              "Layer 2 switching, auto-sensing per device, DHCP support, auto-negotiation, VLAN support, auto-uplink (auto MDI/MDI-X), IGMP snooping, Syslog support, DiffServ support, Broadcast Storm Control, Multicast Storm Control, Unicast Storm Control, Rapid Spanning Tree Protocol (RSTP) support, Multiple Spanning Tree Protocol (MSTP) support, Dynamic Trunking Protocol (DTP) support, Port Aggregation Protocol (PAgP) support, Quality of Service (QoS), Link Aggregation Control Protocol (LACP), Port Security, MAC Address Notification",
          },
          {
            id: 8,
            key: "Compliant Standards",
            value:
              "IEEE 802.3, IEEE 802.3u, IEEE 802.3z, IEEE 802.1D, IEEE 802.1Q, IEEE 802.3ab, IEEE 802.1p, IEEE 802.3x, IEEE 802.3ad (LACP), IEEE 802.1w, IEEE 802.1x, IEEE 802.1s, IEEE 802.3ah, IEEE 802.1ab (LLDP)",
          },
          { id: 9, key: "Power", value: "AC 120/230 V (50/60 Hz)" },
          {
            id: 10,
            key: "Dimensions (WxDxH)",
            value: "44.5 cm x 23.6 cm x 4.4 cm",
          },
          { id: 11, key: "Weight", value: "3.65 kg" },
        ],
      },
      {
        id: 11,

        name: "Cisco WS-C2960+24PC-L Catalyst 2960 with 24Ports 370W POE Switch, 2 x SFP LAN Base",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
        currency: "NGN",
        description:
          "The Cisco Catalyst 2960-Plus Series Switches are fixed-configuration Fast Ethernet switches that provide enterprise-class Layer 2 switching for branch offices, conventional workspaces, and infrastructure applications. They enable reliable and secure operations with lower total cost of ownership through a range of Cisco IOS software features, including Cisco Catalyst SmartOperations.",
        warranty:
          "Enhanced limited lifetime hardware warranty (E-LLW), providing next-business-day replacement",
        reviews: [],
        price: "1,154,024.64",
        discountPrice: 1942840.33,
        discountPercentage: 40,
        quantity: 1,
        images: [all, only],
        manufacturer: "Cisco",
        slug: "cisco-ws-c2960-plus-24pc-l-catalyst-2960-24ports-370w-poe-switch-2-x-sfp-lan-base",
        specification: [
          { id: 1, key: "Device Type", value: "Switch – 24 ports – Managed" },
          { id: 2, key: "Enclosure Type", value: "Rack-mountable – 1U" },
          {
            id: 3,
            key: "Ports",
            value: "24 x Fast Ethernet + 2 x SFP or 1000BASE-T",
          },
          { id: 4, key: "Power", value: "370W Power over Ethernet (PoE)" },
          { id: 5, key: "IOS Software", value: "LAN Base" },
          {
            id: 6,
            key: "Security Features",
            value:
              "Port Security, Dynamic ARP Inspection, IP Source Guard, Private VLAN Edge",
          },
          {
            id: 7,
            key: "Quality of Service (QoS)",
            value:
              "Four egress queues per port, Strict priority queuing, Shaped Round Robin (SRR), Weighted Tail Drop (WTD)",
          },
          {
            id: 8,
            key: "Cisco EnergyWise",
            value: "Energy management for connected devices",
          },
          { id: 9, key: "Dimensions (WxDxH)", value: "44.5 cm x 23.6 cm x 4.4 cm" },
          { id: 10, key: "Weight", value: "3.65 kg" },
        ],
      },

      {
        id: 12,
        name: "Cisco WS-C2960+24PC-S Catalyst 2960 with 24Ports 370W POE Switch, 2 x SFP LAN Lite",
        cartQuantity: 1,
        categories: ["Networking", "Wired Networking", "Switches", "Cisco"],
        currency: "NGN",
        description:
          "The Cisco Catalyst 2960-Plus Series Switches are fixed-configuration Fast Ethernet switches that provide enterprise-class Layer 2 switching for branch offices, conventional workspaces, and infrastructure applications. They enable reliable and secure operations with lower total cost of ownership through a range of Cisco IOS software features, including Cisco Catalyst SmartOperations.",
        warranty:
          "Enhanced limited lifetime hardware warranty (E-LLW), providing next-business-day replacement",
        reviews: [],
        price: "908,992.04",
        discountPrice: 1579243.53,
        discountPercentage: 42,
        quantity: 1,
        images: [all, only],
        manufacturer: "Cisco",
        slug: "cisco-ws-c2960-plus-24pc-s-catalyst-2960-24ports-370w-poe-switch-2-x-sfp-lan-lite",
        specification: [
          { id: 1, key: "Device Type", value: "Switch  24 ports Managed" },
          { id: 2, key: "Enclosure Type", value: "Rack-mountable  1U" },
          {
            id: 3,
            key: "Ports",
            value: "24 x Fast Ethernet + 2 x SFP or 1000BASE-T",
          },
          { id: 4, key: "Power", value: "370W Power over Ethernet (PoE)" },
          { id: 5, key: "IOS Software", value: "LAN Lite" },
          {
            id: 6,
            key: "Security Features",
            value:
              "Port Security, Dynamic ARP Inspection, IP Source Guard, Private VLAN Edge",
          },
          {
            id: 7,
            key: "Quality of Service (QoS)",
            value:
              "Four egress queues per port, Strict priority queuing, Shaped Round Robin (SRR), Weighted Tail Drop (WTD)",
          },
          {
            id: 8,
            key: "Cisco EnergyWise",
            value: "Energy management for connected devices",
          },
          { id: 9, key: "Dimensions (WxDxH)", value: "44.5 cm x 23.6 cm x 4.4 cm" },
          { id: 10, key: "Weight", value: "3.65 kg" },
        ],
       
      },
    
      
    ]

  }
  

]
  

export const Slide = [
  {
    img: watch,
    description: "",
    specification: [
      {
        id: 1,
        key: "great",
        value: "zero",
      },
    ],
  },
  {
    img: iphonei,
    description: "",
    specification: [
      {
        id: 1,
        key: "you",
        value: "dush",
      },
    ],
  },
  {
    img: iphoneP,
    description: "game",
    specification: [
      {
        id: 1,
        key: "daniel",
        value: "shonbe",
      },
    ],
  },
  {
    img: macbook,
    description: "macbook",
    specification: [
      {
        id: 1,
        key: "grace",
        value: "cream",
      },
    ],
  },
  {
    img: watch,
    description: "yup",
    specification: [
      {
        id: 1,
        key: "obinna",
        value: "lunch",
      },
    ],
  },
  {
    img: iphonei,
    description: "",
    specification: [
      {
        id: 1,
        key: "muze",
        value: "you",
      },
    ],
  },
];
