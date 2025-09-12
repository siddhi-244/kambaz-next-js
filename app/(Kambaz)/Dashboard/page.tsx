import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/fullstack.jpg" width={200} height={150} alt="react-logo"/>
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2018" className="wd-dashboard-course-link">
            <Image src="/images/dbms.jpg" width={200} height={150} alt="react-logo"/>
            <div>
              <h5> CS2018 DBMS </h5>
              <p className="wd-dashboard-course-title">
                Database Management System
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2019" className="wd-dashboard-course-link">
            <Image src="/images/php.jpg" width={200} height={150} alt="react-logo"/>
            <div>
              <h5> CS2019 PHP </h5>
              <p className="wd-dashboard-course-title">
                PHP - Programming Language
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2020" className="wd-dashboard-course-link">
            <Image src="/images/dsa.jpg" width={200} height={150} alt="react-logo"/>
            <div>
              <h5> CS2010 Data Structures </h5>
              <p className="wd-dashboard-course-title">
                Data Structures
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2021" className="wd-dashboard-course-link">
            <Image src="/images/algos.jpg" width={200} height={150} alt="react-logo"/>
            <div>
              <h5> CS2021 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Algorithms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2022" className="wd-dashboard-course-link">
            <Image src="/images/datascience.jpg" width={200} height={150} alt="react-logo"/>
            <div>
              <h5> CS2022 Data Science </h5>
              <p className="wd-dashboard-course-title">
                Data Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2024" className="wd-dashboard-course-link">
            <Image src="/images/powerbi.jpg" width={200} height={150} alt="react-logo"/>
            <div>
              <h5> CS2024 Power BI </h5>
              <p className="wd-dashboard-course-title">
                Data Analyst
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
