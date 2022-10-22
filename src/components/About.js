import React from 'react';

function About(props) {
	return (
    <span>
	  <div>
	    <h1>{props.name}</h1>
        <p>Hi! Welcome to my online portfolio and thank you for taking the time to learn more about me. This website was created from scratch using React, in order to show off some of my coding skills.</p>
	  </div>
      <div>
        <p>I found my passion for software engineering while working at my previous position as a Senior Marketing Coordinator. What started out as a part-time project assisting our web developement consultant with our new website quickly turned into a passion for coding that led me to pursue a full time career in software engineering.</p>
      </div>
      <div>
        <h2>A Little About Me:</h2>
        <p>When I'm not coding, I love being outside, hiking, spending time with family and friends, and reading (with a current goal of reading 40 books in 2022). I currently live in Boston, Massachusetts, but I'm considering relocation based on the job opportunities that come my way.</p>
      </div>
    </span>
	);
}


export default About;