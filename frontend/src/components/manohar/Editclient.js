import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";


const Editclient = ({ clients, updateClient }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const currentClient = clients.find(
        (client) => client.id === parseInt(id)
    );
    useEffect(() => {
            setName(currentClient.Name)
            setUname(currentClient.Uname)
            setClientID(currentClient.ClientID)
            setEmail(currentClient.Email)
            setMobile(currentClient.Mobile)
            setCompany(currentClient.Company)
    }, [currentClient]);
    const [Name, setName] = useState("");
    const [Uname, setUname] = useState("");
    const [ClientID, setClientID] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Company, setCompany] = useState("");


    
    const handleSubmit = (e) => {
        e.preventDefault();

    };
    const data = {
        id: currentClient.id,
        Name,
        Uname,
        ClientID,
        Email,
        Mobile,
        Company,
    };

    updateClient(data);
    navigate.push("/");

    return (
        
        <div className="container">
            <div className="row d-flex flex-column">
                <button
                    className="btn btn-dark ml-auto my-5"
                    onClick={() => navigate.push("/")}
                >
                    Go back
                </button>
                    <div class="modal-body">
                        {currentClient ? (
                        <form class="editform" onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Name <span class="text-danger">*</span></label>
                                        <input
                                            class="form-control"
                                            name="Name"
                                                        value={Name} onChange={e => setName(e.target.value)}
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
                                                        value={Uname} onChange={e => setUname(e.target.value)}
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
                                                        value={Email} onChange={e => setEmail(e.target.value)}
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
                                                        value={ClientID} onChange={e => setClientID(e.target.value)}
                                            readOnly=""
                                            name="_id"
                                            class="form-control floating"
                                        />
                                    </div>
                                </div>
                                
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Mobile </label>
                                        <input
                                            class="form-control"
                                            name="Mobile"
                                                    value={Mobile} onChange={e => setMobile(e.target.value)}
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Company</label>
                                                <input
                                                    class="form-control"
                                                    name="Company"
                                                    value={Company} onChange={e => setCompany(e.target.value)}
                                                    type="text"
                                                />
                                    
                                </div>
                                
                                </div>
                            <div class="submit-section">
                                <button type="submit" class="btn btn-primary submit-btn">Save</button>
                            </div>
                        </form>
                        ) : (
                    <h1 className="text-center">No Client Found</h1>
          )}
                    </div>
                    
                </div>
                    
                
                
            </div>
            
            
            
        
       
        );
};
const mapStateToProps = (state) => ({
    Clients: state,
});
const mapDispatchToProps = (dispatch) => ({
    updateClient: (data) => {
        dispatch({ type: "UPDATE_Client", payload: data });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Editclient);
