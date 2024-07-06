import React from 'react'

const Contact = () => {
  return (
    <>
      <div>
      <div className='text-center m-3'>
          <u className='fs-1 text-warning '>CONTACT</u>
          <br></br><span className='fs-5 text-success'>Feel free to Contact with us by submitting the form below and we will get<br/>
          back to you as soon as possible</span>
        </div>
        
        <div className='position-absolute bottom-1 start-50 translate-middle-x'>
         <form action="https://formspree.io/f/xgvwwowe" method="POST">
        <div style={{ width: 600 ,height:500}} className="col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded m-4">
      <div className='m-3'>
      <label for="exampleFormControlInput1" class="form-label ">User Name</label>
      <input class="form-control" type="text" placeholder="Your Name" name='name' aria-label="default input example" required/>
      </div>
      <div class="mb-3 m-3" >
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" name="email" id="email" class="form-control"  placeholder="name@example.com" />
      </div>
      <div className='m-3'>
      <label for="exampleFormControlTextarea1" class="form-label">Message-</label>
      <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Your Feedback'></textarea>
       </div>
        <button type="submit" class="btn btn-light btn-outline-dark m-3">Send</button>
        <a class="socialmedia" href="" style={{marginLeft:320,marginRight:15,fontSize:30,color:'black'}}><i className='fa fa-instagram'></i></a>
            <a class="socialmedia" href="" style={{margin:15,fontSize:30,color:'black'}}><i className="fa fa-twitter"></i></a>
            <a class="socialmedia" href="" style={{margin:10,fontSize:30,color:'black'}}><i className="fa fa-skype"></i></a>
      </div>
      </form> 
      </div>
      </div> 
      </>
  )
}

export default Contact
