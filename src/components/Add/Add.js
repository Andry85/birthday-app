import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import styles from './Add.module.scss';






function Add(props) {

 
  const ref = React.createRef()
 

  const setInfo = (userName, startDate) => {
    props.setInfo(userName, startDate);
    props.setUserName('');
    props.setStartDate(new Date());
  }

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <input type="text" readOnly value={value} className={styles.formWrapper__field} onClick={onClick} ref={ref} />
  ));



  return (
      <div className={styles.formWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-5 pb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Enter a name:</label>
                <input 
                  type="email"
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="Name"
                  value={props.userName}

                  onChange={(e) =>  props.setUserName(e.target.value)}
                />

                {props.errorMsg &&
                  <p className={styles.formWrapper__error}>
                    {props.errorMsg}
                  </p>
                }

              </div>
              <div className="col-md-3 pb-3">
                <label className="form-label">Specify the date of birth:</label>
                <DatePicker 
                selected={props.startDate} 
                onChange={date =>  props.setStartDate(date)}
                dateFormat="dd/MM/yyyy" 
                customInput={<ExampleCustomInput ref={ref} />}
                />
              </div>
              <div className="col-md-12">
                <button 
                  type="button" 
                  className="btn btn-success"
                  onClick={() => setInfo(props.userName, props.startDate)}
                >
                  {props.actionName}
                </button>
              </div>
            </div>
            
          </div>
      </div>
      
  );
}

export default Add;
