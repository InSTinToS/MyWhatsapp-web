'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().min(4).required(),
  phone: yup.string().min(4).max(12).required(),
  ddd: yup.string().min(1).max(3).required()
})

export default function Home() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)

    reset()
  }

  return (
    <main className='flex bg-purple-600 w-full h-screen text-white items-center justify-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col max-w-md items-center justify-center'
      >
        <input
          type='text'
          placeholder='Nome'
          {...register('name')}
          className={`flex w-full text-purple-500 border-2 bg-white ${
            errors.name ? 'border-red-500' : 'border-white'
          } rounded px-2 py-1 shadow-black drop-shadow-2xl outline-none`}
        />

        <fieldset className='my-4 flex'>
          <label
            htmlFor='ddd'
            className={`flex text-purple-500 border-2 bg-white ${
              errors.ddd ? 'border-red-500' : 'border-white'
            } rounded px-2 py-1 mr-4 w-20 shadow-black drop-shadow-2xl`}
          >
            <b>+</b>

            <input
              type='text'
              id='ddd'
              maxLength={3}
              defaultValue={55}
              className='bg-transparent w-full outline-none ml-2'
              {...register('ddd')}
            />
          </label>

          <input
            type='text'
            placeholder='Telefone'
            {...register('phone')}
            className={`flex text-purple-500 border-2 bg-white ${
              errors.phone ? 'border-red-500' : 'border-white'
            } rounded px-2 py-1 flex-1 shadow-black drop-shadow-2xl outline-none`}
          />
        </fieldset>

        <button
          type='submit'
          className='flex py-2 w-full flex-1 items-center justify-center text-white  bg-green-500 rounded  shadow-black drop-shadow-2xl'
        >
          Adicionar Contato
        </button>
      </form>
    </main>
  )
}
