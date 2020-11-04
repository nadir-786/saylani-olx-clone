import React, { Component } from 'react'
import './test.css'
export default class Test extends Component {
    render() {
        return (
            <div>
                
<header className="pt-4">
  <div className="container">
    <div className="logo-img"></div>
    <h1 className="logo-name text-center text-uppercase">DOPE MEGA MENU</h1>
  </div>
</header>


<div className="bg-dark my-4 d-md-none d-block">
  <div className="container">
    <div className="text-right py-2">
      <button onclick="toggleMenu()" className="btn btn-secondary rounded-0">MENU <i className="fa fa-bars"></i></button>
    </div>
  </div>
</div>

<div id="navbar-mobile" className="bg-dark d-none">
  <div className="container">
    <div className="text-right mt-4">
      <button onclick="toggleMenu()" className="btn btn-danger rounded-0">Close X</button>
    </div>
    <div id="accordion">
      <div className="accordion-item">
        <button data-toggle="collapse" data-target="#home-mobile" className="btn btn-secondary btn-block rounded-0 text-left">Home</button>
        <div id="home-mobile" className="collapse accordion-item-content" data-parent="#accordion">
          <div className="accordion-item-content-item">
            <h5 className="text-main">FACTSHEETS</h5>
            <a href="#" className="text-dark accordion-content-link">Sample Link 1</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 2</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 3</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 4</a>
          </div> 
          <div className="accordion-item-content-item">
            <h5 className="text-main">RESOURCES</h5>
            <a href="#" className="text-dark accordion-content-link">Sample Link 1</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 2</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 3</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 4</a>
          </div> 
          <div className="accordion-item-content-item">
            <h5 className="text-main">PUBLICATIONS</h5>
            <a href="#" className="text-dark accordion-content-link">Sample Link 1</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 2</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 3</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 4</a>
          </div> 
        </div> 
      </div> 

      <div className="accordion-item">
        <a href="#" className="btn btn-secondary btn-block rounded-0 text-left">Research</a>
      </div> 

      <div className="accordion-item">
        <button data-toggle="collapse" data-target="#development-mobile" className="btn btn-secondary btn-block rounded-0 text-left">Development</button>
        <div id="development-mobile" data-parent="#accordion" className="collapse accordion-item-content">
          <div className="accordion-item-content-item">
            <h5 className="text-main">ADMINISTRATION</h5>
            <a href="#" className="text-dark accordion-content-link">Sample Link 1</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 2</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 3</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 4</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 5</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 6</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 7</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 8</a>
          </div> 
          <div className="accordion-item-content-item">
            <h5 className="text-main">INFRASTRUCTURE</h5>
            <a href="#" className="text-dark accordion-content-link">Sample Link 1</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 2</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 3</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 4</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 5</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 6</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 7</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 8</a>
          </div> 
          <div className="accordion-item-content-item">
            <h5 className="text-main">SPORTS FACILITIES</h5>
            <a href="#" className="text-dark accordion-content-link">Sample Link 1</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 2</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 3</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 4</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 5</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 6</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 7</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 8</a>
          </div> 
          <div className="accordion-item-content-item">
            <h5 className="text-main">DEPARTMENTS</h5>
            <a href="#" className="text-dark accordion-content-link">Sample Link 1</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 2</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 3</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 4</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 5</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 6</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 7</a>
            <a href="#" className="text-dark accordion-content-link">Sample Link 8</a>
          </div> 
        </div> 
      </div> 
      <div className="accordion-item">
        <a href="#" className="btn btn-secondary btn-block rounded-0 text-left">Countries</a>
      </div> 
      <div className="accordion-item">
        <a href="#" className="btn btn-secondary btn-block rounded-0 text-left">About Us</a>
      </div> 
      <div className="accordion-item">
        <a href="#" className="btn btn-secondary btn-block rounded-0 text-left">Contact Us</a>
      </div> 
    </div> 
  </div> 
</div> 



<div id="navbar" className="my-4 d-md-block d-none">
  <div className="container">
    <div className="d-flex justify-content-center align-items-center">
      <div className="menu-item">
        <a href="#" className="menu-link">Home</a>
        <div className="menu-content">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="p-3">
                  <h4 className="text-main">FACTSHEETS</h4>
                  <a href="#" className="text-dark menu-content-link">Sample Link 1</a>
                  <a href="#" className="text-dark menu-content-link">Sample Link 2</a>
                  <a href="#" className="text-dark menu-content-link">Sample Link 3</a>
                  <a href="#" className="text-dark menu-content-link">Sample Link 4</a>
                </div>
              </div>
              
              <div className="col-md-4 col-sm-6">
                <div className="p-3">
                  <h4 className="text-main">RESOURCES</h4>
                  <a href="#" className="text-dark menu-content-link">Sample Link 1</a>
                  <a href="#" className="text-dark menu-content-link">Sample Link 2</a>
                  <a href="#" className="text-dark menu-content-link">Sample Link 3</a>
                  <a href="#" className="text-dark menu-content-link">Sample Link 4</a>
                </div>
              </div>
              
              <div className="col-md-4 col-sm-6">
                <div className="p-3">
                  <h4 className="text-main">PUBLICATIONS</h4>
                  <a href="#" className="text-dark menu-content-link">Sample Link 1</a>
                  <a href="#" className="text-dark menu-content-link">Sample Link 2</a>
                  <a href="#" className="text-dark menu-content-link">Sample Link 3</a>
                  <a href="#" className="text-dark menu-content-link">Sample Link 4</a>
                </div>
              </div>
              
            </div>
           
          </div> 
        </div> 
      </div> 
      <div className="menu-item">
        <a href="#" className="menu-link">Research</a>
      </div> 
      <div className="menu-item">
        <a href="#" className="menu-link">Development</a>
        <div className="menu-content">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="list-group rounded-0" id="development-tabs">
                  <a href="#administration-tab-content" data-toggle="tab" className="list-group-item list-group-item-action active">
                    <b>Administration</b>
                  </a> 
                  <a href="#infrastructure-tab-content" data-toggle="tab" className="list-group-item list-group-item-action">
                    <b>Infrastructure</b>
                  </a> 
                  <a href="#sports-tab-content" data-toggle="tab" className="list-group-item list-group-item-action">
                    <b>Sports Facilities</b>
                  </a> 
                  <a href="#departments-tab-content" data-toggle="tab" className="list-group-item list-group-item-action">
                    <b>Departments</b>
                  </a> 
                </div> 
              </div> 

              <div className="col-md-8 bg-light">
                <div className="tab-content">
                  <div id="administration-tab-content" className="tab-pane fade show active p-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-secondary shadow mr-4 flex-1" style={{height:"150px"}}>
                        <img className="tab-content-img" src="https://www.cogneesol.com/blog/wp-content/uploads/2017/01/insurance-policy.jpg" alt="admin" />
                      </div>
                      <div className="flex-1">
                        <a href="#" className="text-dark menu-content-link">Sample Link 1</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 2</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 3</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 4</a>
                      </div>
                      <div className="flex-1">
                        <a href="#" className="text-dark menu-content-link">Sample Link 1</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 2</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 3</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 4</a>
                      </div>
                    </div>
                   
                  </div> 
                  <div id="infrastructure-tab-content" className="tab-pane fade p-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-secondary shadow mr-4 flex-1" style={{height:"150px"}}>
                        <img className="tab-content-img" src="https://doc-research.org/wp-content/uploads/2019/03/bigstock-monorail-bridge-across-the-hig-235042381.jpg" alt="admin" />
                      </div>
                      <div className="flex-1">
                        <a href="#" className="text-dark menu-content-link">Sample Link 1</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 2</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 3</a>
                      </div>
                      <div className="flex-1">
                        <a href="#" className="text-dark menu-content-link">Sample Link 1</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 2</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 3</a>
                      </div>
                    </div>
                   
                  </div> 
                  <div id="sports-tab-content" className="tab-pane fade p-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-secondary shadow mr-4 flex-1" style={{height:"150px"}}>
                        <img className="tab-content-img" src="https://sportadvisory.com/wp-content/uploads/2017/01/popular-types-of-facilities-sports-facilities-advisory.jpg" alt="admin" />
                      </div>
                      <div className="flex-1">
                        <a href="#" className="text-dark menu-content-link">Sample Link 1</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 2</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 3</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 4</a>
                      </div>
                      <div className="flex-1">
                        <a href="#" className="text-dark menu-content-link">Sample Link 1</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 2</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 3</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 4</a>
                      </div>
                    </div>
                   
                  </div> 
                  <div id="departments-tab-content" className="tab-pane fade p-3">
                    <div className="d-flex align-items-center">
                      <div className="bg-secondary shadow mr-4 flex-1" style={{height:"150px"}}>
                        <img className="tab-content-img" src="https://www.anandacollege.in/wp-content/uploads/2018/05/dept-tamil.png" alt="admin" />
                      </div>
                      <div className="flex-1">
                        <a href="#" className="text-dark menu-content-link">Sample Link 1</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 2</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 3</a>
                      </div>
                      <div className="flex-1">
                        <a href="#" className="text-dark menu-content-link">Sample Link 1</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 2</a>
                        <a href="#" className="text-dark menu-content-link">Sample Link 3</a>
                      </div>
                    </div>
                   
                  </div> 
                </div>
              </div> 
            </div>
           
          </div> 
        </div> 
      </div> 
      <div className="menu-item">
        <a href="#" className="menu-link">Countries</a>
      </div> 
      <div className="menu-item">
        <a href="#" className="menu-link">About Us</a>
      </div> 
      <div className="menu-item">
        <a href="#" className="menu-link">Contact Us</a>
      </div> 
    </div>
   
  </div>
  
</div> 


<div className="container my-4">
  <div className="row">
    <div className="col-md-8">
      <div className="d-none border bg-light mb-4">
        <div className="row">
          <div className="col-md-4">
            <div className="list-group rounded-0" id="development-tabs">
              <a href="#administration-tab-content" data-toggle="tab" className="list-group-item list-group-item-action active">
                <b>Administration</b>
              </a> 
              <a href="#infrastructure-tab-content" data-toggle="tab" className="list-group-item list-group-item-action">
                <b>Infrastructure</b>
              </a> 
              <a href="#sports-tab-content" data-toggle="tab" className="list-group-item list-group-item-action">
                <b>Sports Facilities</b>
              </a> 
              <a href="#departments-tab-content" data-toggle="tab" className="list-group-item list-group-item-action">
                <b>Departments</b>
              </a> 
            </div> 
          </div> 

          <div className="col-md-8">
            <div className="tab-content">
              <div id="administration-tab-content" className="tab-pane fade show active p-3">
                <div className="d-flex">
                  <div className="bg-secondary shadow-sm mr-4" style={{height:"150px",width:"200px"}}></div>
                  <div className="py-1">
                    <p className="m-0"><a href="#" className="text-decoration-none">Sample Link 1</a></p>
                    <p className="m-0"><a href="#" className="text-decoration-none">Sample Link 2</a></p>
                    <p className="m-0"><a href="#" className="text-decoration-none">Sample Link 3</a></p>
                    <p className="m-0"><a href="#" className="text-decoration-none">Sample Link 4</a></p>
                    <p className="m-0"><a href="#" className="text-decoration-none">Sample Link 5</a></p>
                    <p className="m-0"><a href="#" className="text-decoration-none">Sample Link 6</a></p>
                  </div>
                </div>
               
              </div>
              <div id="infrastructure-tab-content" className="tab-pane fade p-3">
                Infra Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, sunt.
              </div>
              <div id="sports-tab-content" className="tab-pane fade p-3">
                Sports Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, sunt.
              </div>
              <div id="departments-tab-content" className="tab-pane fade p-3">
                Departments Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, sunt.
              </div>
            </div> 
          </div> 
        </div> 

      </div>
      

      <div className="card bg-light mb-4">
        <div className="card-body">
          <h2 className="text-main text-capitalize">Lorem ipsum dolor sit amet.</h2>
          <hr />
          <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam, dicta provident omnis voluptas laborum natus porro doloribus reprehenderit non saepe ut. Illo nemo ut incidunt dignissimos, neque consequuntur amet veritatis nobis repellendus possimus molestiae reprehenderit vitae, magni, porro voluptas? Nisi eius repellat laudantium nesciunt excepturi nemo exercitationem nam quasi.</p>
          <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam, dicta provident omnis voluptas laborum natus porro doloribus reprehenderit non saepe ut. Illo nemo ut incidunt dignissimos, neque consequuntur amet veritatis nobis repellendus possimus molestiae reprehenderit vitae, magni, porro voluptas? Nisi eius repellat laudantium nesciunt excepturi nemo exercitationem nam quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore tempora, quaerat magnam explicabo, molestiae sequi error fuga, incidunt officiis voluptate accusantium commodi vero. Ad vel magnam aperiam dolorem, cum enim.</p>
        </div> 
      </div> 
      <div className="card bg-light mb-4">
        <div className="card-body">
          <h2 className="text-main text-capitalize">Lorem ipsum dolor sit amet.</h2>
          <hr />
          <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam, dicta provident omnis voluptas laborum natus porro doloribus reprehenderit non saepe ut. Illo nemo ut incidunt dignissimos, neque consequuntur amet veritatis nobis repellendus possimus molestiae reprehenderit vitae, magni, porro voluptas? Nisi eius repellat laudantium nesciunt excepturi nemo exercitationem nam quasi.</p>
          <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam, dicta provident omnis voluptas laborum natus porro doloribus reprehenderit non saepe ut. Illo nemo ut incidunt dignissimos, neque consequuntur amet veritatis nobis repellendus possimus molestiae reprehenderit vitae, magni, porro voluptas? Nisi eius repellat laudantium nesciunt excepturi nemo exercitationem nam quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore tempora, quaerat magnam explicabo, molestiae sequi error fuga, incidunt officiis voluptate accusantium commodi vero. Ad vel magnam aperiam dolorem, cum enim.</p>
        </div> 
      </div> 
      <div className="card bg-light mb-4">
        <div className="card-body">
          <h2 className="text-main text-capitalize">Lorem ipsum dolor sit amet.</h2>
          <hr />
          <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam, dicta provident omnis voluptas laborum natus porro doloribus reprehenderit non saepe ut. Illo nemo ut incidunt dignissimos, neque consequuntur amet veritatis nobis repellendus possimus molestiae reprehenderit vitae, magni, porro voluptas? Nisi eius repellat laudantium nesciunt excepturi nemo exercitationem nam quasi.</p>
          <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam, dicta provident omnis voluptas laborum natus porro doloribus reprehenderit non saepe ut. Illo nemo ut incidunt dignissimos, neque consequuntur amet veritatis nobis repellendus possimus molestiae reprehenderit vitae, magni, porro voluptas? Nisi eius repellat laudantium nesciunt excepturi nemo exercitationem nam quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore tempora, quaerat magnam explicabo, molestiae sequi error fuga, incidunt officiis voluptate accusantium commodi vero. Ad vel magnam aperiam dolorem, cum enim.</p>
        </div> 
      </div> 
    </div> 

    <div className="col-md-4">
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="text-secondary m-0">Notices</h5>
        </div> 
        <div className="card-body">
          <ul className="pl-3">
            <li><a href="#" className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, id!</a></li>
            <li><a href="#" className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, id!</a></li>
            <li><a href="#" className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, id!</a></li>
            <li><a href="#" className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, id!</a></li>
            <li><a href="#" className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, id!</a></li>
          </ul>
        </div> 
      </div> 
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="text-secondary m-0">News &amp; Events</h5>
        </div> 
        <div className="card-body">
          <ul className="pl-3">
            <li><a href="#" className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, id!</a></li>
            <li><a href="#" className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, id!</a></li>
            <li><a href="#" className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, id!</a></li>
            <li><a href="#" className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, id!</a></li>
            <li><a href="#" className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, id!</a></li>
          </ul>
        </div> 
      </div> 
    </div> 
  </div>
</div> 

<footer className="bg-dark mt-4 py-3">
  <div className="container">
    <p className="m-0 text-secondary text-center">
      Copyright &copy; 2020 IVL ltf. | All Rights Reserved.
    </p>
  </div>
</footer>
            </div>
        )
    }
}
