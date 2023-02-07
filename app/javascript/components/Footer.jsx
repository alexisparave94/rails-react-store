import React from "react";

function Footer(){
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-5">
        <section className='d-flex justify-content-center gap-5'>
          {/* <!-- Facebook --> */}
          <a className="text-light fs-2" href="#"><i className="bi bi-facebook"></i></a>

          {/* <!-- Twitter --> */}
          <a className="text-light fs-2" href="#"><i className="bi bi-twitter"></i></a>

          {/* <!-- Instagram --> */}
          <a className="text-light fs-2" href="#"><i className="bi bi-instagram"></i></a>

          {/* <!-- Linkedin --> */}
          <a className="text-light fs-2" href="#"><i className="bi bi-linkedin"></i></a>

          {/* <!-- Github --> */}
          <a className="text-light fs-2" href="#"><i className="bi bi-github"></i></a>
        </section>
      </div>
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2020 Copyright
      </div>
    </footer>
  )
}

export default Footer;