import { useData } from "../zustand/store/store"
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(6, 'Too Short!')
        .max(8, 'Too Long!')
        .required('Required'),
    about: Yup.string()
        .min(5, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    age: Yup.string()
        .min(2, 'Too Short!')
        .max(3, 'Too Long!')
        .required('Required'),
});

export default function Zustand() {
    const { dataUsers, deleteUser, editUser, addUsers } = useData((state) => state)
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(null)
    const [openAdd, setOpenAdd] = useState()

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const handleFieldEdit = (e) => {
        setOpen(true)
        setFieldValue("name", e.name)
        setFieldValue("about", e.about)
        setFieldValue("age", e.age)
        setIdx(e.id)
    }

    const { handleChange, handleSubmit, setFieldValue, values, resetForm, touched, errors } = useFormik({
        initialValues: {
            name: "",
            about: "",
            age: ""
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            if (idx) {
                editUser({ ...values, id: idx })
                setOpen(false)
            }
            else {
                addUsers({ ...values, id: Date.now })
                setOpenAdd(false)
            }
            resetForm()
        }
    })

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Edit User"}
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="w-[400px]">
                        <div>
                            <input type="text" name="name" value={values.name} onChange={handleChange} className="w-full border-1 rounded-[8px] border-gray-700 p-3 mb-[10px]" placeholder="Enter Name..." />
                            {errors.name && touched.name ? (
                                <p className="mb-[20px] text-red-900">{errors.name}</p>
                            ) : null}
                        </div>
                        <div>
                            <input type="text" name="about" value={values.about} onChange={handleChange} className="w-full border-1 rounded-[8px] border-gray-700 p-3 mb-[10px]" placeholder="Enter Description..." />
                            {errors.about && touched.about ? (
                                <p className="mb-[20px] text-red-900">{errors.about}</p>
                            ) : null}
                        </div>
                        <div>
                            <input type="number" name="age" value={values.age} onChange={handleChange} className="w-full border-1 rounded-[8px] border-gray-700 p-3 mb-[10px]" placeholder="Age..." />
                            {errors.age && touched.age ? (
                                <p className="mb-[20px] text-red-900">{errors.age}</p>
                            ) : null}
                        </div>
                        <button className="w-full bg-blue-400 text-white font-semibold cursor-pointer rounded-[8px] p-3 mb-[20px] active:scale-[90%] transition" type="submit">Save</button>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openAdd}
                onClose={handleCloseAdd}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Add User"}
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="w-[400px]">
                        <div>
                            <input type="text" name="name" value={values.name} onChange={handleChange} className="w-full border-1 rounded-[8px] border-gray-700 p-3 mb-[10px]" placeholder="Enter Name..." />
                            {errors.name && touched.name ? (
                                <p className="mb-[20px] text-red-900">{errors.name}</p>
                            ) : null}
                        </div>
                        <div>
                            <input type="text" name="about" value={values.about} onChange={handleChange} className="w-full border-1 rounded-[8px] border-gray-700 p-3 mb-[10px]" placeholder="Enter Description..." />
                            {errors.about && touched.about ? (
                                <p className="mb-[20px] text-red-900">{errors.about}</p>
                            ) : null}
                        </div>
                        <div>
                            <input type="number" name="age" value={values.age} onChange={handleChange} className="w-full border-1 rounded-[8px] border-gray-700 p-3 mb-[10px]" placeholder="Age..." />
                            {errors.age && touched.age ? (
                                <p className="mb-[20px] text-red-900">{errors.age}</p>
                            ) : null}
                        </div>
                        <button className="w-full bg-blue-400 text-white font-semibold cursor-pointer rounded-[8px] p-3 mb-[20px] active:scale-[90%] transition" type="submit">Save</button>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAdd}>Disagree</Button>
                </DialogActions>
            </Dialog>
            <div>
                <button className="bg-green-600 cursor-pointer px-5 py-2 ml-[44%] mb-[20px] active:scale-[90%] transition rounded-[8px] text-white font-bold"
                    onClick={() => setOpenAdd(true)}
                >Add User</button>
                <div className="flex justify-around p-5 flex-wrap">
                    {dataUsers.map((e) => {
                        return (
                            <div key={e.id} className="w-[270px] shadow-md text-center hover:scale-[105%] transition rounded-[12px] p-5 mb-[50px]">
                                <p className="text-[24px] font-bold mb-[20px]">{e.name}</p>
                                <p className="text-[14px] text-gray-700 mb-[20px]"><span className="font-bold">Description: </span>{e.about}</p>
                                <p className="text-[18px] text-gray-600 mb-[20px]"><span className="font-bold">Age: </span>{e.age}</p>
                                <div className="flex justify-between mb-[10px]">
                                    <button className="text-red-600 hover:text-red-900 transition cursor-pointer"
                                        onClick={() => deleteUser(e.id)}
                                    ><DeleteIcon /></button>
                                    <button className="text-gray-600 hover:text-gray-900 transition cursor-pointer"
                                        onClick={() => handleFieldEdit(e)}
                                    ><EditSquareIcon /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
