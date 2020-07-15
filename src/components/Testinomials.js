import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
  

export default class Testinomials extends React.Component {
    state = {
        items: [
          {id: 1, title: ' <div class="gallery-cell"> <div class="testimonial"><img class="testimonial-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"><q class="testimonial-quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris ex, gravida ut leo eu, rhoncus porta orci. Fusce vitae rutrum nulla."</q><span class="testimonial-author">Joe Smith, CEO of Cubix</span></div></div>'},
          {id: 2, title: 'item #2'},
          {id: 3, title: 'item #3'},
          {id: 4, title: 'item #4'},
          {id: 5, title: 'item #5'}
        ]
      }   
  
render() {
    const { items } = this.state;

    return (
      <div className="App">
      <Carousel>
        <Item><div class="gallery-cell">
        <div class="gallery-cell">
           <div class="testimonial">
        <img class="testimonial-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" alt="new"/>
      <q class="testimonial-quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</q>
      <span class="testimonial-author">Joe Smith, CEO of Cubix</span>
    </div>
    </div>
  </div></Item>
        <Item><div class="gallery-cell">
     <div class="testimonial">
        <img class="testimonial-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/chexee/128.jpg" />
      <q class="testimonial-quote">"Fusce vitae rutrum nulla."</q>
      <span class="testimonial-author">Lisa Jones, Freelance Web Developer</span>
    </div>
  </div></Item>
        <Item><div class="gallery-cell">
        <div class="testimonial">
        <img class="testimonial-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/andretacuyan/128.jpg" />
      <q class="testimonial-quote">"Duis mauris ex, gravida ut leo eu, rhoncus porta orci."</q>
      <span class="testimonial-author">Ryan Waltz, Front-End Developer</span>
    </div>
  </div></Item>

      </Carousel>
    </div>
    )
  }
}