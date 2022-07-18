import { faPerson, faCalendarDays, faBed, faCar, faPlane,faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useState} from 'react'
import "./header.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import {format} from "date-fns"


const Header = ({type}) => {

  const[openDate,setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const[openOptions,setOpenOptions] = useState(false)
  const [options, setOptions] = useState(
    {
      adult: 1,
      children: 0,
      room: 1
    }
  );
  ////////////////// important 
  const handleOptions=(name,operator)=>{
    setOptions(prev=>{ return{
      ...prev, [name]: operator === "i"? options[name] +1 : options[name] -1
    }})
  }
///////////////////important
  
  return (
    <div>
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                        Stays
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane}/>
                        Flight
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar}/>
                        Car Rentals
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed}/>
                        Attraction
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        Airport Taxis
                    </div>
                </div>




                { type !="list" &&

                <>
                <h1 className="headerTitle">A lifetime of discounts? Its Genius! </h1>
                <p className="headerDesc">
                    Get rewarded for your travels unlock instant savings
                </p>
                <button className="headerBtn">Sign in / Register</button>


                
                <div className="headerSearch">
                    <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                      <input 
                        type="text"
                        placeholder="Where are you going?"
                        className="headerSearchInput" 
                      /> 
                    </div>
                    <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                      <span 
                        onClick={()=>setOpenDate(!openDate)}                    
                        className="headerSearchText" 
                      > {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                      {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                      />}
                    </div>
                    <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                      <span 
                        className="headerSearchText"
                        onClick={()=>{setOpenOptions(!openOptions)}}
                      >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                      
                      
                      {openOptions &&
                      <div className="options">
                        <div className="optionItem">
                          <span className="optionText">Adult</span>
                          <div className="optionCounter">
                            <button 
                            className="optionCounterButton" 
                            disabled={options.adult<=1}
                            onClick={()=>handleOptions("adult","d")}>-</button>
                            <span className="optionCounterNumber">{`${options.adult}`}</span>
                            <button className="optionCounterButton" onClick={()=>handleOptions("adult","i")}>+</button>
                          </div>
                          
                        </div>
                        <div className="optionItem">
                          <span className="optionText">Children</span>
                          <div className="optionCounter">
                            <button 
                            className="optionCounterButton"
                            disabled={options.children<=0}
                            onClick={()=>handleOptions("children","d")}>-</button>
                            <span className="optionCounterNumber">{`${options.children}`}</span>
                            <button className="optionCounterButton"onClick={()=>handleOptions("children","i")}>+</button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">Room(s)</span>
                          <div className="optionCounter">
                            <button 
                              className="optionCounterButton" 
                              disabled= {options.room<=1}
                              onClick={()=>handleOptions("room","d")}>-</button>
                            <span className="optionCounterNumber">{`${options.room}`}</span>
                            <button className="optionCounterButton"onClick={()=>handleOptions("room","i")}>+</button>
                          </div>
                        </div>
                      </div>
                      }
                    </div>
                    <div className="headerSearchItem">
                      <button className="headerBtn">Search</button>
                    </div>
                </div>
                </>
              }
            </div>

        </div>
    </div>
  )
}

export default Header