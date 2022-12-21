import Dashboardtemplate from "../UI/Dashboardtemplate";
import "../../public/assests/Leaves.css"
import Addleave from "../popup-models/Addleave";

const data = [
    { leavetype: "Casual Leave", from: "30 Oct 2022", to: "2 Nov 2022", num: 4, reason: "Sister's marriage", status: "New" },
    { leavetype: "Medical Leave", from: "31 Oct 2022", to: "1 Nov 2022", num: 2, reason: "Going to Hospital", status: "Approved" },
    { leavetype: "Loss of Pay", from: "1 Nov 2022", to: "1 Nov 2022", num: 1, reason: "Medical emergency", status: "Pending" },
]

export default function Leaves() {

    const NULLURL = ""
    return (
        <Dashboardtemplate>
            <div className="page-header">
                <div className="row align-items-center">
                    <div className="col">
                        <h3 className="page-title">Leaves</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                            <li className="breadcrumb-item active">Leaves</li>
                        </ul>
                    </div>

                    <div className="col-auto float-right ml-auto">

                        <a href={NULLURL} class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_leave"><i
                            class="fa fa-plus"></i> Add Leave</a>

                    </div>

                    <Addleave />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="stats-info">
                        <h6>Annual Leave</h6>
                        <h4>12</h4>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="stats-info">
                        <h6>Medical Leave</h6>
                        <h4>3</h4>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="stats-info">
                        <h6>Other Leave</h6>
                        <h4>4</h4>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="stats-info">
                        <h6>Remaining Leave</h6>
                        <h4>5</h4>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div >
                        <table className="table table-striped custom-table mb-0 datatable dataTable no-footer"
                            id="DataTables_Table_0" role="grid">
                            <thead>
                                <tr role="row">
                                    <th>Leave Type</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>No of days</th>
                                    <th>Reason</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.leavetype}</td>
                                            <td>{val.from}</td>
                                            <td>{val.to}</td>
                                            <td>{val.num}</td>
                                            <td>{val.reason}</td>
                                            <td>
                                                <div className="action-label">
                                                    <button className="btn btn-white btn-sm btn-rounded" onClick={NULLURL}><i
                                                        className="fa fa-dot-circle-o text-purple"></i>{val.status}</button>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <div className="dropdown dropdown-action">
                                                    <a href={NULLURL} className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href={NULLURL} data-bs-toggle="modal" data-bs-target="#edit_leave"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href={NULLURL} data-bs-toggle="modal" data-bs-target="#delete_approve"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 8 of 8 entries</div>
                </div>
                {/* <div className="col-sm-12 col-md-7">
                    <div classname="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                        <ul className="pagination">
                            <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">
                                <a href={NULLURL} aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" className="page-link">Previous</a>
                            </li>
                            <li className="paginate_button page-item active">
                                <a href={NULLURL} aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" className="page-link">1</a>
                            </li>
                            <li className="paginate_button page-item next disabled" id="DataTables_Table_0_next">
                                <a href={NULLURL} aria-controls="DataTables_Table_0" data-dt-idx="2" tabindex="0" className="page-link">Next</a>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </Dashboardtemplate>
    )
}