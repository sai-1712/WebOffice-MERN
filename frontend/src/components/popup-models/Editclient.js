import React from "react";

export default function Editclient(props) {
    return (
        <div id="edit_client" class="modal custom-modal fade" role="dialog" aria-modal="true" >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Client</h5>
                        <button
                            type="button"
                            class="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="editform" action={`/editclient/${props.client.id}`} method="post">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">First Name <span class="text-danger">*</span></label>
                                        <input
                                            class="form-control"
                                            name="fname"
                                            defaultValue={props.client.Name}
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Last Name</label>
                                        <input
                                            class="form-control"
                                            name="lname"
                                            defaultValue="<%= e.lname %>"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">
                                            Username <span class="text-danger">*</span>
                                        </label>
                                        <input
                                            class="form-control"
                                            name="uname"
                                            defaultValue="<%= e.uname %>"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">
                                            Email <span class="text-danger">*</span>
                                        </label>
                                        <input
                                            class="form-control"
                                            name="email"
                                            defaultValue="<%= e.email %>"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">
                                            client ID <span class="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="<%= e._id %>"
                                            readOnly=""
                                            name="_id"
                                            class="form-control floating"
                                        />
                                    </div>
                                </div>
                                
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Phone </label>
                                        <input
                                            class="form-control"
                                            name="phone"
                                            defaultValue="<%= e.phone %>"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Company</label>
                                        
                                    
                                </div>
                                
                                </div>
                            <div class="submit-section">
                                <button type="submit" class="btn btn-primary submit-btn">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

// import React from "react";
// import { useEffect,useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { connect } from "react-redux";


// const Editclient = ({ clients, updateClient }) => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const currentClient = clients.filter(
//         (client) => client.id === parseInt(id)
//     );
//     useEffect(() => {
//             setName(currentClient.Name)
//             setUname(currentClient.Uname)
//             setClientID(currentClient.ClientID)
//             setEmail(currentClient.Email)
//             setMobile(currentClient.Mobile)
//             setCompany(currentClient.Company)
//     }, [currentClient]);
//     const [Name, setName] = useState("");
//     const [Uname, setUname] = useState("");
//     const [ClientID, setClientID] = useState("");
//     const [Email, setEmail] = useState("");
//     const [Mobile, setMobile] = useState("");
//     const [Company, setCompany] = useState("");


    
//     const handleSubmit = (e) => {
//         e.preventDefault();

//     };
//     const data = {
//         id: currentClient.id,
//         Name,
//         Uname,
//         ClientID,
//         Email,
//         Mobile,
//         Company,
//     };

//     updateClient(data);
//     navigate.push("/");

//     return (
        
//         <div className="container">
//             <div className="row d-flex flex-column">
//                 <button
//                     className="btn btn-dark ml-auto my-5"
//                     onClick={() => navigate.push("/")}
//                 >
//                     Go back
//                 </button>
//                     <div class="modal-body">
//                         {currentClient ? (
//                         <form class="editform" onSubmit={handleSubmit}>
//                             <div class="row">
//                                 <div class="col-sm-6">
//                                     <div class="form-group">
//                                         <label class="col-form-label">Name <span class="text-danger">*</span></label>
//                                         <input
//                                             class="form-control"
//                                             name="Name"
//                                                         value={Name} onChange={e => setName(e.target.value)}
//                                             type="text"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div class="col-sm-6">
//                                     <div class="form-group">
//                                         <label class="col-form-label">
//                                             Username <span class="text-danger">*</span>
//                                         </label>
//                                         <input
//                                             class="form-control"
//                                             name="uname"
//                                                         value={Uname} onChange={e => setUname(e.target.value)}
//                                             type="text"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div class="col-sm-6">
//                                     <div class="form-group">
//                                         <label class="col-form-label">
//                                             Email <span class="text-danger">*</span>
//                                         </label>
//                                         <input
//                                             class="form-control"
//                                             name="email"
//                                                         value={Email} onChange={e => setEmail(e.target.value)}
//                                             type="email"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div class="col-sm-6">
//                                     <div class="form-group">
//                                         <label class="col-form-label">
//                                             client ID <span class="text-danger">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                                         value={ClientID} onChange={e => setClientID(e.target.value)}
//                                             readOnly=""
//                                             name="_id"
//                                             class="form-control floating"
//                                         />
//                                     </div>
//                                 </div>
                                
//                                 </div>
//                                 <div class="col-sm-6">
//                                     <div class="form-group">
//                                         <label class="col-form-label">Mobile </label>
//                                         <input
//                                             class="form-control"
//                                             name="Mobile"
//                                                     value={Mobile} onChange={e => setMobile(e.target.value)}
//                                             type="text"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div class="col-sm-6">
//                                     <div class="form-group">
//                                         <label class="col-form-label">Company</label>
//                                                 <input
//                                                     class="form-control"
//                                                     name="Company"
//                                                     value={Company} onChange={e => setCompany(e.target.value)}
//                                                     type="text"
//                                                 />
                                    
//                                 </div>
                                
//                                 </div>
//                             <div class="submit-section">
//                                 <button type="submit" class="btn btn-primary submit-btn">Save</button>
//                             </div>
//                         </form>
//                         ) : (
//                     <h1 className="text-center">No Client Found</h1>
//           )}
//                     </div>
                    
//                 </div>
                    
                
                
//             </div>
            
            
            
        
       
//         );
// };
// const mapStateToProps = (state) => ({
//     Clients: state,
// });
// const mapDispatchToProps = (dispatch) => ({
//     updateClient: (data) => {
//         dispatch({ type: "UPDATE_Client", payload: data });
//     },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Editclient);
