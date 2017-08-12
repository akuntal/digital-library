
let Book = require('../api/book_api');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

//Parent block
describe('Books', () => {

 /*
  * Test the /GET route
  */
  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/api/books')
            .end((err, res) => {
                if(err) {
                    console.log('error'+ err);
                    return;
                }
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
      });
  });

  /*
  * Test the /POST route
  */
  describe('/POST book', () => {
	  it('it should POST a book ', (done) => {
	  	let book = {
	  		name: "The Lord of the Rings",
	  		author: "J.R.R. Tolkien",
	  		description: "book decription",
	  		price: 1170,
            category: "cat1"
	  	}
			chai.request(server)
		    .post('/api/book')
		    .send(book)
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('object');
			  	res.body.should.have.property('name');
			  	res.body.should.have.property('author');
			  	res.body.should.have.property('price');
			  	res.body.should.have.property('description');
                res.body.should.have.property('category');
		      done();
		    });
	  });
  });

});