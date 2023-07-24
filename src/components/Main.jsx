import { Outlet, NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <body>
        <main>
          <div className="container py-4">
            <div
              className="mb-4 rounded-3 d-flex justify-content-center align-items-center"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            >
              <div
                className="container py-5 text-center"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <div className="profile">
                  <img
                    src="https://scontent-cgk1-2.xx.fbcdn.net/v/t1.6435-9/74240110_2625810180820438_5799175258078445568_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGLzBzSU4eKJgK5AJwGlVH2Uh7qPx40dmBSHuo_HjR2YD0HJBOfhhXoeAUsM1oe-7k-QbOza_yeDQTS4EguE6Qe&_nc_ohc=nJLm8yOl4y4AX9tM167&_nc_ht=scontent-cgk1-2.xx&oh=00_AfCJA5_-Xs1CYoa7L5DKhMi-urjJYCn1gcsPowIQ8D6suA&oe=64D473A6"
                    alt="Profile"
                    className="profile-image"
                  />
                </div>
                <h1
                  className="display-5 fw-bold text-white"
                  style={{
                    textShadow: "1px 1px 2px #000000",
                  }}
                >
                  Franky Perwira H. Sibuea
                </h1>
                <p
                  className="col-md-8 fs-4 text-center"
                  style={{
                    margin: "0 auto",
                    color: "#FFD700",
                    textShadow: "1px 1px 5px #000000",
                    fontWeight: "bold",
                  }}
                >
                  I have completed Javascript Immersive Bootcamp on Hacktiv8,
                  and I am ready to start my journey on IT`s world and to become
                  a competent full-stack developer.
                </p>
                <h4 className="text-white mt-5">
                  FullStack-Developer | Front-End Developer | Back-end developer
                </h4>
                <a
                  href="https://www.linkedin.com/in/franky-perwira-hellyosa-sibuea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg mt-3"
                  type="button"
                >
                  Connect to me via
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                    alt="LinkedIn Logo"
                    className="linkedin-logo"
                  />
                </a>
              </div>
            </div>

            <div className="container px-4 py-5" id="custom-cards">
              <h2
                className="pb-2 border-bottom"
                style={{ textAlign: "center" }}
              >
                What do you want to know about me?
              </h2>

              <div className="row row-cols-1 row-cols-md-3 align-items-stretch g-4 py-5">
                <div className="col col-12 col-md-4">
                  <NavLink to={"/education"} style={{ textDecoration: "none" }}>
                    <div
                      className="card h-100 overflow-hidden rounded-4 shadow-lg"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://ugm.ac.id/wp-content/uploads/2022/11/balairung-1.jpg')`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="flex-column h-100 p-3 text-white text-shadow-1 d-flex align-items-center justify-content-center">
                        <h3 className="pt-4 mt-4 mb-2 display-6 lh-1 fw-bold text-center">
                          My Educational Background
                        </h3>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col col-12 col-md-4">
                  <NavLink to={"/job"} style={{ textDecoration: "none" }}>
                    <div
                      className="card h-100 overflow-hidden rounded-4 shadow-lg"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1149&q=80')`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="flex-column h-100 p-3 text-white text-shadow-1 d-flex align-items-center justify-content-center">
                        <h3 className="pt-4 mt-4 mb-2 display-6 lh-1 fw-bold text-center">
                          Job Experience
                        </h3>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col col-12 col-md-4">
                  <NavLink to={"/ITJourney"} style={{ textDecoration: "none" }}>
                    <div
                      className="card h-100 overflow-hidden rounded-4 shadow-lg"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80')`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="flex-column h-100 p-3 text-white text-shadow-1 d-flex align-items-center justify-content-center">
                        <h3 className="pt-4 mt-4 mb-2 display-6 lh-1 fw-bold text-center">
                          IT Journey
                        </h3>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            <Outlet />
            <div>
              <h1
                className="pb-2 border-bottom"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                Tech Stacks I`ve Used for Making Projects
              </h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://sequelize.org/img/logo.svg"
                  alt="Sequelize Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{
                    backgroundColor: "white",
                  }}
                />
                <h2 className="fw-normal2">Sequelize</h2>
                <p className="lead">
                  A Node.js ORM (Object-Relational Mapping) that simplifies
                  interaction with SQL databases, including PostgreSQL.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                  alt="Node.js Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Node.js</h2>
                <p className="lead">
                  A runtime environment that allows developers to run JavaScript
                  code on the server-side.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                  alt="HTML5 & CSS Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">HTML 5 & CSS</h2>
                <p className="lead">
                  HTML and CSS are essential technologies for building and
                  styling web pages, with HTML providing the structure and
                  content of the page, while CSS handles the presentation and
                  visual styling.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">React & React Native</h2>
                <p className="lead">
                  A JavaScript library for building interactive and dynamic user
                  interfaces (UI) and JavaScript framework for cross-platform
                  mobile app development using React-based code.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Vue.js</h2>
                <p className="lead">
                  Vue.js is a progressive JavaScript framework for building user
                  interfaces that emphasizes simplicity and flexibility.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">PostgreSQL</h2>
                <p className="lead">
                  A powerful and reliable relational database management system
                  (RDBMS).
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">AWS EC2</h2>
                <p className="lead">
                  Elastic and scalable cloud computing service provided by
                  Amazon Web Services (AWS).
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Supabase</h2>
                <p className="lead">
                  An open-source platform for building and managing backend
                  applications with a PostgreSQL database.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">MongoDB</h2>
                <p className="lead">
                  A flexible, scalable, and user-friendly NoSQL document-based
                  database.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Pinialogo.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Pinia</h2>
                <p className="lead">
                  Pinia is a state management library for Vue.js applications
                  that provides a lightweight and intuitive approach to managing
                  application state.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Redux / Redux Tool Kit</h2>
                <p className="lead">
                  Redux: A popular state management library for JavaScript
                  applications, including React-based applications. Redux
                  Toolkit: The official utility library for Redux that makes it
                  easier to develop and manage application state more
                  efficiently.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://kinsta.com/wp-content/uploads/2023/06/node-js-libraries-nodemailer-logo.png"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Node Mailer</h2>
                <p className="lead">
                  A Node.js module for sending emails from a server using the
                  SMTP protocol.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">GraphQL</h2>
                <p className="lead">
                  A query language for requesting and manipulating data that
                  provides flexibility and efficiency in communication between
                  clients and servers.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/64/Logo-redis.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Redis</h2>
                <p className="lead">
                  A fast and responsive caching database service that uses
                  Redis.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Cloudinary_logo.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Cloudinary</h2>
                <p className="lead">
                  Cloudinary is a cloud-based media management platform that
                  simplifies the storage, optimization, and delivery of images
                  and videos for web and mobile applications.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Midtrans.png"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Midtrans</h2>
                <p className="lead">
                  Midtrans is a payment gateway service that enables businesses
                  to accept online payments securely and seamlessly, providing a
                  range of payment methods and fraud prevention features.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://user-images.githubusercontent.com/43313420/105883616-57dbeb00-6007-11eb-9df2-de0e2a42655c.png"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Axios</h2>
                <p className="lead">
                  Axios is a popular JavaScript library that simplifies HTTP
                  requests and provides a promise-based interface for making
                  asynchronous API calls from web applications.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Appolo Server</h2>
                <p className="lead">
                  Apollo Server is a versatile GraphQL server implementation
                  that enables developers to build scalable and performant
                  GraphQL APIs with ease, integrating with various data sources
                  and tools.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://logowik.com/content/uploads/images/301_docker.jpg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Docker</h2>
                <p className="lead">
                  A software platform that enables developers to package and run
                  applications quickly and consistently in various environments.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://tukuz.com/wp-content/uploads/2020/12/xendit-logo-vector.png"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Xendit</h2>
                <p className="lead">
                  A payment platform that provides integrated payment solutions
                  for businesses in Indonesia with various payment methods.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Jquery</h2>
                <p className="lead">
                  jQuery is a fast and concise JavaScript library that
                  simplifies HTML document traversing, event handling, and
                  animating, making it easier to create interactive web
                  experiences.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Expo</h2>
                <p className="lead">
                  A development tool that simplifies the creation, testing, and
                  deployment of React Native applications.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">Firebase</h2>
                <p className="lead">
                  Firebase is a comprehensive mobile and web development
                  platform provided by Google that offers a range of services,
                  including real-time database, authentication, hosting, and
                  cloud functions.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center custom-card mt-3 mb-3">
                <img
                  src="data:image/png;base64,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"
                  alt="React Logo"
                  width="140"
                  height="140"
                  className="bd-placeholder-img rounded-circle mt-3"
                  style={{ backgroundColor: "white" }}
                />
                <h2 className="fw-normal2">React Paper</h2>
                <p className="lead">
                  React Paper is a UI component library for React that provides
                  pre-designed and customizable components inspired by Material
                  Design, enabling developers to create visually appealing and
                  consistent user interfaces with ease.
                </p>
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

            <footer className="pt-3 mt-4 text-body-secondary border-top">
              Franky Perwira Hellyosa Sibuea © 2023
            </footer>
          </div>
        </main>
      </body>
    </>
  );
};

export default Main;
