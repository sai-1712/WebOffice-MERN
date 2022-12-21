import React from 'react'

export default function Deleteclient(props) {
    return (
        <div className="modal custom-modal fade" id="delete_client" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="form-header">
                            <h3>Delete client</h3>
                            <p>Are you sure want to delete?</p>
                        </div>
                        <div className="modal-btn delete-action">
                            <div className="row">
                                <div className="col-6">
                                    <a href={`/deleteclient/${props.client.id}`} className="btn btn-primary continue-btn">Delete</a>
                                </div>
                                <div className="col-6">
                                    <a href="/client" data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}