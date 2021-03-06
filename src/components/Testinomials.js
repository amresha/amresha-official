import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import ardalis from "../../static/ardalis.jpg"
import adam from "../../static/adam.jpg"
import magdalena from "../../static/magdalena.jpg"
import andrew from "../../static/andrew.png"

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
        <img class="testimonial-avatar" src={ardalis} alt="ardalis"/>
      <q class="testimonial-quote">I've been very happy with Amresha's work on migrating my blog from WordPress to JAMSTACK which was a non-trivial task involving over 2000 pages</q>
      <span class="testimonial-author">Steve Smith, CEO of ASPSmith, Ltd - Chicago, USA</span>
      <span><a class="testimonial-link" href="https://www.ardalis.com/" target="_blank" rel="noopener noreferrer">www.ardalis.com</a></span>
    </div>
    </div>
  </div></Item>
        <Item><div class="gallery-cell">
     <div class="testimonial">
        <img class="testimonial-avatar" src={adam} alt="adam"/>
      <q class="testimonial-quote">Amresha did wonderful job in building my multilingual eStore. Every task that was put before her was on time and with an acute attention to detail.</q>
      <span class="testimonial-author">Adam Cotorceanu, CEO of Dirty Roots - Berlin, Germany</span>
      <span><a  class="testimonial-link" href="https://www.dirtyrootsberlin.com/" target="_blank" rel="noopener noreferrer">www.dirtyrootsberlin.com</a></span>
    </div>
  </div></Item>
      <Item><div class="gallery-cell">
        <div class="testimonial">
        <img class="testimonial-avatar" src={andrew} alt="andrew"/>
      <q class="testimonial-quote"> Definitely someone I would work again. Very easy to work with, communicate with, and did an excellent work in converting my WordPress site to GatsbyJS site. </q>
      <span class="testimonial-author">Andrew Truab, CEO of Austin Accident Lawyers - Austin, USA</span>
      <span><a class="testimonial-link" href="https://www.austinaccidentlawyer.com/" target="_blank" rel="noopener noreferrer">www.austinaccidentlawyer.com</a></span>
    </div>
  </div></Item>
  <Item><div class="gallery-cell">
        <div class="testimonial">
        <img class="testimonial-avatar" src={magdalena} alt="magdalena"/>
      <q class="testimonial-quote"> Amresha is a very creative person who can meet the expectations of  capricious people even like me. She created a simple but non-obvious logo for me - exactly what I needed. </q>
      <span class="testimonial-author">Magdalena Gırlangıç, CEO of Madado ART - Istanbul, Turkey</span>
      <span><a class="testimonial-link" href="https://www.etsy.com/shop/MadadoART" target="_blank" rel="noopener noreferrer">www.etsy.com/shop/MadadoART</a></span>
    </div>
  </div></Item>
      </Carousel>
    </div>
    )
  }
}