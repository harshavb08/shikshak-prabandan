import React from 'react'

function Notifiy() {
  return (
    <>
    <div className="pd-30">
    <div className="row pd-30">
      <div className="col-md-3 mb-20">
        <div className="card-box height-100-p pd-20">
          <div className="d-flex flex-wrap justify-content-between align-items-center pb-0 pb-md-3">
            <div className="h3 text-blue mb-10">Circulars</div>
            
          </div>
          <div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, soluta!</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-20">
        <div className="card-box height-100-p pd-20">
          <div className="pb-0 pb-md-3">
            <div className="h3 text-blue mb-20">Login</div>

              <div className="card-box  text-center height-100-p pd-20 mb-20">
                <img src="https://img.freepik.com/free-vector/man-look-graphic-chart-business-analytics-concept-big-data-processing-icon_39422-761.jpg?w=900&t=st=1661159202~exp=1661159802~hmac=7a0662ff2d5dfdfc5114aa9014314a79fcdd49214d3723afacd2d14d7f617fcc" alt="" />
                <a href='/adminlogin' className='h5 text-blue '>Admin</a>
              </div>
              <div className="card-box text-center height-100-p pd-20 mb-20">
                <img src="https://img.freepik.com/free-vector/professor-concept-illustration_114360-4226.jpg?w=740&t=st=1661159309~exp=1661159909~hmac=6f5163ada207caa7f04504cf7f1f7d13c572578457c7660c94906d025f86f069" alt="" />
              <a href='/home' className='h5 text-blue'>Teacher</a>
              </div>

          </div>
          <div id="activities-chart" />
        </div>
      </div>
      <div className="col-md-6 mb-20">
        <div className="card-box height-100-p pd-20 min-height-200px">
          <div className="d-flex justify-content-between">
            <div className="h3 mb-20 text-blue">Gallery</div>
          </div>
          <div id="this-year-chart" />
        </div>
      </div>
    </div>

    </div>
    
    </>
  )
}

export default Notifiy