import React from "react";

const texts = {
  categories: [
    {
      name: "about",
      pl: "o mnie",
      en: "about",
    },
    {
      name: "skills",
      pl: "umiejętności",
      en: "skills",
    },
    {
      name: "projects",
      pl: "projekty",
      en: "projects",
    },
    {
      name: "contact",
      pl: "kontakt",
      en: "contact",
    },
  ],
  home: {
    title1: {
      pl: "junior web developer",
      en: "junior web developer",
    },
    title2: {
      pl: "programista JavaScript",
      en: "JavaScript programmer",
    },
  },
  about: {
    present: {
      title: {
        pl: "obecnie",
        en: "present",
      },
      text: {
        pl:
          "Jestem początkującym web developerem, samoukiem, który zdobywa doświadczenie i praktyczną wiedzę poprzez przekrojowe, produkcyjne projekty dla małych przedsiębiorstw. Dzięki uniwersalności JavaScript’u i nowym rozwiązaniom JAMstack jestem w stanie realizować projekty w zakresie front i back-endu. Moim stosem technologicznym jest MERN (MongoDB, Express.js, React.js, Node.js), ale jestem otwarty na naukę innych technologii.",
        en:
          "I’m a self-taught web developer who gains experience and practical knowledge by creating small-scale but comprehensive commercial projects for small businesses. Thanks to the versatility of JavaScript and new JAMstack solutions I’m able tackle front-end as well as back-end of a project. My technology stack is MERN (MongoDB, Express.js, React.js, Node.js), but I’m open to learning other technologies.",
      },
      imgCaption: {
        pl: "Łukasz Walaszczyk - zdjęcie profilowe",
        en: "Łukasz Walaszczyk - profile picture",
      },
    },
    past: {
      title: {
        pl: "kiedyś",
        en: "past",
      },
      text: {
        pl:
          "Z wykształcenia jestem mgr. inż. budownictwa w specjalności konstrukcyjnej. Zanim zająłem się programowaniem, projektowałem konstrukcje stalowe tworząc ich modele w technologii BIM (Building Information Modeling). Dostrzegając potencjał drzemiący w wirtualnych modelach tworzyłem parametryczne komponenty dla powtarzalnych elementów konstrukcji i automatyzowałem czynności dzięki makrom (pisanym w C#). To właśnie praca w BIM skierowała moje zainteresowania w stronę programowania.",
        en:
          "By education I am a MSc in civil engineering, specialty: structural engineering. Before I went into programming I had designed steel structures by creating their models in BIM technology (Building Information Modeling). Having recognized the potential of virtual models I was creating parametric components for repetitive elements and automating processes with macros (written in C#). It was the work in BIM that directed my interest toward programming.",
      },
      imgCaption: {
        pl: "Tekla Structures - oprogramowanie BIM, na którym pracowałem",
        en: "Tekla Structures - BIM software I was using",
      },
    },
    interests: {
      title: {
        pl: "moje pasje",
        en: "my interests",
      },
      text: {
        pl:
          "Lubię zdobywać nowe umiejętności i korzystać z nowych możliwości, jakie one stwarzają - dlatego zdecydowałem się związać swoją przyszłość z branżą IT. Oprócz programowania, podobnie jest z nauką języków i poznawaniem świata - moimi hobby. Poniżej zamieszczam kilka fotografii z moich ulubionych podróży.",
        en:
          "I like learining new skills and benefit from the opportunities that they create - that’s why I decided to pursue a career in IT industry. Besides programming, it’s similar with learning foreign languages and exploring the world - my hobbies. Below I publish a few photographs from my favourite journeys.",
      },
      images: [
        "lisboa.jpg",
        "marrakesh.jpg",
        "wadi-rum.jpg",
        "amman.jpg",
        "wolin.jpg",
      ],
      imgCaptions: [
        {
          pl: "Lizbona, Portugalia, grudzień 2017",
          en: "Lisboa, Portugal, December 2017",
        },
        {
          pl: "Marrakesz, Maroko, październik 2018",
          en: "Marrakesh, Morocco, October 2018",
        },
        {
          pl: "Wadi-Rum, Jordania, październik 2019",
          en: "Wadi-Rum, Jordan, October 2019",
        },
        {
          pl: "Amman, Jordania, październik 2019",
          en: "Amman, Jordan, October 2019",
        },
        {
          pl:
            "Woliński Park Narodowy, podczas trasy rowerowej wzdłuż wybrzeża, sierpień 2020",
          en:
            "Wolin National Park, during a bicycle trip along the Polish coastline, August 2020",
        },
      ],
    },
  },
  skills: [
    {
      title: {
        pl: "język programowania",
        en: "programming language",
      },
      items: [
        {
          name: "js",
          pl:
            "Programuję w JavaScript korzystając z możliwości najnowszych wersji EcmaScript",
          en:
            "I write in JavaScript and utilize capabilities of the latest versions of EcmaScript",
        },
      ],
    },
    {
      title: {
        pl: "front-end",
        en: "front-end",
      },
      items: [
        {
          name: "html",
          pl: "Kod html tworzę z dbałością o semantykę",
          en: "I pay attention to semantics in my html code",
        },
        {
          name: "react",
          pl:
            "UI tworzę w React.js, używam komponentów funkcyjnych z Hooks, korzystam z Context API",
          en:
            "I create UIs in React.js, I use functional components with Hooks and Context API",
        },
        {
          name: "next",
          pl:
            "Używam frameworka Next.js, gdy projekt wymaga renderingu po stronie serwera",
          en:
            "When a project requires server-side rendering I use Next.js framework.",
        },
        {
          name: "sass_css_styled-components",
          pl: "Style tworzę z wykorzystaniem Sass lub Styled Components",
          en: "For styles I use Sass or Styled Components",
        },
      ],
    },
    {
      title: {
        pl: "back-end",
        en: "back-end",
      },
      items: [
        {
          name: "rest",
          pl: "Wykorzystuję zasady REST do tworzenia API",
          en: "I emlpoy REST principles for designing APIs",
        },
        {
          name: "node-express",
          pl: "Tworzę back-end w Node.js, korzystam z frameworka Express",
          en: "I develop back-end services in Node.js, I use Express framework",
        },
        {
          name: "mongo_mongoose",
          pl: "Do baz danych używam MongoDB w połączeniu z Mongoose ",
          en: "MongoDB is my database solution, I implement it with Mongoose ",
        },
      ],
    },
    {
      title: {
        pl: "narzędzia",
        en: "tools",
      },
      items: [
        {
          name: "git",
          pl: "Wykorzystuję Git do śledzenia zmian w kodzie",
          en: "I use Git for tracking code changes",
        },
        {
          name: "jira",
          pl: "Znam podstawy Jiry",
          en: "I know basics of Jira",
        },
        {
          name: "figma",
          pl:
            "Projekty graficzne stron i ich interaktywne prototypy tworzę w Figma",
          en:
            "Graphic designs and interactive prototypes of my websites are done in Figma",
        },
        {
          name: "inkscape",
          pl: "Do grafiki wektorowej używam edytora open-source Inkscape",
          en:
            "For vector graphics I use a free and open-source editor Inkscape",
        },
      ],
    },
  ],
  projects: {
    more: {
      pl: "rozwiń",
      en: "more",
    },
    less: {
      pl: "zwiń",
      en: "less",
    },
    links: {
      pl: "linki",
      en: "links",
    },

    libsFworks: {
      pl: "Wykorzystane biblioteki/framework’i:",
      en: "Libraries/frameworks used:",
    },
    items: [
      {
        title: {
          pl: (
            <>
              portfolio
              <br />- własna strona-wizytówka
            </>
          ),
          en: (
            <>
              portfolio
              <br />- personal website
            </>
          ),
        },

        images: ["portfolio.jpg"],
        www: ["https://l-walaszczyk.github.io/portfolio"],
        wwwDescriptions: [
          { pl: "strona startowa portfolio", en: "portfolio's home page" },
        ],
        git: ["https://github.com/l-walaszczyk/portfolio"],
        gitDescriptions: [{ pl: "kod", en: "code" }],
        intro: {
          pl:
            "Strona typu Single Page Application zawierająca informacje o mnie, technologiach, w jakich tworzę i projektach, które rozwijam.",
          en:
            "Single Page Application containing information about me, technologies I use and projects I develop.",
        },
        details: [
          {
            title: {
              pl: "front-end",
              en: "front-end",
            },
            libsFworks: [
              "react",
              "react-router",
              "emailjs-com",
              "focus-visible",
              "formik",
              "framer-motion",
              "pure-react-carousel",
              "simplebar-react",
              "styled-components",
              "three.js",
              "vanta.js",
            ],
            text: {
              pl: (
                <>
                  <p>
                    Minimalistyczny design, inuicyjna nawigacja i czytelna treść
                    - to zasady, którymi kierowałem się podczas tworzenia
                    strony.
                  </p>

                  <p>
                    Interaktywne, trójwymiarowe tło powstało dzięki bibliotece
                    three.js i opartej na niej vanta.js. Ma za zadanie
                    kontrastować z tekstem strony tworząc efekt przestrzeni i
                    głębi. Zmiana podstrony uruchamia animację
                    wygaszania/pojawiania się treści.
                  </p>

                  <p>Strona jest responsywna.</p>
                </>
              ),
              en: (
                <>
                  <p>
                    Minimalistic design, intuitive navigation and clear content
                    - those were the principles guiding me during development of
                    the website.
                  </p>

                  <p>
                    Interactive, tridimensional background was achieved using
                    three.js library and vanta.js which is based on it. The
                    background is intended to contrast with content making an
                    effect of space and depth. Changing routes triggers a
                    fade-out/fade-in animation.
                  </p>

                  <p>The website is responsive</p>
                </>
              ),
            },
          },
        ],
      },
      {
        title: {
          pl: (
            <>
              strona gabinetu psychologicznego
              <br />z systemem rezerwacji spotkań
            </>
          ),
          en: (
            <>
              website for a psychotherapist
              <br />
              with appointment scheduler
            </>
          ),
        },
        images: ["ec-ui.jpg", "ec-api.jpg"],
        www: [
          "https://emiliacwojdzinska.pl",
          "https://emiliacwojdzinska.pl/umow-spotkanie",
        ],
        wwwDescriptions: [
          {
            pl: "strona startowa",
            en: "home page",
          },
          {
            pl: "strona umawiania spotkania",
            en: "page for appointment booking",
          },
        ],
        git: [
          "https://github.com/l-walaszczyk/ec-ui",
          "https://github.com/l-walaszczyk/ec-api",
        ],
        gitDescriptions: [
          { pl: "kod front-end", en: "front-end code" },
          { pl: "kod back-end", en: "back-end code" },
        ],
        intro: {
          pl:
            "Projekt obejmujący front-end i back-end. Został stworzony, aby dostarczyć klientom gabinetu informacje o ofercie oraz - co najważniejsze - umożliwić zapisanie się przez Internet na wizytę i dokonanie płatności online.",
          en:
            "Project that covers front-end and back-end. It was designed to provide the psychotherapist's customers with information about her services and - most importantly - make it possible to book an apointment online and make an online payment.",
        },
        details: [
          {
            title: {
              pl: "front-end",
              en: "front-end",
            },
            libsFworks: [
              "react",
              "react-transition-group",
              "next",
              "moment",
              "formik",
              "sass",
              "dotenv",
            ],
            text: {
              pl: (
                <>
                  <p>
                    Stronę cechuje stonowana, spokojna kolorystyka. Projekt
                    powstawał z zastosowaniem podejścia “mobile first” i
                    responsywności. Grupa docelowa użytkowników jest
                    zróżnicowana pod względem wieku i znajomości nowych
                    technologii, dlatego strona została przystosowana także do
                    Internet Explorer 11.
                  </p>
                  <p>
                    Proces umawiania spotkania składa się z następujących
                    kroków:
                  </p>
                  <ul>
                    <li>
                      Wybór obszaru działalności (dorośli - dzieci - medycyna
                      pracy)
                    </li>
                    <li>
                      Wybór konkretnej usługi (w przypadku medycyny pracy także
                      określenie liczby osób do badania)
                    </li>
                    <li>Wybór dnia i godziny spotkania</li>
                    <li>
                      Uzupełnienie formularza, wybór metody płatności (w zal. od
                      rodzaju spotkania - niektóre spotkania przewidują
                      wyłącznie płatność z góry, inne wyłącznie podczas wizyty)
                      oraz akceptacja regulaminów
                    </li>
                    <li>
                      Przekierowanie do serwisu Przelewy24 /w przypadku
                      płatności online/
                    </li>
                    <li>
                      Wyświetlenie informacji o zapisaniu wizyty i przesłaniu
                      potwierdzenia na adres e-mail użytkownika, albo - jeśli w
                      serwisie Przelewy24 transakcja nie zostanie sfinalizowana
                      - informacji o niepowodzeniu.
                    </li>
                  </ul>
                </>
              ),
              en: (
                <>
                  <p>
                    The website has a toned-down, peaceful color scheme. The
                    project was created with the “mobile first” principle and
                    responsiveness in mind. The user target gruop varies in
                    terms of age and technological prowess, so the website was
                    adapted for Internet Explorer 11.
                  </p>
                  <p>
                    Appointment-booking process consists of the following steps:
                  </p>
                  <ul>
                    <li>
                      Selecting the area of expertise (adults - children -
                      occupational medicine)
                    </li>
                    <li>
                      Selecting the specific service (in case of occupational
                      medicine also specifying the number of people for
                      examination)
                    </li>
                    <li>Selecting the appointment day and hour</li>
                    <li>
                      Filling in a form with personal data, choosing payment
                      method (depending on the kind of appointment - some have
                      only online payment while some other have only payment in
                      person) and statute acceptance
                    </li>
                    <li>Redirecting to Przelewy24 /online payments only/</li>
                    <li>
                      Displaying information about saving the appointment and
                      sending a confirmational e-mail to the user, or - in case
                      of a failed Przelewy24 transaction - information about the
                      failure.
                    </li>
                  </ul>
                </>
              ),
            },
          },
          {
            title: {
              pl: "back-end",
              en: "back-end",
            },
            libsFworks: [
              "node",
              "express",
              "mongodb",
              "mongoose",
              "moment",
              "dotenv",
              "nodemailer",
              "@ingameltd/node-przelewy24",
            ],
            text: {
              pl: (
                <>
                  <p>
                    System rezerwacji ma za zadanie generować tablice z
                    dostępnymi godzinami, zapisywać spotkania w bazie danych, a
                    także współpracować z API serwisu Przelewy24 oraz wysyłać
                    automatyczne powiadomienia użytkownikom. Komunikacja z
                    systemem odbywa się poprzez RESTful API.
                  </p>
                  <p>
                    Logika systemu rezerwacji opiera się (w uproszczeniu) na
                    poniższych założeniach:
                  </p>
                  <ul>
                    <li>
                      w bazie danych znajduje się 7-elementowa tablica z
                      przedziałami czasowymi odpowiadającymi typowym godzinom
                      przyjęć dla każdego dnia tygodnia
                    </li>
                    <li>
                      dla każdej daty, dla której godzinny przyjęć będą inne niż
                      typowe, należy utworzyć osobny dokument w bazie danych
                    </li>
                    <li>
                      godziny, na które może zapisać się użytkownik, są
                      generowane na podstawie czasu trwania spotkania oraz
                      dostępnych przedziałów czasowych (czyli przedziały przyjęć
                      minus przedziały zajęte przez inne spotkania)
                    </li>
                    <li>
                      system jest niezależny od strefy czasowej użytkownika -
                      daty spotkań są przesyłane między klientem a serwerem oraz
                      zapisywane w bazie danych w czasie UTC,
                    </li>
                  </ul>
                </>
              ),
              en: (
                <>
                  <p>
                    The appointment scheduler is designed to generate arrays
                    with available hours, save appointments in a database,
                    cooperate with Przelewy24 API and send e-mail notifications
                    to the users. Communication with the scheduler is achieved
                    by means of a RESTful API.
                  </p>
                  <p>
                    Logic of the appointment scheduler is based on the
                    assumptions below (simplified):
                  </p>
                  <ul>
                    <li>
                      there is a 7-element array with time intervals
                      corresponding with typical opening hours for each day of
                      the week
                    </li>
                    <li>
                      each date, on which the opening hours will be different
                      than typical, should have a separate document with time
                      intervals in the database
                    </li>
                    <li>
                      hours available for the users to save appointments are
                      generated based on appointment duration and available time
                      intervals (i.e. the intervals of opening hours minus the
                      intervals taken other appointments)
                    </li>
                    <li>
                      the scheduler is independet of the user’s time zone -
                      appointment dates are sent between the client and server,
                      as well as saved to the database, on UTC.
                    </li>
                  </ul>
                </>
              ),
            },
          },
        ],
      },
      {
        title: {
          pl: (
            <>
              Landing page
              <br />
              dla warsztatu elektromechanicznego
            </>
          ),
          en: (
            <>
              Landing page
              <br />
              for electric motor repair shop
            </>
          ),
        },

        images: ["protech.jpg"],
        www: ["https://www.protech-gorzow.pl"],
        wwwDescriptions: [
          { pl: "strona firmy Protech", en: "Protech firm's website" },
        ],
        git: ["https://github.com/l-walaszczyk/protech"],
        gitDescriptions: [{ pl: "kod", en: "code" }],
        intro: {
          pl:
            "Responsywna strona internetowa typu landing page, która powstała na początku mojej nauki front-endu, po ukończeniu kursów z html, css i podstaw JavaScript.",
          en:
            "Responsive landing page, created at the beginning of my front-end education, after finishing html, css and basic JavaScript courses.",
        },
        details: [
          {
            title: {
              pl: "front-end",
              en: "front-end",
            },
            libsFworks: ["JQuery", "sass"],
            text: {
              pl: (
                <>
                  <p>
                    Zakres projektu obejmował, oprócz stworzenia strony, także
                    odświeżenie starego logo firmy przy zachowaniu koloru i
                    kroju czcionki, dobrze znanych klientom. Charakterystyne
                    logo było punktem wyjścia do projektu wizualnego.
                  </p>
                </>
              ),
              en: (
                <>
                  <p>
                    Project scope included, apart from creating the website,
                    also graphic refreshment of the old firm's logo while
                    maintaining the color and font well known to the clients.
                    The characteristic logo was the starting point for the
                    visual design.
                  </p>
                </>
              ),
            },
          },
        ],
      },
    ],
  },
  contact: {
    contactForm: {
      pl: "formularz kontaktowy",
      en: "contact form",
    },
    send: {
      pl: "wyślij",
      en: "send",
    },
    sending: {
      pl: "wysyłanie",
      en: "sending",
    },
    success: {
      pl: "Wiadomość została wysłana",
      en: "Message sent successfully",
    },
    failure: {
      pl: "Wysyłanie wiadomości nie powiodło się",
      en: "Failed to send the message",
    },
    name: { pl: "imię", en: "name" },
    email: { pl: "adres e-mail", en: "e-mail address" },
    message: { pl: "treść wiadomości", en: "message text" },
    validationMessages: {
      nameTooShort: {
        pl: "wpisz imię",
        en: "enter name",
      },
      nameTooLong: {
        pl: "imię może zawierać maksymalnie 25 znaków",
        en: "name can be up to 25 characters long",
      },
      emailTooShort: {
        pl: "wpisz adres e-mail",
        en: "enter e-mail address",
      },
      emailInvalid: {
        pl: "wpisz poprawny adres e-mail",
        en: "enter a valid e-mail address",
      },
      messageTooShort: {
        pl: "wpisz treść wiadomości",
        en: "enter your message",
      },
      messageTooLong: {
        pl: "wiadomość może zawiarać maks. 1000 znaków",
        en: "message can be up to 1000 characters long",
      },
    },
    autoReply: {
      subject: {
        pl: "Dziękuję za wiadomość",
        en: "Thank you for your message",
      },
      greetingNormal: { pl: "Dzień dobry", en: "Hi" },
      greetingLate: { pl: "Dobry wieczór", en: "Hi" },
      main: {
        pl:
          "Dziękuję za wiadomość. Postaram się odpowiedzieć najszybciej jak to możliwe.",
        en:
          "Thank you for your message. I will try to respond as soon as I can.",
      },
      regards: { pl: "Pozdrawiam", en: "Best regards" },
    },
  },
  error404: {
    title1: {
      pl: "Error404",
      en: "Error404",
    },
    title2: {
      pl: "Nie znaleziono strony",
      en: "Page not found",
    },
  },
};

export default texts;
