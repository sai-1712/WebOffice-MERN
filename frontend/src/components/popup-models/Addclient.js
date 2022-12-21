import React from "react"
// eslint-disable-next-line no-unused-vars
function Temp(){
    return (
        <div id="add_client" class="modal custom-modal fade" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-lg" role={document}>
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Client</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">First Name <span
                                            class="text-danger">*</span></label>
                                        <input class="form-control" name="fname" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Last Name</label>
                                        <input class="form-control" name="lname" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Username <span
                                            class="text-danger">*</span></label>
                                        <input class="form-control" name="uname" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Email <span class="text-danger">*</span></label>
                                        <input class="form-control floating" name="email" type="email"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Client ID <span
                                            class="text-danger">*</span></label>
                                        <input class="form-control floating" name="_id" type="text"/>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Company Name</label>
                                        <input class="form-control" name="company" type="text"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Phone </label>
                                        <input class="form-control" name="phone" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div class="submit-section">
                                <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Addclient() {
    return (
        <div id="add_client" class="modal custom-modal fade" role="dialog" aria-modal="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role={document}>
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Client</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="/Clients" method="post" id="Addclient" onsubmit="ValidateClient(event);">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">First Name <span
                                            class="text-danger">*</span></label>
                                        <input class="form-control" name="fname" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Last Name</label>
                                        <input class="form-control" name="lname" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Username <span
                                            class="text-danger">*</span></label>
                                        <input class="form-control" name="uname" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Email <span class="text-danger">*</span></label>
                                        <input class="form-control floating" name="email" type="email"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Client ID <span
                                            class="text-danger">*</span></label>
                                        <input class="form-control floating" name="_id" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Company Name</label>
                                        <input class="form-control" name="company" type="text"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Phone </label>
                                        <input class="form-control" name="phone" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div class="submit-section">
                                <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}