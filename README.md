# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  dylan thai

  #### Je startniveau:
  blauw-rood

  #### Je focus:
  responsive (kies uit responsive óf surface plane)
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  amazing oriental https://amazingoriental.com/
  

  #### Screenshot(s) van de eerste pagina (small screen): 
  homepagina van de amazing oriental nederland 
  <img src="readme-images/oriental-homepage.png" width="375px" alt="homepagina van amazing oriental nederland">
  

  #### Screenshot(s) van de tweede pagina (small screen):
  recept pagina van yaki onigiri amazing oriental nederland 
  <img src="readme-images/oriental-recept-detail.png" width="375px" alt="amazing oriental recept detailpagina nederland">
  
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  Homepage van oriental heeft een span in de html van 'vandaag ?' deze komt talloos keer vol in de heading list van de accesibility narrator. Meeste links zijn wel kloppend op 1 button na, sommige links lijken meer op een section & de volgorde van hiërarchie eerst 'bekijk dit artikel' dan pas het 'product'. Ook is in deze lijst geen hiërarchie en h1 is niet te vinden maar staat wel in de html.
  De website is via wordpress opgezet waardoor niet alles semantisch is in de html.
  De recept-yaki-onigiri heeft wel een hiërarchie van h-tags.
  Bijna alle afbeeldingen beide pagina's hebben geen src alt text.
  De shift-tab knop werkt niet helemaal zonder narrator? Je ziet links onder wel de url, maar geen outline waar je nu bevindt met narrator wel.
  <img src="readme-images/readme-headingsmap-oriental.png" width="375px" alt="screenshot headingsmap homepagina amazing oriental">
  Er is geen darkmode, veel divs met classes, weinig tab-focus.
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <!-- content img header + producten zijn sinds 19-11-2025 veranderd -->
  <img src="readme-images/homepage-breakdown.png" width="375px" alt="breakdown van de hele homepagina amazing oriental">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/yaki-breakdown.png" width="375px" alt="breakdown van een recept pagina yaki onigiri amazing oriental">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/hamburger-nav-breakdown.png" width="375px" alt="breakdown van hamburger menu amazing oriental dynamisch deel">
</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  1 De breakdownschets duurde langer dan verwacht maar bracht veel steun om alle content daarna in html te zetten. Bij mijn eerste versie twijfelde ik soms of het een article was maar echter bleek het een link te zijn omdat het gehele blokje naar een andere pagina hoort te brengen.
  Het zou een article kunnen zijn met a voor het hele article of via nav>ul>li>a omdat het navigeert.
  <img src="readme-images/readme-voortgang1-article-of-nav.png" width="375px" alt="screenshot gedeelte van homepagina amazing oriental">

  2 In mijn eerste poging om alle tekstuele content in html te zetten lukte form niet helemaal
  <img src="readme-images/readme-voortgang1-htmlpoging1.png" width="375px" alt="screenshot eigen html homepagina amazing oriental">

  3 In de tijd (19-11-2004) is de pagina veranderd aan afbeeldingen van de header en producten met tekst op de homepagina, ik had de vorige afbeeldingen nog niet gedownload dus moet deze opgezocht worden of mag het vervangen worden? Layout is hetzelde. (het antwoord was gewoon de nieuwe plaatjes gebruiken en de breakdownschets hoeft niet meer opnieuw)
  
  4 ik had tijdens mijn w3c validation een paar errors bij form action"" invullen en dat ik bij een section li als child had zonder ul als parent.
  <img src="readme-images/readme-voortgang1-w3c-validation.png" width="375px" alt="screenshot eigen html w3c validation errors">

  5 tijdens de javascript les 20-11-2025 hebben we geleerd over een responsive hamburger menu (responsive fixed-button hamburger) vervolgens moest ik voor mijn website (responsive 2-buttons hamburger) uitvoeren, dit is gelukt https://codepen.io/DolanTea/pen/zxqExwQ.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Stiene                                                    
  | omdraaien titel & rondddraaiend grid          |           
  | h2 en button & uit grid titel center          |                   

  | Nicha
  | aria-label active naar unactive               |
  | grid netjes maken                             |

  | Anne                                          |
  | een element en dropdown button disable state  |

  | Kasper                                        |
  | Responsive accordion footer starbucks         |

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - | Stiene grid-column start en end oefenen h2 center plaatsen 
  - | Dylan | emmet cheat sheet  carousel klikbare afbeeldingen | list-style-type:"" voor de screenreader nog een lijst met list-style:none niet screenreader vriendelijk | @media(prefers-reduced-motion: no-prefrence)
  - : states :: dubbel over de content (voor firstletter etc.)
  - | Kasper footer details summary accordion menu maken voor mobiel responsive voor grotere devices
  - fonts in ::root is mooi maar mag font-face
  - 3 stylesheets css, 1 algemeen custom properties special states, 1 voor iedere pagina en javascript voor hamburger menu bijv

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
