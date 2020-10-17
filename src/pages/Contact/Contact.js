import React from "react";
import "./style.css";

function Contact() {
    return (
        <main className="container main">

      <header className="row">
        <div className="col-md-12">
          <h3>Contact</h3>
          <hr />
        </div>
      </header>

      <div className="row">
        <div className="col-md-8">
          <form>

            <div className="form-group">
                <label for="exampleFormControlTextarea1">Name</label>
                <input type="text" class="form-control" placeholder="John Smith" />
              </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="example@gmail.com" />
              
            </div>

            <div className="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
            <button type="submit" class="btn btn-dark">Submit</button>
          </form>
        </div>
        <div className="col-md-4 d-flex justify-content-center mt-4">
          <p className="para2">
            <span id="name">Josh Panakkal</span><br />
            josh_panakkal3122@hotmail.com<br />
            (216)339-9545
          </p>
        </div>        
      </div>  
    </main>
    )
}

export default Contact;