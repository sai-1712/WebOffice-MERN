import React from "react";
import { useState } from "react";

export default function Editproject(props) {
  const prj = props.prj;

  const [project, setProject] = useState({
    _id: "p102",
    projectName: "",
    clientName: "",
    startDate: "",
    endDate: "",
    budget: "",
    priority: "",
    projectLeader: "",
    team: [],
    pdescription: "",
    progress: "Pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmitHandler(project);
    console.log("from submit: ", project);
  };

  const onChange = (e) => {
    if (e.target.name === "team") {
      const tasks = e.target.value.split(",");
      setProject({ ...project, [e.target.name]: tasks });
    } else {
      setProject({ ...project, [e.target.name]: e.target.value });
    }
    console.log(project);
  };
  return (
    <div
      id="edit_project"
      className="modal custom-modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Project</h5>
            <button
              type="button"
              className="btn-close btn-outline-light"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form method="post" action="" id="editproject" onSubmit={null}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Project Title</label>
                    <input
                      name="projectName"
                      className="form-control minput"
                      placeholder="Project name"
                      type="text"
                      defaultValue={prj.projectName}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Client</label>
                    <select
                      name="clientName"
                      className="select modal-select minput"
                      defaultValue={prj.clientName}
                    >
                      <option value="">-- Select --</option>
                      <option value="Global Technologies">
                        Global Technologies
                      </option>
                      <option value="Delta Infotech">Delta Infotech</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Start Date</label>
                    <div className="cal-icon">
                      <input
                        name="startDate"
                        className="form-control datetimepicker minput"
                        type="text"
                        defaultValue={prj.startDate}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>End Date</label>
                    <div className="cal-icon">
                      <input
                        name="endDate"
                        className="form-control datetimepicker minput"
                        type="text"
                        defaultValue={prj.endDate}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Rate</label>
                    <input
                      name="budget"
                      placeholder="₹500"
                      className="form-control minput"
                      type="text"
                      defaultValue={prj.budget}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Priority</label>
                    <select
                      name="priority"
                      className="select modal-select minput"
                      defaultValue={prj.priority}
                    >
                      <option value="Top">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Add Project Leader</label>
                    <input
                      name="projectLeader"
                      className="form-control minput"
                      type="text"
                      defaultValue={prj.projectLeader}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Add Team</label>
                    <input
                      name="team"
                      id="teaminput"
                      className="form-control minput"
                      type="text"
                      defaultValue={prj.team}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="pdescription"
                  rows="4"
                  className="form-control summernote minput"
                  placeholder="Enter your message here"
                  defaultValue={prj.pdescription}
                ></textarea>
              </div>
              <div className="form-group">
                <label>Upload Files</label>
                <input className="form-control minput" type="file" />
              </div>
              <div className="submit-section">
                <button type="submit" className="btn btn-primary submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
