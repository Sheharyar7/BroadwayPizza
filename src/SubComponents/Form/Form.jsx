import React, { useState } from 'react';
import './Form.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userdata from '../Userdata/Userdata';
import Logo from '../../Logo/Logo';
import Navbar from '../../Navbar/Navbar';

export default function Form({text}) {
  const [formdata, setformdata] = useState({
    uemail: '',
    upassword: '',
    uphone: '',
    index: '',
  });

  const [userdata, newuserdata] = useState([]);

  function setData(e) {
    let data = { ...formdata };
    let inputname = e.target.name;
    let inputvalue = e.target.value;
    data[inputname] = inputvalue;
    setformdata(data);
  }

  function submitfunc(e) {
    e.preventDefault();
    if (formdata.uemail === '' || formdata.upassword === '' || formdata.uphone === '') {
      toast.info('Please fill all the entries');
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formdata.uemail)) {
      toast.info("Email must contain letters, an '@' symbol, and a valid domain (e.g., '.com').");
      return;
    }
    const phonePattern = /^\d+$/;
  if (!phonePattern.test(formdata.uphone)) {
    toast.info('Phone number must contain only numbers.');
    return;
  }
    
    toast.success('Form is Submitted')
    if (formdata.index === '') {
      let checkdata = userdata.filter(v => v.uemail === formdata.uemail && v.uphone === formdata.uphone);
      if (checkdata.length === 1) {
        toast.info('Entry already exists');
      } else {
        let olddata = {
          uemail: formdata.uemail,
          upassword: formdata.upassword,
          uphone: formdata.uphone,
        };
        newuserdata([...userdata, olddata]);
        setformdata({
          uemail: '',
          upassword: '',
          uphone: '',
          index: '',
        });
      }
    } else {
      let formindex = formdata.index;
      let olddata = [...userdata];
      let checkdata = userdata.filter((v, i) => (v.uemail === formdata.uemail || v.uphone === formdata.uphone) && i !== formindex);

      if (checkdata.length === 0) {
        olddata[formindex].uemail = formdata.uemail;
        olddata[formindex].upassword = formdata.upassword;
        olddata[formindex].uphone = formdata.uphone;
        newuserdata(olddata);
        setformdata({
          uemail: '',
          upassword: '',
          uphone: '',
          index: '',
        });
      } else {
        toast.info('Entry already exists');
      }
    }
  }

  function deleterow(index) {
    let deletedata = userdata.filter((v, i) => i !== index);
    newuserdata(deletedata);
    toast.success('Row deleted successfully');
  }

  function updaterow(index) {
    let updatedata = userdata[index];
    setformdata({ ...updatedata, index });
  }

  return (
    <>
    <div className="container-fluid">
    <div className="row">
    <div className="col-1" >
    <Navbar />
    </div>
    <div className="col-11">
    <Logo/>
      <ToastContainer />
      <div className="container">
        <div className="d-flex align-items-center flex-column justify-content-center vh-100">
          <div className="col-6">
            <form className='formbg border shadow p-4'>
              <h3>{text || 'Your Account'}</h3>
              <div className="form-group">
                <label htmlFor="uemail">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" value={formdata.uemail} name="uemail" onChange={setData} required />
              </div>
              <div className="form-group">
                <label htmlFor="uphone">Phone:</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" value={formdata.uphone} name="uphone" onChange={setData} />
              </div>
              <div className="form-group">
                <label htmlFor="upassword">Password:</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={formdata.upassword} name="upassword" onChange={setData} />
              </div>
              <button type="submit" className="btn btn-warning my-2" onClick={submitfunc}>Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        {
          userdata.length >= 1 ? 
            userdata.map((v, i) => {
              return (
                <Userdata 
                  key={i} 
                  uemail={v.uemail} 
                  uphone={v.uphone} 
                  upassword={v.upassword} 
                  updaterow={() => updaterow(i)} 
                  deleterow={() => deleterow(i)} 
                />
              );
            })
          :
          'No data found'
        }
      </div>
      </div>
      </div>
      </div>
    </>
  );
}



// import React, { useState } from 'react'
// import './Form.css'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

