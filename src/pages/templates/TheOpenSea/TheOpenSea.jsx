// import { toHijri, toGregorian } from "hijri-converter";
import { toGregorian } from "hijri-converter";
import "./TheOpenSea.css";
import DOMPurify from "dompurify";

function TheOpenSea({}) {

  const dateToString = (date) => {
    return new Date(date).toLocaleDateString("default", {
      year: "numeric",
      month: "short",
    });
  }

  const dateToStringConverter = (date) => {
    if (date.match(/^[a-z0-9_.,'"!?;:& ]+$/i)) {
      const DATE = new Date(date).toLocaleDateString("default", {
        year: "numeric",
        month: "short",
      });
      const months = ["محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"]
      const a2e = s => s.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))

      const yearInHijrah = a2e(DATE).replace(/\D/g, '');
      const monthInHijrah = a2e(DATE).replace(/[0-9]/g, '').split(" ").join("");
      const numOfMonth = months.indexOf(monthInHijrah) + 1

      const convertedDate = toGregorian(yearInHijrah, numOfMonth, 1)

      return `${convertedDate.gy} ${convertedDate.gm}`
    }
    else {
      return new Date(date).toLocaleDateString("default", {
        year: "numeric",
        month: "short",
      });
    }

  };


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
          <b>{urls.url !== "" ? websites.includes(domain) ? `${capitalizedDomain}: ` : "Link: " : ""}</b>
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

            {(JSON.parse(localStorage.getItem("courseLists" || null)).length !== 0)
              ?
              <><div>
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
              </> : ""
            }

            {(JSON.parse(localStorage.getItem("exper" || null)).length !== 0)
              ?
              <><div>
                <h2>EXPERIENCE</h2>
              </div>
                <div className="TheOpenSea-body">
                  <ul className="dashed">
                    {JSON.parse(localStorage.getItem("exper" || null))?.map(
                      (experiances, i) => (
                        <li key={i}>
                          <span className="li-space-between">
                            <span>
                              <b>{experiances.titleExper} in {experiances.company}</b>
                            </span>
                            <span className="date-no-break">
                              {`${dateToStringConverter(
                                experiances.startDate
                              )} - ${experiances.checkedEndDate ? "Present" : dateToStringConverter(experiances.endDate)}`}
                            </span>
                          </span>
                          <p>{experiances.descExper}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </> : ""
            }

            {JSON.parse(localStorage.getItem("skillLists" || null)).length !== 0 ?
              <><div>
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
                </div></>
              : ""
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheOpenSea;
