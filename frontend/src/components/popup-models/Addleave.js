// import '../../public/assests/Leaves.css'

// export default function Addleave() {
//     return (
//                 <div >
//                     <div >
//                         <h5 class="modal-title">Add Leave</h5>
//                     </div>
//                     <div class="modal-body">
//                         <form action="/leaves" method="POST">
//                             <div class="form-group">
//                                 <label>Leave Type <span class="text-danger">*</span></label>
//                                 <select name="leavetype" id="leavetype" class="select" >
//                                     <option>Select Leave Type</option>
//                                     <option>Casual Leave 12 Days</option>
//                                     <option>Medical Leave</option>
//                                     <option>Loss of Pay</option>
//                                 </select>
//                             </div>
//                             <div class="form-group">
//                                 <label>From <span class="text-danger">*</span></label>
//                                 <div class="cal-icon">
//                                     <input name="from" id="from" class="form-control datetimepicker" type="text" />
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <label>To <span class="text-danger">*</span></label>
//                                 <div class="cal-icon">
//                                     <input name="to" id="to" class="form-control datetimepicker" type="text" />
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <label>Number of days <span class="text-danger">*</span></label>
//                                 <input name="days" id="days" class="form-control" type="text" />
//                             </div>
//                             <div class="form-group">
//                                 <label>Remaining Leaves <span class="text-danger">*</span></label>
//                                 <input class="form-control" readonly="" value="12" type="text" />
//                             </div>
//                             <div class="form-group">
//                                 <label>Leave Reason <span class="text-danger">*</span></label>
//                                 <textarea rows="4" class="form-control" name="leavereason" id="leavereason"></textarea>
//                             </div>
//                             <div class="submit-section">
//                                 <button class="btn btn-primary submit-btn">Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//     );
// };

import '../../public/assests/Leaves.css'
import { useState } from 'react';

const AddLeave = () => {
    const [inputs, setInputs] = useState({
        leavetype:'',
        from:'',
        to:'',
        days:'',
        leavereason:''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        
        const leavetype = inputs.leavetype;
        if(leavetype===''){
            alert('Please select leavetype')
            return;
        }
        const from = inputs.from;
        if(from===''){
            alert('Please select from date')
            return;
        }
        const to = inputs.to;
        if(to===''){
            alert('Please select to date')
            return;
        }
        const days = inputs.days;
        if(days===''){
            alert('Please enter Number of days')
            return;
        }
        const leavereason = inputs.leavereason;
        if(leavereason===''){
            alert('Please enter leave reason')
            return;
        }
        setInputs('')
    }

    return (
        <div id="add_leave" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Leave</h5>
                        <button type="button" class="btn-close btn-outline-light" data-bs-dismiss="modal"
                            aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label>Leave Type <span class="text-danger">*</span></label>
                                <select name="leavetype" id="leavetype" class="select" onChange={handleChange} value={inputs.leavetype || ""}>
                                    <option>Select Leave Type</option>
                                    <option>Casual Leave 12 Days</option>
                                    <option>Medical Leave</option>
                                    <option>Loss of Pay</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>From <span class="text-danger">*</span></label>
                                <div class="cal-icon">
                                    <input
                                        type="date"
                                        name='from'
                                        value={inputs.from || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>To <span class="text-danger">*</span></label>
                                <div class="cal-icon">
                                    <input
                                        type="date"
                                        name='to'
                                        value={inputs.to || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Number of days <span class="text-danger">*</span></label>
                                <input
                                    type='number'
                                    name='days'
                                    value={inputs.days || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="form-group">
                                <label>Remaining Leaves <span class="text-danger">*</span></label>
                                <input class="form-control" readonly="" value="12" type="text" />
                            </div>
                            <div class="form-group">
                                <label>Leave Reason <span class="text-danger">*</span></label>
                                <textarea rows="4" class="form-control" name="leavereason" id="leavereason" onChange={handleChange} value={inputs.leavereason || ''}></textarea>
                            </div>
                            <div class="submit-section">
                                <button class="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddLeave;