// export default function Form() {
//     const[formdata, setformdata]=useState(
//         {
//             uname:'',
//             uemail:'',
//             uphone:'',
//             umessage:'',
//             index: '',
//         }
//     )
//     const [userdata,newuserdata]= useState([])
//     function setData(e){
//       let data={...formdata}
//       let inputname= e.target.name
//       let inputvalue=e.target.value
//       data[inputname]=inputvalue
//       setformdata(data)
//     }
//     function submitfunc(e){
//       e.preventDefault()
//       console.log(formdata.index)
      
//       if(formdata.uname || formdata.uemail || formdata.uphone || formdata.umessage== '' ){
//         toast.info('Please Fill all the Entries')
//       }
//       if(formdata.index==''){
//       let checkdata= userdata.filter((v)=> v.uemail==formdata.uemail || v.uphone== formdata.uphone)
//       if(checkdata.length==1){
//         toast.info('Entry already exists')
//       }
//       else{
//       let olddata={
//         uname: formdata.uname,
//         uemail: formdata.uemail,
//         uphone: formdata.uphone,
//         umessage: formdata.umessage,
//       };
//       newuserdata([...userdata,olddata])
//       setformdata({uname:'',
//         uemail:'',
//         uphone:'',
//         umessage:'',
//         index: '',})
//     }
//   }
//   else{
//     let formindex=formdata.index
//     let olddata=userdata
//     let checkdata= userdata.filter((v,i)=> v.uemail==formdata.uemail || v.uphone== formdata.uphone && i!=formindex)
//     if(checkdata.length==0){

//     olddata[formindex]['uname']=formdata.uname
//     olddata[formindex]['uemail']=formdata.uemail
//     olddata[formindex]['uphone']=formdata.uphone
//     olddata[formindex]['umessage']=formdata.umessage
//     newuserdata(olddata)
//     setformdata({
//       uname:'',
//         uemail:'',
//         uphone:'',
//         umessage:'',
//         index: '',
//     })
//   }
//   else{    
//     toast.info('Entry already exists')
//   }
//   }
// }
//   function deleterow(index){
//     let deletedata= userdata.filter((v,i)=>i!=index)
//     newuserdata(deletedata)
//     toast.success('Row deleted successfully')
//   }
//   function updaterow(index){
//     let updatedata = userdata[index];
//     setformdata({ ...updatedata, index });
//   }
   
//   return (
//     <>
//     <ToastContainer/>
//     <div className='mt-4 text-center'>{userdata.length}</div>
//     <h2 className='text-center mb-4 '>Enquire Now</h2>
//     <div className="container-fluid">
//       <div className="row">
//     <div className="col-5 firstcol">
//     <form onSubmit={submitfunc}>
//         <label className="form-label mt-4"> Name</label>
//         <input type="text" value={formdata.uname} name="uname" onChange={setData}  className='form-control mb-4 formshadow' />
//         <label className="form-label "> Email</label>
//         <input type="text" value={formdata.uemail} name="uemail" onChange={setData} className='form-control  mb-4 formshadow' />
//         <label className="form-label"> Phone</label>
//         <input type="text" value={formdata.uphone} name="uphone" onChange={setData} className='form-control  mb-4 formshadow' />
//         <label className='form-label '>Message</label>
//         <textarea value={formdata.umessage} name="umessage" onChange={setData} className='form-control  mb-4 formshadow'></textarea>
//         <button className='btn btn-danger formshadow' >
//           {formdata.index!==''? 'Update': 'Show'}
//         </button>
//     </form>
//     </div>
//     <div className="col-7">
//       <h4 className='text-center mt-4 mb-4'>Form data</h4>
//       <table className='tablee'>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Password</th>
//             <th>Action</th>
//           </tr>
//           </thead>
//           <tbody>
//           {
//             userdata.length>=1?
//             userdata.map((v,i)=>{
//               return(
//               <tr>
//             <td>{i}</td>
//             <td>{v.uname}</td>
//             <td>{v.uemail}</td>
//             <td>{v.uphone}</td>
//             <td>{v.umessage}</td>
//             <td>
//               <button onClick={()=>updaterow(i)}>Edit</button><button onClick={()=>deleterow(i)}>Delete</button>
//             </td>
//           </tr>
//           )
//             })
          
//           :
//           <tr colSpan={6}>No data Found</tr>
//           }
//           </tbody>
//       </table>
//     </div>
//     </div>
//         </div>

//     </>
//   )
// }
