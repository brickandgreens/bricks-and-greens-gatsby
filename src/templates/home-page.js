import React from 'react'
import Helmet from 'react-helmet';

class HomePage extends React.Component {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }
  render() {
    const { markdownRemark: post } = this.props.data;
    console.log('home props', post)
    return (
      <div>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <section >

    <div className"header" data-parallax="scroll" data-image-src="assets/img/img-header.jpg">

      <div id="topbar" className"topbar">
        <div className"container">
          <div className"row">
            <div className"col-sm-8">
              <div className"nav-utility">
                <span className"nav-item">Professional Construction and Landscape Solutions.</span>
              </div>
            </div>
            <div className"col-sm-4 hidden-xs">
              <div className"nav-utility nav-right">
                <a href="#" className"nav-item"><i className"fa fa-twitter"></i></a>
                <a href="#" className"nav-item"><i className"fa fa-facebook"></i></a>
                <a href="#" className"nav-item"><i className"fa fa-linkedin"></i></a>
                <a href="#" className"nav-item"><i className"fa fa-pinterest"></i></a>
                <a href="#" className"nav-item"><i className"fa fa-envelope-o"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className"site-header-affix-wrapper">
        <header id="masthead" className"site-header" role="banner">
          <div className"container">
            <div className"row">
              <div className"col-sm-3">
                <div className"site-branding">
                  <h1 className"site-title title-image"><a href="#home" rel="home"><img src="assets/img/img-logo.png" alt="construction business" className"img-responsive"/></a></h1>
                </div>
              </div>

              <div className"col-sm-9">
                <nav id="site-navigation" className"main-navigation" role="navigation">
                  <button type="button" className"menu-toggle" aria-controls="primary-menu" aria-expanded="false"><span className"pe-7s-menu"></span><span className"sr-only">Primary Menu</span></button>

                  <div className"menu-testing-menu-container">
                    <ul id="primary-menu" className"menu nav-menu" aria-expanded="false">
                      <li className"menu-item current-menu-item"><a href="#home">Home</a></li>
                      <li className"menu-item"><a href="#service">Services</a></li>
                      <li className"menu-item"><a href="#work">Projects</a></li>
                      <li className"menu-item"><a href="#about">About</a></li>
                      <li className"menu-item"><a href="#testimonial">Testimonial</a></li>
                      <li className"menu-item"><a href="#contact">Contact</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>


      <div className"container">
        <div className"row">
          <div className"col-sm-5">
            <div className"header-caption">
              <span className"caption-subtitle">Our Service</span>
              <h2 className"caption-title">We are your best homes, landscaping and construction solution.</h2>
              <p>We provide overall planning, coordination and control of a project, so you don’t have to worry about anything. Our promise as a contractor is to build community value into every project while delivering professional expertise.</p>
              <div className"header-action-button">
                <a className"btn btn-warning btn-md" href="#">Contact us</a>
                <a className"btn btn-default btn-bordered  btn-md" href="#">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="additional-info" className"additional-info block-section bg-grey padd-20-top padd-40-btm">
      <div className"container">
        <div className"row">
          <div className"col-md-3 col-sm-6">
            <div className"contact-item">
              <div className"contact-item-icon">
                <i className"fa fa-phone"></i>
              </div>
              <h4 className"contact-item-title">Phone number:</h4>
              <div className"contact-item-info">+63 919 1234</div>
            </div>
          </div>

          <div className"col-md-3 col-sm-6">
            <div className"contact-item">
              <div className"contact-item-icon">
                <i className"fa fa-envelope-o"></i>
              </div>
              <h4 className"contact-item-title">Email address:</h4>
              <div className"contact-item-info">hello@brickandgreens.com</div>
            </div>
          </div>

          <div className"col-md-3 col-sm-6">
            <div className"contact-item">
              <div className"contact-item-icon">
                <i className"fa fa-map-marker"></i>
              </div>
              <h4 className"contact-item-title">Office address:</h4>
              <div className"contact-item-info">5252 E Walnut Ave, Pasig City</div>
            </div>
          </div>

          <div className"col-md-3 col-sm-6">
            <div className"contact-item">
              <div className"contact-item-icon">
                <i className"fa fa-clock-o"></i>
              </div>
              <h4 className"contact-item-title">Opening times:</h4>
              <div className"contact-item-info">Mon - Sat: 7.00 - 16:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="service" className"service content-section bg-white">
      <div className"container">
        <div className"row">
          <div className"col-md-4">
            <div className"blog-entry">
              <a href="#" className"blog-entry-thumbnail">
                <img src="assets/img/img-service-01.jpg" alt="metal roofting" className"img-responsive"/>
              </a>
              <div className"blog-entry-header">
                <h2 className"entry-title"><a href="#" rel="bookmark">Metal Roofting</a></h2>
              </div>
              <div className"blog-entry-content">
                <p>Construction offer you the best in metal roofing services, supplies and materials to help protect one of your biggest investments you will ever make, your home. There is no better way to protect …</p>
                <p><a href="#" className"read-more">Read more &#43;</a></p>
              </div>
            </div>
          </div>

          <div className"col-md-4">
            <div className"blog-entry">
              <a href="#" className"blog-entry-thumbnail">
                <img src="assets/img/img-service-02.jpg" alt="green building" className"img-responsive"/>
              </a>
              <div className"blog-entry-header">
                <h2 className"entry-title"><a href="#" rel="bookmark">Green Building</a></h2>
              </div>
              <div className"blog-entry-content">
                <p>By choosing to build green, you aremaking an effort to reduce the burden on the environment and also add value to your home. StrusturePress provides you with the guidance and the tools that are necessary …</p>
                <p><a href="#" className"read-more">Read more &#43;</a></p>
              </div>
            </div>
          </div>

          <div className"col-md-4">
            <ul className"blog-entry-list">
              <li>
                <span className"entry-post-thumbnail">
                  <img src="assets/img/img-service-03.jpg" alt="construction Consultant"/>
                </span>
                <div className"entry-post-content">
                  <h4 className"entry-post-title"><a href="#">Construction Consultant</a></h4>
                  <p>Process of Consultation Whether you know exactly how you ...</p>
                </div>
              </li>
              <li>
                <span className"entry-post-thumbnail">
                  <img src="assets/img/img-service-04.jpg" alt="General Contracting"/>
                </span>
                <div className"entry-post-content">
                  <h4 className"entry-post-title"><a href="#">General Contracting</a></h4>
                  <p>Construction With a reputation built on offering superior ...</p>
                </div>
              </li>
              <li>
                <span className"entry-post-thumbnail">
                  <img src="assets/img/img-service-05.jpg" alt="Construction Management"/>
                </span>
                <div className"entry-post-content">
                  <h4 className"entry-post-title"><a href="#">Construction Management</a></h4>
                  <p>We offer commitment at all levels of building project, from preparing ...</p>
                </div>
              </li>
              <li>
                <span className"entry-post-thumbnail">
                  <img src="assets/img/img-service-06.jpg" alt="House Renovation"/>
                </span>
                <div className"entry-post-content">
                  <h4 className"entry-post-title"><a href="#">House Renovation</a></h4>
                  <p>Interior There are a number of great reasons to makeover ...</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>



    <div id="work" className"work content-section bg-grey">
      <div className"container">
        <div className"row">
          <div className"col-md-12">
            <div className"section-title">
              <h2>Our Works</h2>
            </div>
          </div>
        </div>

        <div className"row">
          <div className"col-md-12">
            <ul className"work-filter">
              <li className"active" data-filter="*"><a href="#">All works</a></li>
              <li data-filter=".buildings"><a href="#buildings">Green Wall</a></li>
              <li data-filter=".interior-design"><a href="#interior-design">Green Roof</a></li>
              <li data-filter=".isolation"><a href="#isolation">Garden Rehab</a></li>
              <li data-filter=".house-renovation"><a href="#house-renovation">House Renovation</a></li>
            </ul>

            <ul className"work-grid">
              <li className"work-item buildings">
                <a href="assets/img/img-work-01.jpg" title="Green Walls" className"image-lightbox">
                  <div className"work-item-image">
                    <img src="assets/img/img-work-01.jpg" alt="Green Walls"/>
                  </div>
                  <div className"work-item-info">
                    <h4 className"work-item-title">Green Walls</h4>
                    <span className"work-item-desc">Buildings</span>
                  </div>
                </a>
              </li>
              <li className"work-item interior-design">
                <a href="assets/img/img-work-02.jpg" title="Mark Bedroom" className"image-lightbox">
                  <div className"work-item-image">
                    <img src="assets/img/img-work-02.jpg" alt="Mark Bedroom"/>
                  </div>
                  <div className"work-item-info">
                    <h4 className"work-item-title">Mark Bedroom</h4>
                    <span className"work-item-desc">Interior Design</span>
                  </div>
                </a>
              </li>
              <li className"work-item buildings">
                <a href="assets/img/img-work-03.jpg" title="Edu Hostel" className"image-lightbox">
                  <div className"work-item-image">
                    <img src="assets/img/img-work-03.jpg" alt="Edu Hostel"/>
                  </div>
                  <div className"work-item-info">
                    <h4 className"work-item-title">Edu Hostel</h4>
                    <span className"work-item-desc">Buildings</span>
                  </div>
                </a>
              </li>
              <li className"work-item isolation house-renovation">
                <a href="assets/img/img-work-04.jpg" title="Alan Home" className"image-lightbox">
                  <div className"work-item-image">
                    <img src="assets/img/img-work-04.jpg" alt="Alan Home"/>
                  </div>
                  <div className"work-item-info">
                    <h4 className"work-item-title">Alan Home</h4>
                    <span className"work-item-desc">Isolation</span>
                  </div>
                </a>
              </li>
              <li className"work-item interior-design house-renovation">
                <a href="assets/img/img-work-05.jpg" title="Jannet Home" className"image-lightbox">
                  <div className"work-item-image">
                    <img src="assets/img/img-work-05.jpg" alt="Jannet Home"/>
                  </div>
                  <div className"work-item-info">
                    <h4 className"work-item-title">Jannet Home</h4>
                    <span className"work-item-desc">House Renovation</span>
                  </div>
                </a>
              </li>
              <li className"work-item design photography">
                <a href="assets/img/img-work-06.jpg" title="Papa Ron's Restaurant" className"image-lightbox">
                  <div className"work-item-image">
                    <img src="assets/img/img-work-06.jpg" alt="Papa Ron's Restaurant"/>
                  </div>
                  <div className"work-item-info">
                    <h4 className"work-item-title">Papa Ron's Restaurant</h4>
                    <span className"work-item-desc">Interior Design</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>



    <div id="cta" className"cta block-section padd-40-top padd-40-btm bg-dark">
      <div className"container">
        <div className"row">
          <div className"col-sm-8">
            <h4>Looking for Professionals to project and build your dream home?</h4>
            <p>We offer the best engineers and builders to make your dreams come true.</p>
          </div>
          <div className"col-sm-4 text-right marg-20-top">
            <a href="#" className"button">Let's talk together</a>
          </div>
        </div>
      </div>
    </div>



    <div id="about" className"block-section image-block">
      <div className"container-fluid">
        <div className"row">
          <div className"image-block-item col-md-6 col-sm-5 col-xs-12">
            <div className"image-block-item-background" style="background-image: url('assets/img/img-content-01.jpg');"></div>
          </div>
        </div>
      </div>
      <div className"container clear">
        <div className"row">
          <div className"col-md-5 col-md-offset-7 col-sm-6 col-sm-offset-6 col-xs-10 col-xs-offset-1 padd-80-top padd-60-btm">
            <ul className"nav nav-tabs nav-justified" id="myTabs" role="tablist">
              <li role="presentation" className"active">
                <a href="#who" id="who-tab" role="tab" data-toggle="tab" aria-controls="who" aria-expanded="true">Who We Are</a>
              </li>
              <li role="presentation" className"">
                <a href="#why" role="tab" id="why-tab" data-toggle="tab" aria-controls="why" aria-expanded="false">Why Choose Us</a>
              </li>
            </ul>
            <div className"tab-content" id="myTabContent">
              <div className"tab-pane fade active in" role="tabpanel" id="who" aria-labelledby="who-tab">
                <h2 className"marg-20-btm">Who We Are?</h2>
                <p>Bricks and Greens traces its roots back to 2013 in Pasig and since then have never looked back. With hundreds of successful projects under our belt, we can proudly say that we are one.</p>
                <p>For more than 3 years, Bricks and Greens has offered a wide range of landscaping services in Metro Manila and many other cities of Philippines. We strive to maintain.<br/>We aim to eliminate the task of dividing your project between different architecture and construction company.</p>
                <p><a href="#" className"button"><i className"fa fa-wrench"></i> Learn Our Service</a></p>
              </div>
              <div className"tab-pane fade" role="tabpanel" id="why" aria-labelledby="why-tab">
                <h2 className"marg-40-btm">Why Choose Us?</h2>
                <div className"service-item service-item-icon-left">
                  <div className"service-item-icon">
                    <span className"pe-7s-gleam"></span>
                  </div>
                  <h4 className"service-item-title">We Are Passionate</h4>
                  <p>We have a proven record of accomplishment and are a reputable company in the California.</p>
                </div>
                <div className"service-item service-item-icon-left">
                  <div className"service-item-icon">
                    <span className"pe-7s-like"></span>
                  </div>
                  <h4 className"service-item-title">Honest and Dependable</h4>
                  <p>For us, honesty is the only policy and we strive to complete all projects with integrity.</p>
                </div>
                <p><a className"button btn-danger popup-video" href="http://www.youtube.com/watch?v=Og879fOk6DQ"><i className"fa fa-play-circle-o"></i> Watch Overview</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="testimonial" className"block-section image-block bg-white">
      <div className"container-fluid container-no-padding">
        <div className"row row-no-margin">
          <div className"image-block-item col-md-6 col-md-offset-6 col-sm-5 col-xs-12">
            <div className"image-block-item-background" style="background-image: url('assets/img/img-content-03.jpg');"></div>
          </div>
        </div>
      </div>
      <div className"container clear">
        <div className"row">
          <div className"col-md-5 col-md-offset-0 col-sm-7 col-sm-offset-5 padd-60-top padd-100-btm">
            <h2 className"marg-40-btm text-center">What People Says</h2>
            <div className"carousel slide testimony-dark" id="testimony" data-ride="carousel">
              <ol className"carousel-indicators">
                <li data-target="#testimony" data-slide-to="0" className"active"></li>
                <li data-target="#testimony" data-slide-to="1" className""></li>
              </ol>
              <div className"carousel-inner" role="listbox">
                <div className"item active">
                  <p>Recently we had to redesign our landing page and were looking for a template that fit our needs. We found this template which far exceeded our expectations</p>
                  <img className"testimony-item-image" src="assets/img/img-testimony-01.jpg"/>
                  <span className"testimony-item-source source-alt"><strong>David Groot</strong> Shark Inc.</span>
                </div>
                <div className"item">
                  <p>I don't know what else to say. It had everything we wanted and was better designed than anything we could have accomplished on our own. Thanks for the great work.</p>
                  <img className"testimony-item-image" src="assets/img/img-testimony-02.jpg"/>
                  <span className"testimony-item-source source-alt"><strong>Max Well</strong> Cooldad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="contact" className"contact image-block">
      <div className"container-fluid container-no-padding">
        <div className"row row-no-margin">
          <div className"image-block-item col-md-6 col-sm-5 col-xs-12">
            <div className"image-block-item-background image-block-item-map" data-lat="14.5787592" data-lng="121.0461517"></div>
          </div>
        </div>
      </div>
      <div className"container clear">
        <div className"row">
          <div className"col-md-5 col-md-offset-7 col-sm-6 col-sm-offset-6 col-xs-12 col-xs-offset-0 padd-40-top padd-80-btm">
            <form className"contact-form">
              <div className"form-group">
                <label for="contact_name">Name</label>
                <input type="text" className"form-control form-bordered" id="contact_name"/>
              </div>
              <div className"form-group">
                <label for="contact_email" className"form-label">Email</label>
                <input type="email" className"form-control form-bordered" id="contact_email"/>
              </div>
              <div className"form-group">
                <label for="contact_message" className"form-label">Message</label>
                <textarea className"form-control form-bordered" rows="6" id="contact_message"></textarea>
              </div>
              <button type="submit" className"button btn-squar btn-roundede">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>



    <div id="client" className"client block-section bg-white padd-20-top padd-20-btm">
      <div className"container">
        <div className"row">
          <div className"col-md-12">
            <div id="slider-thumbnail" className"owl-carousel owl-theme client-slider slider-carousel navigation-hide">
              <div className"item">
                <a href="#">
                  <img src="assets/img/img-client-01.png" alt="client"/>
                </a>
              </div>
              <div className"item">
                <a href="#">
                  <img src="assets/img/img-client-02.png" alt="client"/>
                </a>
              </div>
              <div className"item">
                <a href="#">
                  <img src="assets/img/img-client-03.png" alt="client"/>
                </a>
              </div>
              <div className"item">
                <a href="#">
                  <img src="assets/img/img-client-04.png" alt="client"/>
                </a>
              </div>
              <div className"item">
                <a href="#">
                  <img src="assets/img/img-client-05.png" alt="client"/>
                </a>
              </div>
              <div className"item">
                <a href="#">
                  <img src="assets/img/img-client-06.png" alt="client"/>
                </a>
              </div>
              <div className"item">
                <a href="#">
                  <img src="assets/img/img-client-07.png" alt="client"/>
                </a>
              </div>
              <div className"item">
                <a href="#">
                  <img src="assets/img/img-client-08.png" alt="client"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <footer id="colophon" className"site-footer bg-black" role="contentinfo">
      <div className"container">
        <div className"row">
          <div className"col-md-4 col-sm-6">
            <section className"widget">
              <img src="assets/img/img-logo-footer.png" alt="bootstrap theme for construction companies" className"img-responsive marg-20-btm marg-20-top"/>
              <p>Construction company based on Pasig City. Construction was very sufficient in maintaining the integrity of project in terms of planning, scheduling, cost and quality.</p>
            </section>
          </div>

          <div className"col-md-2 col-sm-6">
            <section className"widget">
              <h3 className"widget-title">Our Company</h3>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Selected Work</a></li>
                <li><a href="#">Get in touch</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </section>
          </div>

          <div className"col-md-3 col-sm-6">
            <section className"widget">
              <h3 className"widget-title">Our Services</h3>
              <ul>
                <li><a href="#">Metal Roofting</a></li>
                <li><a href="#">Green Building</a></li>
                <li><a href="#">Construction Consultant</a></li>
                <li><a href="#">Construction Management</a></li>
                <li><a href="#">General Contracting</a></li>
              </ul>
            </section>
          </div>

          <div className"col-md-3 col-sm-6">
            <section className"widget">
              <h3 className"widget-title">Our Contact</h3>
              <p>5252 E Walnut Ave, Pasig City, PH.</p>
              <p>hello@bricksandgreens.com<br/>+63 (919) 1234 1234</p>
            </section>
          </div>
        </div>
      </div>
    </footer>



    <section id="copyright" className"copyright bg-black">
      <div className"container">
        <div className"row">
          <div className"col-sm-6 copy-left">
            <p>Copyright &copy; 2017 <a href="http://ginotria.com"><strong>Gino Tria</strong></a>. All Right Reserved.</p>
          </div>

          <div className"col-sm-6 copy-right">
            <ul className"social-icon">
              <li><a href="#" target="_blank" className"icon-twitter"><i className"fa fa-twitter"></i></a></li>
              <li><a href="#" target="_blank" className"icon-facebook"><i className"fa fa-facebook-square"></i></a></li>
              <li><a href="#" target="_blank" className"icon-youtube"><i className"fa fa-youtube"></i></a></li>
              <li><a href="#" target="_blank" className"icon-instagram"><i className"fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>



      </section>
      </div>
    );
  }
}

export default HomePage;
export const homePageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        intro {
          heading
          description
          blurbs {
            image
            text
          }
        }
      }
    }
  }
`;
