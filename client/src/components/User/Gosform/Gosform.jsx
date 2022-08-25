import React from 'react'

function Gosform() {
  return (
    <>
    
    <div className="container">
      <div className="min-height-200px">
        {/* Simple Datatable start */}
        <div className="card-box mb-30">
          <div className="pd-20">
            <h4 className="text-blue h4">Go's</h4>
          </div>
          <div className="pb-20">
            <table className="data-table datatable-nosort table table-responsive-sm stripe hover nowrap ">
              <thead className='thead-dark'>
                <tr>
                  <th className="table-plus datatable-nosort">Date</th>
                  <th >Title</th>
                  <th >Description</th>
                  <th className="datatable-nosort">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-plus">30-10-2012</td>
                  <td>title 1</td>
                  <td>Descrption</td>
                  <td>
                      <a
                        className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                        href="#"
                        role="button"
                      >
                        <i className="dw dw-eye" /> View
                      </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Gosform
