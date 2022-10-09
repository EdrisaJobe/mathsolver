import Helmet from "react-helmet";

export default function About() {
  return (
    <> 
      <Helmet>
      <title>About</title>
      </Helmet>
      <div className="container shadow py-5 my-5">
        <h1>What is MathSolver?</h1>
        <hr/>
        <h5 className="p-2 m-3">This site was made by Edrisa Jobe in order to help students takign math courses, the site is very simplistic
            and easy to use for all. The overall layout was intentionally made to be easy to navigate and get from one place 
            to another with ease. I hope to make the life of many students a little bit easier by making this site while at the
            same time displaying my overall skills for both JavaScript and React. This site is also mobile friendly and very interactive
            when it comes to functionality as shown by the fast load-up times when navigating between tabs. Learn more on my <a href="https://github.com/EdrisaJobe/" rel="noreferrer" target="_blank">GitHub</a>.</h5>
      </div>
    </>
  );
}
