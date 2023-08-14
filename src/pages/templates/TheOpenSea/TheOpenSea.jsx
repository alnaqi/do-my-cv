import "./TheOpenSea.css";
import DOMPurify from "dompurify";

function TheOpenSea() {
  const fullName = `${JSON.parse(
    localStorage.getItem("firstName")
  )} ${JSON.parse(localStorage.getItem("lastName"))}`;
  const mobile = JSON.parse(localStorage.getItem("phone"));
  const email = JSON.parse(localStorage.getItem("email"));
  const links = JSON.parse(localStorage.getItem("url" || null))?.map(
    (urls, i) => {
      const websites = [
        "google",
        "youtube",
        "amazon",
        "facebook",
        "yahoo",
        "reddit",
        "wikipedia",
        "ebay",
        "bing",
        "netflix",
        "office",
        "instructure",
        "Shopify",
        "Twitch",
        "cnn",
        "instagram",
        "intuit",
        "chase",
        "snapchat",
        "tiktok",
        "telegram",
        "twitter",
        "quora",
        "discord",
        "linkedin",
      ];

      let domain = "nothing"
      if (urls.url.includes("https://")) {
        const fulldomain = new URL(urls.url);
        const halfdomain = fulldomain.hostname.replace("www.", "");
        domain = halfdomain.replace(".com", "");
      }
      const word = domain;
      const firstLetter = word.charAt(0);
      const firstLetterDomain = firstLetter.toUpperCase();
      const remainingLetters = word.slice(1);
      const capitalizedDomain = firstLetterDomain + remainingLetters;
      return (
        <p key={i}>
          <b>{websites.includes(domain) ? capitalizedDomain : "Link"}</b>:{" "}
          {urls.url}
        </p>
      );
    }
  );
  const aboutMe = JSON.parse(localStorage.getItem("aboutMe"));
  const academicDegree = JSON.parse(localStorage.getItem("academicDegree"));
  const collage = JSON.parse(localStorage.getItem("collage"));
  const specialist = JSON.parse(localStorage.getItem("specialist"));
  const degreeNo = JSON.parse(localStorage.getItem("degreeNo"));
  const degreeNoSelect = JSON.parse(localStorage.getItem("degreeNoSelect"));
  const eduDate = JSON.parse(localStorage.getItem("eduDate"));

  const dateToString = (date) => {
    return new Date(date).toLocaleDateString("default", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div id="TheOpenSea" className="A4">
      <div className="cv-container">
        <div className="TheOpenSea-header">
          <h1>{fullName}</h1>
          <div className="TheOpenSea-sub-header">
            <p>
              <b>Mobile:</b> {mobile}
            </p>
            <p>
              <b>Email:</b> {email}
            </p>
            {links}
          </div>
        </div>
        <div className="TheOpenSea-container">
          <div className="TheOpenSea-main">
            <div>
              <h2>OBJECTIVES</h2>
            </div>
            <div className="TheOpenSea-body">
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(aboutMe),
                }}
              ></p>
            </div>

            <div>
              <h2>EDUCATION</h2>
            </div>
            <div className="TheOpenSea-body">
              <p className="li-space-between">
                <span>
                  {academicDegree} in {specialist}
                  <span className="TheOpenSea-detailes">
                    from {collage} with GPA: {degreeNo} out of {degreeNoSelect}
                  </span>
                </span>
                <span className="date-no-break">{dateToString(eduDate)}</span>
              </p>
            </div>

            <div>
              <h2>CERTIFICATION</h2>
            </div>
            <div className="TheOpenSea-body">
              <ul className="dashed">
                {JSON.parse(localStorage.getItem("courseLists" || null))?.map(
                  (course, i) => (
                    <li key={i}>
                      <span className="li-space-between">
                        <span>{course.titleCourse}</span>
                        <span className="date-no-break">
                          {dateToString(course.courseDate)}
                        </span>
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h2>EXPERIENCE</h2>
            </div>
            <div className="TheOpenSea-body">
              <ul className="dashed">
                {JSON.parse(localStorage.getItem("exper" || null))?.map(
                  (experiances, i) => (
                    <li key={i}>
                      <span className="li-space-between">
                        <span>
                          {experiances.titleExper} in {experiances.company}
                        </span>
                        <span className="date-no-break">
                          {`${dateToString(
                            experiances.startDate
                          )} - ${experiances.checkedEndDate ? "Present" : dateToString(experiances.endDate)}`}
                        </span>
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h2>SKILLS</h2>
            </div>
            <div className="TheOpenSea-body">
              <ul className="dashed">
                {JSON.parse(localStorage.getItem("skillLists" || null))?.map(
                  (skill, i) => (
                    <li key={i}>{skill.titleSkill}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheOpenSea;
