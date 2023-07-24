const Education = () => {
  return (
    <>
      <h2 className="pb-2 border-bottom" style={{ textAlign: "center" }}>
        My Educational Background
      </h2>
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            “The whole purpose of education is to turn mirrors into windows.” -
            Sydney J. Harris{" "}
          </h2>
          <h2>
            <span className="text-body-secondary">
              Gadjah Mada University, 2019{" "}
            </span>
          </h2>
          <p className="lead">
            I pursued my education at Gadjah Mada University, majoring in
            Physics Engineering with a concentration in Instrumentation and
            Control. I began my education in August 2015 and completed it in
            November 2019. In addition to acquiring hard skills, I also gained
            numerous soft skills during my studies. For instance, I learned how
            to effectively communicate and lead small teams in organizing
            department-level events, lead a subunit in implementing a Real Work
            Lecture (Kuliah Kerja Nyata) program in a village in Dukun Magelang
            (KKN 2018), and participated in social activities such as teaching
            children in an orphanage.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="https://scontent-cgk1-2.xx.fbcdn.net/v/t1.6435-9/74240110_2625810180820438_5799175258078445568_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGLzBzSU4eKJgK5AJwGlVH2Uh7qPx40dmBSHuo_HjR2YD0HJBOfhhXoeAUsM1oe-7k-QbOza_yeDQTS4EguE6Qe&_nc_ohc=nJLm8yOl4y4AX9tM167&_nc_ht=scontent-cgk1-2.xx&oh=00_AfCJA5_-Xs1CYoa7L5DKhMi-urjJYCn1gcsPowIQ8D6suA&oe=64D473A6"
            alt="Placeholder: 500x500"
            width="450"
          />
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            “Education without application is just entertainment.” - Tim Sanders{" "}
          </h2>
          <h2>
            <span className="text-body-secondary">Gresik, East Java, 2018</span>
          </h2>
          <p className="lead">
            I also had the valuable opportunity to carry out an internship at
            PT. Saka Indonesia Pangkah Ltd, located in Gresik, and joined the
            Instrument and Control division. Although the internship duration
            was only one month, I was able to learn many technical aspects, such
            as the process flow of transforming offshore petroleum into LNG and
            crude oil, the various instruments used in the field, and directly
            observing the operation of the Distributed Control System (DCS).
            Additionally, I gained non-technical skills, such as participating
            in daily briefings and effectively communicating to address any
            issues that arose. This internship provided me with valuable
            knowledge and preparation for my future professional career.
          </p>
        </div>
        <div className="col-md-5 order-md-1 gambar5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="https://1.bp.blogspot.com/-tRWARVBbZbI/YITZWmrQucI/AAAAAAAABOA/2wYF1jHyJS47BWdx5O2NFCT1MJ1pm8_KwCLcBGAsYHQ/s2048/IMG_20180119_191943.jpg"
            alt="Placeholder: 500x500"
            width="450"
            height="450"
          />
        </div>
      </div>
    </>
  );
};

export default Education;
