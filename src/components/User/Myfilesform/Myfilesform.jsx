import React from 'react'

function Myfilesform() {
  const fileData={
     "used":25,
     "fdata":[
        { 
           "upload_date":"23-10-2018",
           "fileName":"File1",
           "fileSize":"25",
           "viewLink":"#",
           "downlink":"#",
           "delete":"#"
        }
    ]
  };
  return (
    <>
  {/* Export Datatable start */}
  <div className="main-container">
  <div className="pd-ltr-20 xs-pd-20-10">
    <div className="min-height-200px">
      <div className="page-header">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="title">
              <h4>My Files</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item" >
                  Others
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  My Files
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="pd-20 card-box mb-30">
      <div className="clearfix mb-20">
          <div className="pull-left">
              <h4 className="text-blue h4">Upload files</h4>
          </div>
      </div>
      <div className="col-sm-12 col-md-10">
        <div className="alert alert-primary col-md-8" role="alert">
        
         You have used {fileData.used} MB of 100MB storage space
         <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
          <span aria-hidden="true">×</span>
        </button>
        </div>  
      </div>
      <form className="dropzone" action="#" id="my-awesome-dropzone">
          <div className="col-sm-12 col-md-10">
          <input type="file" name="file" />
          </div>
          <div className='col-sm-12 col-md-10'>
          <button type="button" class="btn btn-primary">Upload</button>
          {' '}
          <button type="button" class="btn btn-primary">Cancel</button>
          </div>
      </form>
      </div>
      {/* Simple Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20">
          <h4 className="text-blue h4">My files</h4>
        </div>
        <div className="pb-20">
          <table className="data-table datatable-nosort table table-responsive-sm stripe hover nowrap ">
            <thead className='thead-dark'>
              <tr>
              <th >Upload Date</th>
                <th className="table-plus datatable-nosort">File Name</th>
                <th >File Size in MB</th>
                <th className="datatable-nosort">Action</th>
              </tr>
            </thead>
            <tbody>
            {fileData.fdata.map(function(fd,i){
              return <tr>
                    <td className="table-plus">{fd.upload_date}</td>
                    <td>{fd.fileName}</td>
                    <td>{fd.fileSize}</td>
                    
                    <td>
                        <a
                          className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                          href={fd.viewLink}
                          role="button"
                        >
                          <i className="dw dw-eye" /> View
                        </a>
                        <br/>
                        <a
                          className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                          href={fd.downlink}
                          role="button"
                        >
                          <i className="bi bi-download" /> Download
                        </a>
                        <br/>
                        <a
                          className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                          href={fd.delete}
                          role="button"
                        >
                          <i className="bi bi-file-x" /> Delete
                        </a>
                    </td>
                 </tr> 
              })}
              {/*<tr>
                <td className="table-plus">29-03-2018</td>
                <td>Sagittarius</td>
                <td>23.5</td>
                
                <td>
                    <a
                      className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                      href="#"
                      role="button"
                    >
                      <i className="dw dw-eye" /> View
                    </a>
                    <br/>
                    <a
                      className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                      href="#"
                      role="button"
                    >
                      <i className="bi bi-download" /> Download
                    </a>
                    <br/>
                    <a
                      className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                      href="#"
                      role="button"
                    >
                      <i className="bi bi-file-x" /> Delete
                    </a>
                </td>
              </tr>*/}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

</>

  )
}

export default Myfilesform