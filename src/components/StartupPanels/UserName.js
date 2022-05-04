import React from 'react'
import ButtonPrimary from '../Button'

const UserName = ({nameVal, onChangeFunc, btnFunc}) => {
  return (
      <section className='username__panel'>
        <div className='pagewrapper'>
          <h1>What should we call you?</h1>
          <p>Enter your name down below</p>
          <input type="text" name="name" className='input-primary input-lg' value={nameVal} onChange={onChangeFunc}/>
          <ButtonPrimary type="button" disable={false} extraclass="btn-lg" clickFunc={btnFunc}>Next</ButtonPrimary>
        </div>
      </section>
  )
}

export default UserName