const participantsData = [
  [
  {
    "Title": "Mr.",
    "First name": "Luca",
    "Last name": "Mateo David",
    "Email": "lucamateodavid@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Moro Islamic Libertation Front (MILF) (observer)",
    "ID": "FDRML240064"
  },
  {
    "Title": "Ms.",
    "First name": "Amelie",
    "Last name": "Longeac",
    "Email": "itsamelielongeac@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "United Arab Emirates",
    "ID": "FDRLE240073"
  },
  {
    "Title": "Ms.",
    "First name": "Mara",
    "Last name": "Corpodeanu",
    "Email": "maraandreea.c@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "Hungarian Workers Peasants' Party / Syrian Arab Republic",
    "ID": "FDRMC240018"
  },
  {
    "Title": "Ms.",
    "First name": "Andreea",
    "Last name": "Roman",
    "Email": "andreea.roman765@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "Hungarian People's Republic / Hashemite Kingdom of Jordan",
    "ID": "FDRAR240004"
  },
  {
    "Title": "Ms.",
    "First name": "Nicoleta",
    "Last name": "Dumitru",
    "Email": "9andreea9@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "Republic of Philippines",
    "ID": "FDRND240035"
  },
  {
    "Title": "Ms.",
    "First name": "Iris",
    "Last name": "Bâlc",
    "Email": "iris.balc@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "United States of America",
    "ID": "FDRBI240120"
  },
  {
    "Title": "Ms.",
    "First name": "Clara",
    "Last name": "Chirita",
    "Email": "clara.chirita27@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "Federal Republic of Nigeria",
    "ID": "FDRCT240068"
  },
  {
    "Title": "Ms.",
    "First name": "Mihnea",
    "Last name": "Baluta",
    "Email": "costinius1@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "Socialist Republic of Romania / Republic of Egypt",
    "ID": "FDRBM240059"
  },
  {
    "Title": "Mr.",
    "First name": "Andrei-Luca",
    "Last name": "Frățiloiu",
    "Email": "andreiluca.fratiloiu@gmail.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "United States of America",
    "ID": "FDRAL240026"
  },
  {
    "Title": "Mr.",
    "First name": "Cristian",
    "Last name": "Popa",
    "Email": "valentin.popa2006@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Republic of Italy",
    "ID": "FDRCP240003"
  },
  {
    "Title": "Mr.",
    "First name": "Iulian",
    "Last name": "Cigoreanu",
    "Email": "cigoreanu.iulian08@gmail.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "United Kingdom of Great Britain and Northern Ireland",
    "ID": "FDRIN240021"
  },
  {
    "Title": "Mr.",
    "First name": "Anda",
    "Last name": "Firoiu",
    "Email": "firoiuanda30@gmail.com",
    "Committee": "Security Council",
    "Country": "Burkina Faso",
    "ID": "FDRAR240047"
  },
  {
    "Title": "Ms.",
    "First name": "Maria",
    "Last name": "Neagoe",
    "Email": "ana5veverita@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Arab Republic of Egypt",
    "ID": "FDRMN240090"
  },
  {
    "Title": "Ms.",
    "First name": "Edy",
    "Last name": "Grigore",
    "Email": "grigoredy@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Vatican City",
    "ID": "FDREG240035"
  },
  {
    "Title": "Ms.",
    "First name": "Zoe",
    "Last name": "Mihai",
    "Email": "zoemaria0408@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Hellenic Republic",
    "ID": "FDRZM200708"
  },
  {
    "Title": "Ms.",
    "First name": "Maria",
    "Last name": "Tatu",
    "Email": "mtatu0607@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Republic of Mali",
    "ID": "FDRMT200927"
  },
  {
    "Title": "Ms.",
    "First name": "Bogdan",
    "Last name": "Motohoi",
    "Email": "bobo06m@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "Arab Republic of Egypt",
    "ID": "FDRBO200648"
  },
  {
    "Title": "Mr.",
    "First name": "Jordan",
    "Last name": "Shriki",
    "Email": "shrikijordan@gmail.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "State of Israel",
    "ID": "FDRJS200759"
  },
  {
    "Title": "Mr.",
    "First name": "Stefan",
    "Last name": "Jurebie",
    "Email": "stefanjurebie@gmail.com",
    "Committee": "Security Council",
    "Country": "Republic of Niger",
    "ID": "FDRSJ200482"
  },
  {
    "Title": "Mr.",
    "First name": "Gabriela",
    "Last name": "Ion",
    "Email": "iongabriela1704@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Democratic Republic of the Congo",
    "ID": "FDRGI200615"
  },
  {
    "Title": "Ms.",
    "First name": "Maia",
    "Last name": "Pripiṣ",
    "Email": "maia.pripis@gmail.com",
    "Committee": "Security Council",
    "Country": "Syrian Arab Republic",
    "ID": "FDRMP200293"
  },
  {
    "Title": "Ms.",
    "First name": "Maria-Ines",
    "Last name": "Vecserdi",
    "Email": "maria-ines.vecserdi@cnih.ro",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "Ukraine",
    "ID": "FDRVI200162"
  },
  {
    "Title": "Ms.",
    "First name": "Mihnea",
    "Last name": "Gheorghe",
    "Email": "gheorghe.mihnea.alex@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "United States of America",
    "ID": "FDRMG200408"
  },
  {
    "Title": "Mr.",
    "First name": "Presila Stefani",
    "Last name": "Kovacheva",
    "Email": "kovachev08@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "People's Republic of China",
    "ID": "FDRPS200537"
  },
  {
    "Title": "Ms.",
    "First name": "Stefan",
    "Last name": "Burbulea",
    "Email": "mihac2300@gmail.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "Republic of Yemen",
    "ID": "FDRBST240094"
  },
  {
    "Title": "Mr.",
    "First name": "Madalina-Ioana",
    "Last name": "Costache",
    "Email": "madalina.ioanacostache@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "Republic of India",
    "ID": "FDRCM240032"
  },
  {
    "Title": "Ms.",
    "First name": "Mahy",
    "Last name": "Abdelkhalek",
    "Email": "many.ibrahimhassan@gmail.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "People's Republic of China",
    "ID": "FDRMA240011"
  },
  {
    "Title": "Ms.",
    "First name": "Elena",
    "Last name": "Moldoveanu",
    "Email": "kenko6100@gmail.com",
    "Committee": "Security Council",
    "Country": "Russian Federation",
    "ID": "FDREM240012"
  },
  {
    "Title": "Ms.",
    "First name": "Wedad",
    "Last name": "Kassas",
    "Email": "wedad.kassas@isb.ro",
    "Committee": "Economic and Social I — Labor",
    "Country": "People's Republic of Bangladesh",
    "ID": "FDRWK240013"
  },
  {
    "Title": "Ms.",
    "First name": "Anisia",
    "Last name": "Zaican",
    "Email": "anisia.zaican@cnih.ro",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "United States of America",
    "ID": "FDRAZ240014"
  },
  {
    "Title": "Ms.",
    "First name": "Mara Silvia",
    "Last name": "Butuc",
    "Email": "marasilviabutuc@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Republic of Niger",
    "ID": "FDRMS240098"
  },
  {
    "Title": "Ms.",
    "First name": "Gabriel",
    "Last name": "Lotfy",
    "Email": "gabriel.lotfy@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "State of Japan",
    "ID": "FDRGL240041"
  },
  {
    "Title": "Mr.",
    "First name": "Giorgio",
    "Last name": "Sforza",
    "Email": "giorgio.sforza@isb.ro",
    "Committee": "Economic and Social I — Labor",
    "Country": "State of Qatar",
    "ID": "FDRGS240034"
  },
  {
    "Title": "Mr.",
    "First name": "Andrei Florin",
    "Last name": "Dascalu",
    "Email": "andreidascalu12345@gmail.com",
    "Committee": "Security Council",
    "Country": "Arab Republic of Egypt",
    "ID": "FDRAD240085"
  },
  {
    "Title": "Mr.",
    "First name": "Alexandra",
    "Last name": "Bunea",
    "Email": "alexandra.bunea26@gmail.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "Republic of Panama",
    "ID": "FDRAB240095"
  },
  {
    "Title": "Ms.",
    "First name": "Sebastian-Florian",
    "Last name": "Petcu",
    "Email": "petcusebastian2021@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "Kingdom of Bahrain",
    "ID": "FDRSF240026"
  },
  {
    "Title": "Mr.",
    "First name": "Silvi",
    "Last name": "Koleva",
    "Email": "silvi.v.koleva@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Islamic Republic of Mauritania",
    "ID": "FDRSK24x082"
  },
  {
    "Title": "Ms.",
    "First name": "Sevay",
    "Last name": "Atakan",
    "Email": "seviseviay2017@gmail.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "Islamic Republic of Pakistan",
    "ID": "FDRSA24x023"
  },
  {
    "Title": "Ms.",
    "First name": "Elayah",
    "Last name": "Roth",
    "Email": "elayahroth6@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "United Nations Human Rights Council (observer)",
    "ID": "FDREA24x096"
  },
  {
    "Title": "Ms.",
    "First name": "Philip",
    "Last name": "Manu",
    "Email": "philip.manu@isb.ro",
    "Committee": "Historical Security Council",
    "Country": "German Democratic Republic",
    "ID": "FDRPM240011"
  },
  {
    "Title": "Mr.",
    "First name": "Alexandra Balan",
    "Last name": "Verbancu",
    "Email": "alexandrabalanverbancu@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Federal Democratic Republic of Ethiopia",
    "ID": "FDRAB240089"
  },
  {
    "Title": "Ms.",
    "First name": "Yoanna",
    "Last name": "Ilieva",
    "Email": "yoanna.ilieva26@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "Czechoslovakia",
    "ID": "FDRYI24x021"
  },
  {
    "Title": "Ms.",
    "First name": "Alexander",
    "Last name": "Hristov",
    "Email": "alex.hristov24@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "Union of Soviet Socialist Republics",
    "ID": "FDRAH24x066"
  },
  {
    "Title": "Mr.",
    "First name": "Izaäk Damian",
    "Last name": "Niculescu",
    "Email": "damian.niculescu@isb.ro",
    "Committee": "Historical Security Council",
    "Country": "Socialist Federal Republic of Yugoslavia",
    "ID": "FDRDN240011"
  },
  {
    "Title": "Mr.",
    "First name": "Ivan",
    "Last name": "Mihaylov",
    "Email": "ivan.mihaylov06@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Republic of Guinea",
    "ID": "FDRIM24x072"
  },
  {
    "Title": "Mr.",
    "First name": "Ilie",
    "Last name": "Stefan",
    "Email": "shoppen-david.qbqap@simplelogin.com",
    "Committee": "Security Council",
    "Country": "French Republic",
    "ID": "FDRIS240089"
  },
  {
    "Title": "Mx.",
    "First name": "Boris",
    "Last name": "Kostadinov",
    "Email": "boris191406@gmail.com",
    "Committee": "Security Council",
    "Country": "State of Israel",
    "ID": "FDRBK24x016"
  },
  {
    "Title": "Mr.",
    "First name": "Symona",
    "Last name": "Marin",
    "Email": "simona.marin1@icloud.com",
    "Committee": "Historical Security Council",
    "Country": "Federal Republic of Germany",
    "ID": "FDRSM240039"
  },
  {
    "Title": "Ms.",
    "First name": "Robert",
    "Last name": "Elie Bekhazi",
    "Email": "roberteliebek@gmail.com",
    "Committee": "Security Council",
    "Country": "Republic of Lebanon",
    "ID": "FDRRE240034"
  },
  {
    "Title": "Mr.",
    "First name": "Theodor",
    "Last name": "Irimia",
    "Email": "itg2006@yahoo.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "Federative Republic of Brazil",
    "ID": "FDRTI240038"
  },
  {
    "Title": "Mr.",
    "First name": "Alexandru",
    "Last name": "Ciocan",
    "Email": "alexxandru.ciocan@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Republic of Benin",
    "ID": "FDRAC240039"
  },
  {
    "Title": "Mr.",
    "First name": "Ioana Alexandra",
    "Last name": "Popescu",
    "Email": "popescuioana0501@gmail.com",
    "Committee": "Security Council",
    "Country": "Islamic Republic of Iran",
    "ID": "FDRIP240099"
  },
  {
    "Title": "Ms.",
    "First name": "Calin",
    "Last name": "Teodor",
    "Email": "dan.teodor.calin@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "Federative Republic of Brazil",
    "ID": "FDRCT240038"
  },
  {
    "Title": "Mr.",
    "First name": "Alexia",
    "Last name": "Ilie",
    "Email": "issailie9@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "Federative Democratic Republic of Nepal",
    "ID": "FDRAI240084"
  },
  {
    "Title": "Ms.",
    "First name": "Alexandra",
    "Last name": "Geavela",
    "Email": "alexandra_geavela@yahoo.com",
    "Committee": "Security Council",
    "Country": "Republic of Mali",
    "ID": "FDRAG240011"
  },
  {
    "Title": "Ms.",
    "First name": "Ilinca",
    "Last name": "Pepelea",
    "Email": "pepeleailinca@gmail.com",
    "Committee": "Security Council",
    "Country": "Republic of Mali",
    "ID": "FDRIP240039"
  },
  {
    "Title": "Ms.",
    "First name": "Eduard",
    "Last name": "Lupu",
    "Email": "eduard26062008@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "Syrian Arab Republic",
    "ID": "FDREL240089"
  },
  {
    "Title": "Mr.",
    "First name": "Ana Vanessa",
    "Last name": "Iliescu",
    "Email": "iliescuanavanessa@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "Islamic Republic of Pakistan",
    "ID": "FDRAI240077"
  },
  {
    "Title": "Ms.",
    "First name": "Sofia Maria",
    "Last name": "Marin",
    "Email": "marinsofiaalt21@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "Russian Federation",
    "ID": "FDRSM240085"
  },
  {
    "Title": "Ms.",
    "First name": "Rana",
    "Last name": "Agaoglu",
    "Email": "rana.agaoglu@isb.ro",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Republic of Cameroon",
    "ID": "FDRRA240083"
  },
  {
    "Title": "Ms.",
    "First name": "Andrei Ioan",
    "Last name": "Ionescu",
    "Email": "andreiioanionescu3@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "United Kingdom of Great Britain and Northern Ireland",
    "ID": "FDRAI240069"
  },
  {
    "Title": "Mr.",
    "First name": "Ema-Clara",
    "Last name": "Tîrboiu",
    "Email": "emaclaratrb@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "French Republic",
    "ID": "FDREC240068"
  },
  {
    "Title": "Ms.",
    "First name": "Alexia Maria",
    "Last name": "Neagu",
    "Email": "neagualexiamaria@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "Islamic Republic of Afghanistan (observer)",
    "ID": "FDRNA240069"
  },
  {
    "Title": "Ms.",
    "First name": "Irisa",
    "Last name": "Serban",
    "Email": "irissaserban@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "People's Republic of Bangladesh",
    "ID": "FDRIS240070"
  },
  {
    "Title": "Ms.",
    "First name": "David-Iustin",
    "Last name": "Bratucu",
    "Email": "david.bratucu@yahoo.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "Democratic Socialist Republic of Sri Lanka",
    "ID": "FDRDB240071"
  },
  {
    "Title": "Mr.",
    "First name": "Matei",
    "Last name": "Lucanu",
    "Email": "matei.lucanu@gmail.com",
    "Committee": "Security Council",
    "Country": "People's Republic of China",
    "ID": "FDRML240072"
  },
  {
    "Title": "Mr.",
    "First name": "Raphael",
    "Last name": "Canga",
    "Email": "raphael.canga@isb.ro",
    "Committee": "Economic and Social I — Labor",
    "Country": "Russian Federation",
    "ID": "FDRRC240073"
  },
  {
    "Title": "Mr.",
    "First name": "Alexandru Mihai",
    "Last name": "Pantazi",
    "Email": "alexmihai.pantazi1@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "Polish People's Republic",
    "ID": "FDRAP240074"
  },
  {
    "Title": "Mr.",
    "First name": "Radu",
    "Last name": "Iordache",
    "Email": "radurdch@gmail.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "International Atomic Energy Agency (IAEA) (observer)",
    "ID": "FDRRI240075"
  },
  {
    "Title": "Mr.",
    "First name": "Annabella-Steliana",
    "Last name": "Dragnea",
    "Email": "dragneaannabella@gmail.com",
    "Committee": "Security Council",
    "Country": "United Kingdom of Great Britain and Northern Ireland",
    "ID": "FDRAD240076"
  },
  {
    "Title": "Ms.",
    "First name": "Davide",
    "Last name": "Antochi",
    "Email": "davideas26@icloud.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "Russian Federation",
    "ID": "FDRDA240077"
  },
  {
    "Title": "Mr.",
    "First name": "Sonia",
    "Last name": "Peter",
    "Email": "petersonia403@gmail.com",
    "Committee": "Security Council",
    "Country": "Federal Republic of Nigeria",
    "ID": "FDRPS240078"
  },
  {
    "Title": "Ms.",
    "First name": "Loredana",
    "Last name": "Stanescu",
    "Email": "loredana.a.stanescu@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "French Republic",
    "ID": "FDRIS240079"
  },
  {
    "Title": "Ms.",
    "First name": "Alexia Iarina",
    "Last name": "Nicolaie",
    "Email": "iarinanicolaie2@gmail.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "French Republic",
    "ID": "FDRAN240080"
  },
  {
    "Title": "Ms.",
    "First name": "Luca Stefan",
    "Last name": "Ionita",
    "Email": "ionita.luca.stefan@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "United Kingdom of Great Britain and Northern Ireland",
    "ID": "FDR24LI0081"
  },
  {
    "Title": "Mr.",
    "First name": "Rahela",
    "Last name": "Shafeeq",
    "Email": "rahelashafeeq1@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "Republic of Indonesia",
    "ID": "FDRRS240082"
  },
  {
    "Title": "Ms.",
    "First name": "Sophia-Ioana",
    "Last name": "Luncaşu",
    "Email": "siluncasu@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "French Republic",
    "ID": "FDRSL240083"
  },
  {
    "Title": "Ms.",
    "First name": "Laura Daria",
    "Last name": "Rusu",
    "Email": "laurarusu162@yahoo.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "Republic of India",
    "ID": "FDRLR240084"
  },
  {
    "Title": "Ms.",
    "First name": "Reem",
    "Last name": "Tomah",
    "Email": "reemtomah70@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "Republic of Colombia",
    "ID": "FDRRT240085"
  },
  {
    "Title": "Ms.",
    "First name": "Larisa",
    "Last name": "Alexandru",
    "Email": "alx.larisa22@gmail.com",
    "Committee": "Security Council",
    "Country": "United States of America",
    "ID": "FDRAL240086"
  },
  {
    "Title": "Ms.",
    "First name": "Laszlo",
    "Last name": "Attila",
    "Email": "attilalaszlo687@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "Republic of China",
    "ID": "FDRAB240093"
  },
  {
    "Title": "Mr.",
    "First name": "Sorin",
    "Last name": "Bulibașa",
    "Email": "bsorin578@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "Republic of Austria / State of Israel",
    "ID": "FDRSB240094"
  },
  {
    "Title": "Mr.",
    "First name": "Darius-Matei",
    "Last name": "Duma-Bordioș",
    "Email": "dumabordiosdarius@meb.ro",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "Kingdom of Saudi Arabia",
    "ID": "FDRDD240095"
  },
  {
    "Title": "Mr.",
    "First name": "Alexandra",
    "Last name": "Gagea",
    "Email": "Alexandra.gagea@icloud.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "United Kingdom of Great Britain and Northern Ireland",
    "ID": "FDRAG240096"
  },
  {
    "Title": "Mr.",
    "First name": "David",
    "Last name": "Cojocaru",
    "Email": "contact.cojocaru@gmail.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "Republic of Türkiye",
    "ID": "FDRDC240099"
  },
  {
    "Title": "Mr.",
    "First name": "Eva",
    "Last name": "Cojocaru",
    "Email": "connect.cojocaru@gmail.com",
    "Committee": "Historical Security Council",
    "Country": "North Atlantic Treaty Organisation",
    "ID": "FDREC240001"
  },
  {
    "Title": "Ms.",
    "First name": "Irina",
    "Last name": "Marinescu",
    "Email": "Irina.marinescu@avenor.ro",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Republic of Iraq",
    "ID": "FDRIM240002"
  },
  {
    "Title": "Ms.",
    "First name": "Alexandru",
    "Last name": "Botan",
    "Email": "alex.botan06@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "Argentine Republic",
    "ID": "FDRAB240003"
  },
  {
    "Title": "Ms.",
    "First name": "Calciu David",
    "Last name": "Nicolae",
    "Email": "davidnicolae2008@gmail.com",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "Islamic Republic of Iran",
    "ID": "FDRCN240004"
  },
  {
    "Title": "Ms.",
    "First name": "Iarina Petra",
    "Last name": "Szeker",
    "Email": "szekeriarina@gmail.com",
    "Committee": "Special Political and Decolonization — GA4",
    "Country": "Republic of Tunisia",
    "ID": "FDRIZ240005"
  },
  {
    "Title": "Mr.",
    "First name": "Stefan",
    "Last name": "Ene",
    "Email": "stefan.ene06@gmail.com",
    "Committee": "Social, Cultural and Humanitarian — GA3",
    "Country": "Republic of Philippines",
    "ID": "FDRSE240006"
  },
  {
    "Title": "Mr.",
    "First name": "Bogdan",
    "Last name": "Craciun",
    "Email": "bogdanioancraciu@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "People's Republic of China",
    "ID": "FDRBC230092"
  },
  {
    "Title": "Ms.",
    "First name": "Alice",
    "Last name": "Buse",
    "Email": "buse.maria@liceuldantealighieri.ro",
    "Committee": "Disarmament and International Security — GA1",
    "Country": "Arab Republic of Egypt",
    "ID": "FDRAB24y093"
  },
  {
    "Title": "Ms.",
    "First name": "Stoian",
    "Last name": "Bianca",
    "Email": "stoiancristianabianca111@gmail.com",
    "Committee": "Economic and Social I — Labor",
    "Country": "State of Qatar",
    "ID": "FDRSB240042"
  }
]
