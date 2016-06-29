var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="page-title text-center">Examples</h1>
      <p>Here are a few example location to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Paris'>Paris</Link>
          </li>
          <li>
            <Link to='/?location=Tel-Aviv'>Tel-Aviv</Link>
          </li>
        </ol>
    </div>
  );
}

module.exports = Examples;

