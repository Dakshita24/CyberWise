const quizzes = {
    "Introduction to cybersecurity": [
      {
        question: "What is cybersecurity?",
        options: [
          "Protection of computer systems from theft or damage",
          "Building faster computers",
          "Creating new software applications",
          "Managing large databases"
        ],
        correctAnswer: 0
      },
      {
        question: "Which of the following is NOT a common cybersecurity threat?",
        options: ["Phishing", "Malware", "Firewall", "Ransomware"],
        correctAnswer: 2
      },
      {
        question: "What does 'https' in a URL indicate?",
        options: [
          "The website is not secure",
          "The website is secure",
          "The website is for government use only",
          "The website is under maintenance"
        ],
        correctAnswer: 1
      },
      {
        question: "What is the primary goal of cybersecurity?",
        options: [
          "To make the internet faster",
          "To create new software",
          "To protect digital assets and information",
          "To design computer hardware"
        ],
        correctAnswer: 2
      },
      {
        question: "Which of these is a good practice for cybersecurity?",
        options: [
          "Using the same password for all accounts",
          "Sharing your login information with friends",
          "Regularly updating your software",
          "Clicking on all links in emails"
        ],
        correctAnswer: 2
      }
    ],
    
    "CIA triad": [
      {
        question: "What does CIA stand for in the context of cybersecurity?",
        options: [
          "Computer Intelligence Agency",
          "Confidentiality, Integrity, Availability",
          "Cybersecurity Information Assurance",
          "Critical Infrastructure Assessment"
        ],
        correctAnswer: 1
      },
      {
        question: "Which component of the CIA triad ensures that data is accurate and trustworthy?",
        options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
        correctAnswer: 1
      },
      {
        question: "What does 'Availability' in the CIA triad refer to?",
        options: [
          "Keeping data secret",
          "Ensuring data is not tampered with",
          "Making sure authorized users can access data when needed",
          "Verifying user identities"
        ],
        correctAnswer: 2
      },
      {
        question: "Which CIA triad component is most directly related to encryption?",
        options: ["Confidentiality", "Integrity", "Availability", "All of the above"],
        correctAnswer: 0
      },
      {
        question: "A hacker modifying data in a company's database primarily violates which part of the CIA triad?",
        options: ["Confidentiality", "Integrity", "Availability", "None of the above"],
        correctAnswer: 1
      }
    ],
    
    "Types of networks": [
      {
        question: "Which type of network typically covers a small area like a home or small office?",
        options: ["LAN", "WAN", "MAN", "PAN"],
        correctAnswer: 0
      },
      {
        question: "What does WAN stand for?",
        options: [
          "Wireless Area Network",
          "Wide Area Network",
          "Web Access Network",
          "World Area Network"
        ],
        correctAnswer: 1
      },
      {
        question: "Which network type connects devices within close physical proximity?",
        options: ["LAN", "WAN", "MAN", "PAN"],
        correctAnswer: 3
      },
      {
        question: "What type of network does the Internet represent?",
        options: ["LAN", "WAN", "MAN", "PAN"],
        correctAnswer: 1
      },
      {
        question: "Which network type is typically used to connect multiple LANs across a city?",
        options: ["WAN", "CAN", "MAN", "SAN"],
        correctAnswer: 2
      }
    ],
    
    "Data security": [
      {
        question: "What is data encryption?",
        options: [
          "Deleting data",
          "Copying data",
          "Converting data into a code to prevent unauthorized access",
          "Compressing data to save space"
        ],
        correctAnswer: 2
      },
      {
        question: "Which of these is NOT a common method of data backup?",
        options: ["Cloud storage", "External hard drives", "Printing all data on paper", "Network-attached storage (NAS)"],
        correctAnswer: 2
      },
      {
        question: "What does 'data at rest' refer to?",
        options: [
          "Data being transmitted over a network",
          "Data stored on a device or storage system",
          "Data that is no longer needed",
          "Data being actively processed"
        ],
        correctAnswer: 1
      },
      {
        question: "Which of these is a best practice for data security?",
        options: [
          "Sharing passwords with trusted colleagues",
          "Using public Wi-Fi for sensitive transactions",
          "Implementing multi-factor authentication",
          "Keeping all data in one centralized location"
        ],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of data masking?",
        options: [
          "To permanently delete data",
          "To compress data for storage",
          "To hide sensitive data while preserving its format",
          "To encrypt data for transmission"
        ],
        correctAnswer: 2
      }
    ],
    
    "Identifying Phishing": [
      {
        question: "What is phishing?",
        options: [
          "A type of fish",
          "A cybersecurity attack that tricks users into revealing sensitive information",
          "A method of encrypting data",
          "A type of computer virus"
        ],
        correctAnswer: 1
      },
      {
        question: "Which of these is a common sign of a phishing email?",
        options: [
          "The sender's email matches the company they claim to be from",
          "The email asks you to confirm personal information",
          "The email is personalized with your name",
          "The email has perfect grammar and spelling"
        ],
        correctAnswer: 1
      },
      {
        question: "What should you do if you suspect an email is a phishing attempt?",
        options: [
          "Reply asking for more information",
          "Click on the links to investigate",
          "Forward it to your friends to warn them",
          "Report it to your IT department or email provider"
        ],
        correctAnswer: 3
      },
      {
        question: "Which of these is NOT a typical goal of phishing?",
        options: [
          "Stealing login credentials",
          "Installing malware on your device",
          "Tricking you into sending money",
          "Improving your computer's performance"
        ],
        correctAnswer: 3
      },
      {
        question: "What is 'spear phishing'?",
        options: [
          "Phishing attempts targeting specific individuals or organizations",
          "Using spears to catch fish",
          "A type of encryption",
          "A method of securing emails"
        ],
        correctAnswer: 0
      }
    ],
    
    "Malwares": [
      {
        question: "What does 'malware' stand for?",
        options: [
          "Malicious Hardware",
          "Malicious Software",
          "Manipulated Warranty",
          "Managed Wares"
        ],
        correctAnswer: 1
      },
      {
        question: "Which of these is NOT a type of malware?",
        options: ["Virus", "Trojan Horse", "Firewall", "Ransomware"],
        correctAnswer: 2
      },
      {
        question: "What type of malware encrypts your files and demands payment for the decryption key?",
        options: ["Adware", "Spyware", "Ransomware", "Worm"],
        correctAnswer: 2
      },
      {
        question: "Which malware type is designed to secretly record information from your computer?",
        options: ["Virus", "Worm", "Trojan Horse", "Spyware"],
        correctAnswer: 3
      },
      {
        question: "How does a computer worm typically spread?",
        options: [
          "Through email attachments",
          "By infecting program files",
          "Through network connections without user intervention",
          "By hiding in legitimate software"
        ],
        correctAnswer: 2
      }
    ],
    
    "IOT : Internet of Things": [
      {
        question: "What does IoT stand for?",
        options: [
          "Internet of Things",
          "Input Output Technology",
          "Integrated Online Tools",
          "Internal Operating Terminals"
        ],
        correctAnswer: 0
      },
      {
        question: "Which of these is an example of an IoT device?",
        options: [
          "A standard desktop computer",
          "A smart thermostat",
          "A traditional landline phone",
          "A non-digital watch"
        ],
        correctAnswer: 1
      },
      {
        question: "What is a primary security concern with IoT devices?",
        options: [
          "They consume too much electricity",
          "They are too expensive",
          "They can be difficult to update and patch",
          "They are too large and bulky"
        ],
        correctAnswer: 2
      },
      {
        question: "What is the 'edge' in IoT edge computing?",
        options: [
          "The sharpest part of an IoT device",
          "The boundary of the network closest to the data source",
          "The most advanced IoT technology",
          "The outer casing of IoT devices"
        ],
        correctAnswer: 1
      },
      {
        question: "Which of these is NOT a common use of IoT in cybersecurity?",
        options: [
          "Network monitoring",
          "Physical access control",
          "Creating stronger passwords",
          "Environmental monitoring in data centers"
        ],
        correctAnswer: 2
      }
    ],
    
    "Incident response": [
      {
        question: "What is the primary goal of incident response in cybersecurity?",
        options: [
          "To prevent all future incidents",
          "To identify and punish the attackers",
          "To minimize damage and recover quickly",
          "To upgrade all software systems"
        ],
        correctAnswer: 2
      },
      {
        question: "Which of these is typically the first step in incident response?",
        options: ["Recovery", "Preparation", "Containment", "Analysis"],
        correctAnswer: 1
      },
      {
        question: "What does 'containment' refer to in incident response?",
        options: [
          "Storing all data in containers",
          "Limiting the impact of the incident",
          "Containing employees in the office during an incident",
          "Putting the attackers in jail"
        ],
        correctAnswer: 1
      },
      {
        question: "Why is documentation important in incident response?",
        options: [
          "To share the incident on social media",
          "To impress management with detailed reports",
          "To help with legal proceedings and future prevention",
          "To make the incident response process longer"
        ],
        correctAnswer: 2
      },
      {
        question: "What is a 'playbook' in the context of incident response?",
        options: [
          "A book about sports strategies",
          "A predefined set of procedures for specific types of incidents",
          "A list of all employees involved in the response",
          "A record of past security breaches"
        ],
        correctAnswer: 1
      }
    ],
    
    "Wireshark": [
      {
        question: "What is Wireshark primarily used for?",
        options: [
          "Editing photos of sharks",
          "Network protocol analysis and packet capture",
          "Creating wireless networks",
          "Protecting against malware"
        ],
        correctAnswer: 1
      },
      {
        question: "Which of these is NOT a common use of Wireshark?",
        options: [
          "Troubleshooting network issues",
          "Detecting network intrusion attempts",
          "Creating strong passwords",
          "Analyzing network protocols"
        ],
        correctAnswer: 2
      },
      {
        question: "What type of data does Wireshark capture?",
        options: [
          "Only encrypted data",
          "Only unencrypted data",
          "Both encrypted and unencrypted network traffic",
          "Only metadata about network traffic"
        ],
        correctAnswer: 2
      },
      {
        question: "What does the term 'packet' refer to in the context of Wireshark?",
        options: [
          "A small package delivered by mail",
          "A unit of data transmitted over a network",
          "A type of network cable",
          "A security certificate"
        ],
        correctAnswer: 1
      },
      {
        question: "Which of these is an ethical concern when using Wireshark?",
        options: [
          "It might slow down the network",
          "It can be used to capture sensitive information without consent",
          "It requires a powerful computer to run",
          "It's difficult to install"
        ],
        correctAnswer: 1
      }
    ], 
    "Network Topologies":[
        {
            question: "Which network topology connects all devices to a single cable?",
            options: [
              "Star topology",
              "Ring topology",
              "Bus topology",
              "Mesh topology"
            ],
            correctAnswer: 2
          },
          {
            question: "In which topology does each device connect to every other device in the network?",
            options: [
              "Star topology",
              "Full mesh topology",
              "Tree topology",
              "Ring topology"
            ],
            correctAnswer: 1
          },
          {
            question: "What is a major advantage of a star topology?",
            options: [
              "It uses the least amount of cable",
              "It's the most secure topology",
              "Failure of one node doesn't affect others",
              "It provides the fastest data transfer rates"
            ],
            correctAnswer: 2
          },
          {
            question: "Which topology is most commonly used in WANs (Wide Area Networks)?",
            options: [
              "Bus topology",
              "Ring topology",
              "Mesh topology",
              "Star topology"
            ],
            correctAnswer: 2
          },
          {
            question: "In a hybrid topology that combines star and bus topologies, what is the central device usually called?",
            options: [
              "Hub",
              "Switch",
              "Router",
              "Bridge"
            ],
            correctAnswer: 1
          }
    ]


  };