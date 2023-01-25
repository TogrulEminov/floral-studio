import React from 'react'
import "./_Add.scss"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { mainContext } from '../../Context/Context';
import { addForm } from '../../Schema/AddForm';

const AddForm = () => {

    const { postData, input } = useContext(mainContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(addForm),
    });
    const onSubmit = (data) => {
        console.log(data)
        postData()
    };
  return (
    <div>AddForm</div>
  )
}

export default AddForm