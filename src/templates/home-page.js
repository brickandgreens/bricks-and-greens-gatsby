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
    console.log('post', post);
    return (
      <div>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-7">
              <div className="section">
                <h2 className="title is-size-3 has-text-primary is-bold-light">{post.frontmatter.title}</h2>
                <div className="content" dangerouslySetInnerHTML={{ __html: post.frontmatter.description }} />

              </div>
            </div>
            <div className="column is-5" />
          </div>
        </div>
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
      }
    }
  }
`;
