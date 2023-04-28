import MaskGroup from "../../components/MaskGroup";
import "./style.scss";
function Home() {
  return (
    <div className="home">
      <div className="welcome_message">
        <div className="welcome_heading">Welcome to Nexsphere's</div>
        <div className="welcome_body">
          Welcome to Nexsphere Holdings, a technology holding company that
          specialises in developing and acquiring innovative companies in the
          technology sector.
        </div>
        <div className="welcome_body">
          We are a dynamic and forward-thinking organisation that invests in
          companies that are driving positive change and innovation in the tech
          industry. Our portfolio consists of a diverse range of companies, from
          cutting-edge startups to established industry leaders, all of which
          share a commitment to excellence and a passion for using technology to
          solve complex problems.
        </div>
        <div className="welcome_body">
          As a holding company, we provide our portfolio companies with the
          resources, expertise, and support they need to succeed. Our
          experienced team of professionals brings a wealth of knowledge and
          expertise in areas such as finance, operations, and technology, and
          works closely with each of our portfolio companies to help them
          achieve their goals and reach their full potential.
        </div>
        <div className="welcome_body">
          Join us on this exciting journey and be a part of shaping the future
          of technology. 
        </div>
        <div className="welcome_body">
          Connect with us today to learn more about our portfolio and our vision
          for the future.
        </div>
      </div>
      <div className="ourcompanies">
        <div className="company_heading">Our Companies</div>
        <MaskGroup />
      </div>
    </div>
  );
}

export default Home;
