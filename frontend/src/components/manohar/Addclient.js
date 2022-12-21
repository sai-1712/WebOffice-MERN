/* eslint-disable no-unused-vars */
import React, {useState} from "react"
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../../public/assests/clients.css'

// eslint-disable-next-line no-unused-vars

 const Addclients= ({clients,addClient})=> {
    const [Name,setName] = useState("");
    const [Uname, setUname] = useState("");
    const [ClientID, setClientID] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Company, setCompany] = useState("");


         const navigate = useNavigate();



    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!Name || !Uname || !ClientID || !Email || !Mobile || !Company){
            return 
        }
     const data = {
         id: clients.length > 0 ? clients[clients.length - 1].id + 1 : 0,
        Name,
         ClientID,
         Email,
         Mobile,
         Company,
         
     };
     addClient(data);
     navigate("/Clients");
 };

    return (
        <div >
                <div class="modal-header" >
                    <h5 class="modal-title">Add Client</h5>
                </div>
                <div class="modal-body">
                    <form  id="Addclient" onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-form-label">Name <span
                                        class="text-danger">*</span></label>
                                    <input class="form-control" name="Name" type="text" value={Name} onChange={e=> setName(e.target.value)}/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-form-label">Username <span
                                        class="text-danger">*</span></label>
                                    <input class="form-control" name="uname" type="text" value={Uname} onChange={e => setUname(e.target.value)} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-form-label">Email <span class="text-danger">*</span></label>
                                    <input class="form-control floating" name="email" type="email" value={Email} onChange={e => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-form-label">Client ID <span
                                        class="text-danger">*</span></label>
                                    <input class="form-control floating" name="_id" type="text" value={ClientID} onChange={e => setClientID(e.target.value)} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-form-label">Company Name</label>
                                    <input class="form-control" name="company" type="text" value={Company} onChange={e => setCompany(e.target.value)} />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Phone </label>
                                    <input class="form-control" name="phone" type="text" value={Mobile} onChange={e => setMobile(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div class="submit-section">
                    <button type="submit" data-bs-dismiss="modal" class="btn btn-primary submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
        </div>
            
        
    );
};

const mapStateToProps = (state) => ({
    clients: state,
});
const mapDispatchToProps = (dispatch) => ({
    addClient: (data) => {
        dispatch({ type: "ADD_Client", payload: data });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Addclients);
