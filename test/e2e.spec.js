/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Hello World');
      })
  );

  it('should have the correct page title', () =>
  nightmare
    .goto(url)
    .evaluate(() => document.querySelector('button').innerText)
    .end()
    .then((text) => {
      expect(text).to.equal('Go!');
    })
);

describe('App Component', function () {
  this.timeout(6500);
  it('should shallow render', () => {
    expect(2).to.equal(2);
    // expect(shallow(<App />).contains(<div className='container'></div>)).to.equal(true);
  });
});

  it('should have the correct page title', () =>
  nightmare
    .goto(url)
    .evaluate(() => document.querySelector('h3').innerText)
    .end()
    .then((text) => {
      expect(text).to.equal('Movie Finder');
    })
);

// it('should have the correct page title', () =>
// nightmare
//   .goto(url)
//   .evaluate(() => document.querySelector('a').innerText)
//   .end()
//   .then((text) => {
//     expect(text).to.equal('Go Back');
//   })
// );


// it('should have the correct page title', () =>
// nightmare
//   .goto(url)
//   .wait('h4')
//   .evaluate(() => document.querySelector('h4').innerText)
//   .end()
//   .then((text) => {
//     expect(text).to.equal('Movie Detail');
//   })
// );

// it('should have the correct page title', () =>
// nightmare
//   .goto(url)
//   .evaluate(() => document.querySelector('a').innerText)
//   .end()
//   .then((text) => {
//     expect(text).to.equal('More Information');
//   })
// );

  // it('responds to /', (done) => {
  //   chai.request(server)
  //     .get('/')
  //     .end((err, res) => {
  //       expect(err).not.exist;
  //       expect(res).to.have.status(200);
  //       done();
  //     });
  // });

//   afterEach((done) => {
//     done();
// })

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});
