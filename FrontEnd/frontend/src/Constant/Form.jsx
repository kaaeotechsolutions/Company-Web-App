import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Loading from '../Constant/Loading';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.number().min(6000000000).max(9999999990).required('Phone number is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [btnToggle, setBtnToggle] = React.useState(false);

  const handleSubmit = async (values, actions) => {
    const url = 'http://127.0.0.1:8000/api/data/contacts/';
    try {
      setBtnToggle(true);
      await axios.post(url, values);
      setBtnToggle(false);
      actions.resetForm();
    } catch {
      setBtnToggle(false);
    }
  };

  return (
    <div>
      {btnToggle ? (
        <div style={{ height: '70vh' }} className="">
          <Loading />
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form method="post" encType="multipart/form-data" className="flex justify-center items-center">
              <div className="w-4/5 lg:w-1/2">
                <div className="grid">
                  <label htmlFor="name" className="text-lg">
                    Name
                  </label>
                  <Field name="name" className="h-12 w-full border-2 my-1 pl-2 outline-none" type="text" />
                  <ErrorMessage name="name" component="div" className="text-red-500" />
                </div>
                <div className="grid">
                  <label htmlFor="email" className="text-lg">
                    Email
                  </label>
                  <Field name="email" className="h-12 w-full border-2 my-1 pl-2 outline-none" type="text" />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <div className="grid">
                  <label htmlFor="phone" className="text-lg">
                    Phone
                  </label>
                  <Field name="phone" className="h-12 w-full border-2 my-1 pl-2 outline-none" type="number" />
                  <ErrorMessage name="phone" component="div" className="text-red-500" />
                </div>
                <div className="grid">
                  <label htmlFor="subject" className="text-lg">
                    Subject
                  </label>
                  <Field name="subject" className="h-12 w-full border-2 my-1 pl-2 outline-none" type="text" />
                  <ErrorMessage name="subject" component="div" className="text-red-500" />
                </div>
                <div className="grid">
                  <label htmlFor="message" className="text-lg">
                    Message
                  </label>
                  <Field name="message" as="textarea" className="h-36 w-full border-2 my-1 pl-2 pt-2 outline-none" rows="10" />
                  <ErrorMessage name="message" component="div" className="text-red-500" />
                </div>
                <div className="grid">
                  <div className="w-full flex justify-center items-center">
                    <button type="submit" disabled={btnToggle && true} className='my-4 w-36 h-12 bg-purple-800 rounded-lg text-gray-50 shadow-md hover:text-purple-800 hover:bg-gray-50 disabled:bg-slate-200 disabled:text-black'>Submit</button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ContactForm;
















// import React, { useState } from 'react'
// import axios from 'axios';
// import Loading from '../Constant/Loading';


// const Form = () => {
//   const [data, setData] = useState({
//     name: "", email: "", phone: "", subject: "", message: ""
//   })
//   const [btnToggle, setBtnToggle] = useState(false)

//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;

//     setData({ ...data, [name]: value })
//   }

//   const Submit = async () => {
//     const url = 'http://127.0.0.1:8000/api/data/contacts/';

//     try {
//       if (data.name.length !== 0 && data.email.length !== 0 && data.phone.length !== 0 && data.subject.length !== 0 && data.message.length !== 0) {
//         setBtnToggle(true)
//         await axios.post(url, data)
//         setBtnToggle(false)
//         setData({name: "", email: "", phone: "", subject: "", message: ""})
//       }
//     } catch {
//       setBtnToggle(false)
//     }
//   }

//   return (
//     <div>
//       {
//         btnToggle
//           ?
//           <div style={{height:"70vh"}} className="">
//             <Loading />
//           </div>
//           :
//           <form method='post' encType='multipart/form-data' className='flex justify-center items-center'>
//             <div className="w-4/5 lg:w-1/2">
//               <div className="grid">
//                 <label htmlFor="name" className='text-lg'>Name</label>
//                 <input name="name" onChange={(e) => handleInput(e)} value={data.name} className='h-12 w-full border-2 my-1 pl-2 outline-none' type="text" />
//               </div>
//               <div className="grid">
//                 <label htmlFor="email" className='text-lg'>Email</label>
//                 <input name="email" onChange={(e) => handleInput(e)} value={data.email} className='h-12 w-full border-2 my-1 pl-2 outline-none' type="text" />
//               </div>
//               <div className="grid">
//                 <label htmlFor="phone" className='text-lg'>Phone</label>
//                 <input name="phone" onChange={(e) => handleInput(e)} value={data.phone} className='h-12 w-full border-2 my-1 pl-2 outline-none' type="number" />
//               </div>
//               <div className="grid">
//                 <label htmlFor="subject" className='text-lg'>Subject</label>
//                 <input name="subject" onChange={(e) => handleInput(e)} value={data.subject} className='h-12 w-full border-2 my-1 pl-2 outline-none' type="text" />
//               </div>
//               <div className="grid">
//                 <label htmlFor="message" className='text-lg'>Message</label>
//                 <textarea name="message" onChange={(e) => handleInput(e)} value={data.message} className='h-36 w-full border-2 my-1 pl-2 pt-2 outline-none' id="" cols="30" rows="10"></textarea>
//               </div>
//               <div className="w-full flex justify-center items-center">
//                 <button disabled={btnToggle && true} onClick={(e) => Submit(e.preventDefault())} className='my-4 w-36 h-12 bg-purple-800 rounded-lg text-gray-50 shadow-md hover:text-purple-800 hover:bg-gray-50 disabled:bg-slate-200 disabled:text-black'>Submit</button>
//               </div>
//             </div>
//           </form>
//       }
//     </div>
//   )
// }

// export default Form