import React from 'react'
import "./_Add.scss"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { mainContext } from '../../Context/Context';
import { addForm } from '../../Schema/AddForm';

const AddForm = () => {

  const { postData, input, changeInput } = useContext(mainContext)
  const { register, 
    handleSubmit,
     formState: { errors } } = useForm({
    resolver: yupResolver(addForm),
  });
  const onSubmit = (data) => {
    console.log(data)
    postData()
  };
  return (
    <div className='addForm'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 allAdd">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='inputForm'>
                <div>Name</div>
                <input type="text" placeholder='name' {...register("name")} name="name" value={input.name} onChange={changeInput} />
                {errors.name && <p>This name is required</p>}
              </div>
              <div className='inputForm'>
                <div> Image url</div>
                <input type="url" placeholder='url'  {...register("url")} name="url" value={input.url} onChange={changeInput} />
                {errors.url && <p>This url is required</p>}
              </div>
              <div className='inputForm'>
                <div>Price</div>
                <input type="number" placeholder='price'  {...register("price")} name="price" value={input.price} onChange={changeInput} />
                {errors.price && <p>This price is required</p>}
              </div>
              <button>Add to api</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddForm