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
          "Jestem początkującym web developerem, samoukiem, który zdobywa praktyczną wiedzę poprzez przekrojowe, produkcyjne projekty. Dzięki uniwersalności JavaScript’u i nowym rozwiązaniom JAMstack jestem w stanie realizować projekty w zakresie front i back-endu. Moim stosem technologicznym jest MERN (MongoDB, Express.js, React.js, Node.js), ale uczę się także framework’a Angular.",
        en:
          "I’m a self-taught web developer who gains experience and practical knowledge by creating small-scale commercial projects. Thanks to the versatility of JavaScript and new JAMstack solutions I’m able tackle front-end as well as back-end of a project. My technology stack is MERN (MongoDB, Express.js, React.js, Node.js), but I’m also learning Angular framework.",
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
          "Z wykształcenia jestem mgr. inż. budownictwa. Zanim zająłem się programowaniem, zajmowałem się projektowaniem konstrukcji stalowych tworząc ich modele w technologii BIM (Building Information Modeling). Dostrzegając potencjał drzemiący w wirtualnych modelach tworzyłem parametryczne komponenty dla powtarzalnych elementów konstrukcji i automatyzowałem czynności dzięki makrom. To właśnie praca w BIM skierowała moje zainteresowania w stronę programowania.",
        en:
          "By education I am a MSc in Civil Engineering. Before I went into programming I had been designing steel structures by creating their models in BIM technology (Building Information Modeling). Recognizing the potential of the virtual models I created parametric components for repetitive elements and automated processes with macros. It was the work in BIM that directed my interest toward programming.",
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
          "Lubię zdobywać nowe umiejętności i korzystać z nowych możliwości jakie stwarzają - dlatego zdecydowałem się związać swoją przyszłość z branżą IT. Oprócz programowania, podobnie jest z nauką języków i poznawaniem świata - moimi hobby. Poniżej zamieszczam kilka fotografii z moich ulubionych podróży.",
        en:
          "I like learining new skills and benefit from the opportunities that they create - that’s why I decided to pursue a career in IT industry. Besides programming, it’s similar with learning foreign languages and exploring the world - my hobbies. Below I publish a few photographs from my favourite journeys.",
      },
      imgCaption: {
        pl: "Amman, Jordania, październik 2019 r.",
        en: "Amman, Jordan, October 2019",
      },
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
            "Używam framework’a Next.js, gdy projekt wymaga renderingu po stronie serwera",
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
          pl: "Tworzę back-end w Node.js, korzystam z framework’a Express",
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
  projects: [
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
      imgCaptions: [
        {
          pl: "Zrzut ekranu strony głównej w serwisie emiliacwojdzinska.pl",
          en: "Screenshot of the home page of emiliacwojdzinska.pl website",
        },
        {
          pl:
            "Zrzut ekranu strony umawiania wizyty w serwisie emiliacwojdzinska.pl",
          en:
            "Screenshot of the appointment scheduler page of emiliacwojdzinska.pl website",
        },
      ],
      www: "https://emiliacwojdzinska.pl",
      git: [
        "https://github.com/l-walaszczyk/ec-ui",
        "https://github.com/l-walaszczyk/ec-api",
      ],
      intro: {
        title: {
          pl: "o projekcie",
          en: "about",
        },
        text: {
          pl:
            "Projekt obejmujący front-end i back-end. Single Page Application dla gabinetu psychologicznego Emilii Cwojdzińskiej. Została stworzona, aby dostarczyć klientom Emilii informacji o jej kwalifikacjach, ofercie oraz - co najważniejsze - możliwości zapisania się przez Internet na wizytę i dokonania płatności online.",
          en:
            "Project that covers front-end and back-end. A Single Page Application created for a psychologist Emilia Cwojdzińska. It was designed to provide the Emilia's customers with information about her areas of expertise, services she offers and - most importantly - a way to book an apointment online and make an online payment.",
        },
      },
      details: [
        {
          title: {
            pl: "front-end",
            en: "front-end",
          },
          text: {
            pl: (
              <>
                <p>
                  Stronę cechuje stonowana, spokojna kolorystyka. Projekt
                  powstawał z zastosowaniem podejścia “mobile first” i
                  responsywności. Grupa docelowa użytkowników jest zróżnicowana
                  pod względem wieku i znajomości nowych technologii, dlatego
                  strona została przystosowana także do Internet Explorer 11.
                </p>
                <p>
                  Proces umawiania spotkania składa się z następujących kroków:
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
                      /w przypadku płatności online/ przekierowanie do serwisu
                      Przelewy24
                    </li>
                    <li>
                      Wyświetlenie informacji o zapisaniu wizyty i przesłaniu
                      potwierdzenia na adres e-mail użytkownika, albo - jeśli w
                      serwisie Przelewy24 transakcja nie zostanie sfinalizowana
                      - informacji o niepowodzeniu.
                    </li>
                  </ul>
                </p>
                <p>
                  Wykorzystane biblioteki/framework’i:
                  <ul>
                    <li>react</li>
                    <li>react-transition-group</li>
                    <li>next</li>
                    <li>moment</li>
                    <li>formik</li>
                    <li>sass</li>
                    <li>dotenv</li>
                  </ul>
                </p>
              </>
            ),
            en: (
              <>
                <p>
                  The website has a toned-down, peaceful color scheme. The
                  project was created with the “mobile first” principle and
                  responsiveness in mind. The user target gruop varies in terms
                  of age and technological prowess, so the website was adapted
                  for Internet Explorer 11.
                </p>
                <p>
                  Appointment-booking process consists of the following steps:
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
                    <li>/online payments only/ Redirecting to Przelewy24</li>
                    <li>
                      Displaying information about saving the appointment and
                      sending a confirmational e-mail to the user, or - in case
                      of a failed Przelewy24 transaction - information about the
                      failure.
                    </li>
                  </ul>
                </p>
                <p>
                  Libraries/frameworks used:
                  <ul>
                    <li>react</li>
                    <li>react-transition-group</li>
                    <li>next</li>
                    <li>moment</li>
                    <li>formik</li>
                    <li>sass</li>
                    <li>dotenv</li>
                  </ul>
                </p>
              </>
            ),
          },
        },
        {
          title: {
            pl: "back-end",
            en: "back-end",
          },
          text: {
            pl: (
              <>
                <p>
                  System rezerwacji ma za zadanie generować tablice z dostępnymi
                  godzinami, zapisywać spotkania w bazie danych, a także
                  współpracować z API serwisu Przelewy24 oraz wysyłać
                  automatyczne powiadomienia użytkownikom. Komunikacja z
                  systemem odbywa się poprzez RESTful API.
                </p>
                <p>
                  Logika systemu rezerwacji opiera się (w uproszczeniu) na
                  poniższych założeniach:
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
                </p>
                <p>
                  Wykorzystane biblioteki/framework’i:
                  <ul>
                    <li>node</li>
                    <li>express</li>
                    <li>mongodb</li>
                    <li>mongoose</li>
                    <li>moment</li>
                    <li>dotenv</li>
                    <li>nodemailer</li>
                    <li>@ingameltd/node-przelewy24</li>
                  </ul>
                </p>
              </>
            ),
            en: (
              <>
                <p>
                  The appointment scheduler is designed to generate arrays with
                  available hours, save appointments in a database, cooperate
                  with Przelewy24 API and send e-mail notification to the users.
                  Communication with the scheduler is achieved by means of a
                  RESTful API.
                </p>
                <p>
                  Logic of the appointment scheduler is based on the assumptions
                  below (simplified):
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
                </p>
                <p>
                  Libraries/frameworks used:
                  <ul>
                    <li>node</li>
                    <li>express</li>
                    <li>mongodb</li>
                    <li>mongoose</li>
                    <li>moment</li>
                    <li>dotenv</li>
                    <li>nodemailer</li>
                    <li>@ingameltd/node-przelewy24</li>
                  </ul>
                </p>
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
      imgCaptions: [
        {
          pl: "Zrzut ekranu strony startowej portfolio",
          en: "Screenshot of the portfolio's start page",
        },
      ],
      www: "https://l-walaszczyk.github.io/portfolio",
      git: ["https://github.com/l-walaszczyk/portfolio"],
      intro: {
        title: {
          pl: "o projekcie",
          en: "about",
        },
        text: {
          pl:
            "Strona typu Single Page Application zawierająca informacje o mnie, technologiach, w jakich tworzę i projektach, które rozwijam.",
          en:
            "Single Page Application containing information about myself, technologies I use and projects I develop.",
        },
      },
      details: [
        {
          title: {
            pl: "front-end",
            en: "front-end",
          },
          text: {
            pl: (
              <>
                <p>
                  Minimalistyczny design, inuicyjna nawigacja i czytelna treść -
                  tym kierowałem się podczas tworzenia strony.
                </p>

                <p>Strona jest responsywna</p>

                <p>
                  Wykorzystane biblioteki/framework’i:
                  <ul>
                    <li>react</li>
                    <li>react-transition-group</li>
                    <li>formik</li>
                    <li>styled-components</li>
                  </ul>
                </p>
              </>
            ),
            en: (
              <>
                <p>
                  Minimalistic design, intuitive navigation and clear content -
                  those were the principle guiding me during website
                  development.
                </p>

                <p>The website is responsive</p>

                <p>
                  Libraries/frameworks used:
                  <ul>
                    <li>react</li>
                    <li>react-transition-group</li>
                    <li>formik</li>
                    <li>styled-components</li>
                  </ul>
                </p>
              </>
            ),
          },
        },
      ],
    },
  ],
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
