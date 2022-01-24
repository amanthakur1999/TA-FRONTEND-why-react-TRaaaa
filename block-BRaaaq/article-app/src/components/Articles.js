import PropTypes from 'prop-types';

import data from '../data/data';

function Articles() {
  return (
    <section className="articles container">
      <h2 className="center">Article</h2>
      <div className="flex wrap">
        {data.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
}

function Article(props) {
  return (
    <>
      <article className="flex-28 card">
        <img src={props.urlToImage} alt="" />
        <div className="text">
          <h4>{props.title}</h4>
          <h5>Author:{props.author}</h5>
          <p>{props.content.slice(0, 100)}....</p>
          <a href={props.url} target="_blank" className="center btn">
            Learn More
          </a>
        </div>
      </article>
    </>
  );
}

Article.propTypes = {
  urlToImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Articles;
