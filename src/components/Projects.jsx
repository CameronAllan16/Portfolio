import '../assets/projects.css';
import NavBar from './NavBar';
import Footer from './Footer';

function Projects() {
  return (
    <div className="Projects">
      <NavBar />
      <div className="content-wrapper">
        <div className='title'>
          <div className='title-content'>
              <h1>Projects</h1>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="card-content">
              <h3>Estate Vault</h3>

              {/* <img
                  className="project-image"
                  src="https://user-images.githubusercontent.com/70381945/206295189-05931d0e-68da-4a60-b11c-88353e50a58d.png"
                  alt="Estate Vault"
                /> */}
              <p>
                EstateVault is an all-in-on estate management system where estate owners can store
                and manage their important estate documents, such as wills, power of attorney, but
                also a place to store external account information like Facebook login information.
                The system also allows for users to upload and share estate documents with approved
                connections with the user.
              </p>
            </div>
            <div className="go-button">
              <button className="expanded-project">
                <svg class="svg-icon" height={32} width={32} viewBox="0 0 20 20">
                  <path d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-content">
                <h3>Portfolio</h3>
                {/* <img className="project-image" src="image-2.jpg" alt="Portfolio" /> */}
                {/* <p>
                  Believe it or not, this site was built entirely from scratch by me, using
                  React.JS. If you would like take a look at the repository if it holds information
                  you require to look at.
                </p> */}
              </div>
            </div>
            <div className="go-button">
              <button className="expanded-project">
                <svg class="svg-icon" height={15} width={15} viewBox="0 0 20 20">
                  <path d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
