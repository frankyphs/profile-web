import Table from "react-bootstrap/Table";
const IT = () => {
  return (
    <>
      <h2 className="pb-2 border-bottom" style={{ textAlign: "center" }}>
        Why do I switch carrer?
      </h2>
      <div className="row featurette">
        <div className="col-md-7 mt-5">
          <h2 className="featurette-heading fw-normal lh-1">
            All about Digitalization...
          </h2>
          <p className="lead">
            1. The massive expansion of the digital business currently gives me
            confidence that the technology industry will continue to thrive for
            the next 10 to 20 years, making it a great opportunity.
          </p>
          <p className="lead">
            2. Almost every company in any field requires a website to promote
            and introduce their company to the public, and there are always new
            companies emerging that need website development services.
          </p>
          <p className="lead">
            3. There is also an open opportunity to engage in freelance work,
            which allows for additional income for me in the future.
          </p>
        </div>
        <div className="col-md-5 gambar6">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            alt="Placeholder: 500x500"
            width="450"
          />
        </div>
      </div>
      <h2 className="pb-2 border-bottom" style={{ textAlign: "center" }}>
        My IT Journey
      </h2>
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            Programming is about 3 things : Logic, Syntax, and Workflow{" "}
          </h2>
          <h2>
            <span className="text-body-secondary">
              Hacktiv8 Bootcamp, February 2023 - July 2023
            </span>
          </h2>
          <p className="lead">
            My interest in the web development world started with my curiosity
            about the workflow of a website and its elements, such as the HTML
            elements that appear when we inspect a web page. Fueled by that
            curiosity, I began searching for information about JavaScript online
            and took courses on platforms like Udemy, Dicoding, and watched
            several YouTube videos. However, I felt that self-learning lacked
            structure, so I eventually decided to enroll in the Hactiv8 Full
            Stack JavaScript Immersive program, which lasted for 4 months.
          </p>
          <h1 className="pekerjaan">Phase 0:</h1>
          <p className="lead">
            I learned to solve basic logic problems using JavaScript.
          </p>
          <h1 className="pekerjaan">Phase 1:</h1>
          <p className="lead">
            In this phase, I learned how to use one of the most popular Node.js
            frameworks, Express. Additionally, I delved into Object-Oriented
            Programming (OOP) concepts in JavaScript and used Sequelize as an
            ORM for JavaScript. I also learned how to build a website,
            particularly the server side, using the MVC architecture pattern.
            For the database, I utilized PostgreSQL and learned SQL queries.
          </p>
          <h1 className="pekerjaan">Phase 2:</h1>
          <p className="lead">
            Initially, I used jQuery as a library for the front-end. Later, I
            explored another famous JavaScript framework called Vue.js. Besides
            creating visually appealing web-based applications with Vue, I
            integrated it with the server side built using Express. To simplify
            state management in Vue, I used Pinia to store all necessary states.
            For the UI, I leveraged Bootstrap as a CSS library to enhance the
            appearance. I deployed the server on AWS EC2 and the front-end on
            Firebase. As for the database, I stored it in Supabase.
          </p>
          <h1 className="pekerjaan">Phase 3:</h1>
          <p className="lead">
            In this phase, I learned to use the React library for web
            application development and React Native for mobile app development.
            To ensure compatibility with the Android operating system, I
            utilized Expo. Expo is a free and open-source platform that enables
            developers to quickly build apps with JavaScript and React Native.
            One challenge in this phase was not only using PostgreSQL as an
            SQL-type database but also incorporating MongoDB as a NoSQL
            database. I also used RedisLab for caching purposes and Docker for
            packaging the web application before deployment. For the database, I
            deployed MongoDB Atlas and Supabase, and the server was deployed on
            AWS EC2.
          </p>
        </div>
        <div className="col-md-5 order-md-1 gambar5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=455&q=80"
            alt="Placeholder: 500x500"
            width="450"
            height="450"
          />
        </div>
      </div>

      <div className="tabeltabel">
        <Table border="1" striped bordered>
          <thead>
            <tr>
              <th>
                <p className="lead" style={{ fontWeight: "bold" }}>
                  *
                </p>
              </th>
              <th>
                <p className="lead" style={{ fontWeight: "bold" }}>
                  Phase 0
                </p>
              </th>
              <th>
                <p className="lead" style={{ fontWeight: "bold" }}>
                  Phase 1
                </p>
              </th>
              <th>
                <p className="lead" style={{ fontWeight: "bold" }}>
                  Phase 2
                </p>
              </th>
              <th>
                <p className="lead" style={{ fontWeight: "bold" }}>
                  Phase 3
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="lead">What I do</p>
              </td>
              <td>
                <p className="lead">Learn to solve basic logic</p>
              </td>
              <td>
                <p className="lead">- Understand OOP paradigm on Javascript</p>
                <p className="lead">
                  - Build a simple server side web using express as library,
                  sequelize as ORM, and PostgreSQL as database (also implemented
                  MVC pattern). Display the web using EJS{" "}
                </p>
              </td>
              <td>
                <p className="lead">
                  - Build a web (server and client side, admin and user side).
                  For client side using JQuery library to manipulate DOM in
                  client side
                </p>
                <p className="lead">
                  - Build a web (server and client side, admin and user side).
                  For client side using VueJS framework and Pinia as state
                  management of Vue
                </p>
              </td>
              <td>
                <p className="lead">
                  - Build a web (server and client side, admin and user side).
                  For client side using React library and Redux as state
                  management of React
                </p>
                <p className="lead">
                  - Build a mobile-based application (server and client side,
                  user side). For client side using React Native library and
                  Redux as state management of React. It also involved RedisLab
                  for cache storing, MongoDB for NoSQL data, and Atlas MongoDB
                  for storing deployed data (SQL data stored in Supabase).
                </p>
                <p className="lead">
                  - Build a mobile-based application (server and client side,
                  user side) for final project graduation (Wedding Service
                  Application). For client side using React Native library and
                  Redux Tool Kit as state management of React. It also involved
                  Xendit for payment gateway, TalkJS to handle chatting section,
                  and PDF kit to make an invoice document.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="lead">Tech Stacks / Concepts</p>{" "}
              </td>
              <td>
                <p className="lead">- Github</p>
                <p className="lead">- Nodejs</p>
                <p className="lead">- HTML/CSS</p>
              </td>
              <td>
                <p className="lead">- Express</p>
                <p className="lead">- Sequelize</p>
                <p className="lead">- PostgreSql</p>
                <p className="lead">- EJS</p>
                <p className="lead">- Bootstrap</p>
                <p className="lead">- OOP</p>
                <p className="lead">- MVC (Model, View, Controller)</p>
              </td>
              <td>
                <p className="lead">- Express</p>
                <p className="lead">- Sequelize</p>
                <p className="lead">- PostgreSql</p>
                <p className="lead">- JQuery</p>
                <p className="lead">- Bootstrap</p>
                <p className="lead">- VueJS</p>
                <p className="lead">- Pinia</p>
                <p className="lead">- AWS EC2</p>
                <p className="lead">- Supabase</p>
                <p className="lead">- Firebase</p>
                <p className="lead">- Multer</p>
                <p className="lead">- Nodemailer</p>
                <p className="lead">- Cloudinary</p>
                <p className="lead">- Payment Gateway (Midtrans)</p>
                <p className="lead">- Git Flow</p>
              </td>
              <td>
                <p className="lead">- Express</p>
                <p className="lead">- Sequelize</p>
                <p className="lead">- PostgreSql</p>
                <p className="lead">- React Bootstrap</p>
                <p className="lead">- React</p>
                <p className="lead">- React Native</p>
                <p className="lead">- Git Flow</p>
                <p className="lead">- AWS EC2</p>
                <p className="lead">- Supabase</p>
                <p className="lead">- Nodemailer</p>
                <p className="lead">- Payment Gateway (Xendit)</p>
                <p className="lead">- Expo</p>
                <p className="lead">- MongoDB</p>
                <p className="lead">- Appolo Server</p>
                <p className="lead">- GraphQL</p>
                <p className="lead">- Docker</p>
                <p className="lead">- RedisLab (cache)</p>
                <p className="lead">- NoSQL</p>
                <p className="lead">- Google maps (Front end mobile)</p>
                <p className="lead">- Redux</p>
                <p className="lead">- Redux Tool Kit</p>
                <p className="lead">- Xendit</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default IT;
