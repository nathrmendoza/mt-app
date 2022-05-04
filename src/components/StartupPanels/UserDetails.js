import React, { useEffect, useState, useRef } from 'react'
import ButtonPrimary from '../Button'

const UserDetails = ({isVisible, onChangeFunc, userName, selectVal, incomeVal, allotments, allotAddFunc, allotRemFunc, backFunc}) => {
  
  const [formHeight, setFormHeight] = useState('');
  
  const topText = useRef();
  const formWrap = useRef();

  useEffect(() => {
    console.log(topText.current.getBoundingClientRect().height);

      setFormHeight(formWrap.current.getBoundingClientRect().height - topText.current.getBoundingClientRect().height);
  }, [topText?.current?.clientHeight]);

  return (
    <section className='userdetails__panel'>
      <div className='pagewrapper' ref={formWrap}>
        <div className='top-text' ref={topText}>
          <h1>Hi, {userName}!</h1>
          <p>Now let’s set up the app. Please provide the necessary details. Don’t worry this can be changed anytime.</p>
        </div>
        <div className='form-wrapper' style={{height: `${formHeight}px`}}>
          <div className='form-left'>
            <h3>Initial net income</h3>
            <p>Please input the value of your latest income cashflow. This value can be later on added or subtracted thru the dashboard.</p>
            <div className='form-income-wrapper'>
              <select name="currency" className="select-primary" value={selectVal} onChange={onChangeFunc}>
                <option value="₱">PHP</option>
                <option value="$">USD</option>
              </select>
              <input type="number" className='input-primary' name="income" onChange={onChangeFunc} value={incomeVal}/>
            </div>
          </div>
          <div className='form-right'>
            <div className='allotments-wrapper'>
              <h3>Income Allotments</h3>
              {allotments.length === 0 && (
                <div className='empty-allotments-wrapper'>
                  <p>Nothing here yet, add some income allotments.</p>
                  <ButtonPrimary type="button" disable={false} extraclass="btn-lg" clickFunc={() => {console.log('Click add')}}>Add +</ButtonPrimary>
                </div>
              )}
            </div>
            <div className='buttons-wrapper'>
              <ButtonPrimary type="button" clickFunc={backFunc}>Back</ButtonPrimary>
              <ButtonPrimary type="button" disable={allotments.length === 0} clickFunc={() => {console.log('submit')}}>Submit</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserDetails