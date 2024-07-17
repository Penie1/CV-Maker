import { useState } from 'react'
import EducationalExp from "./components/EducationalExp"
import GeneralInfo from "./components/GeneralInfo"
import WorkExp from "./components/WorkExp"
import DisplayComponent from './components/DisplayCompenent'




function App() {

  const [generalInfo,setGeneralInfo]= useState({firstName:"",lastName:"",phoneNum:"", email:""});

  const [educationalExp,setEducationalExp] =useState({
    study:'',schoolName:'',
    startDate:'',endDate:''
});

  const [workExp,setWorkExp]= useState(
  {job:'',company:'',
   startDate:'',endDate:''
   ,responsibility:''}
);

 function handelForm(e){
  e.preventDefault();
  console.log(workExp,educationalExp,generalInfo)

 }

  return (
    <div className=" grid content-between min-h-dvh">
   <GeneralInfo handelForm={handelForm} generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
   <WorkExp workExp={workExp} setWorkExp={setWorkExp} handelForm={handelForm}/>
   <EducationalExp educationalExp={educationalExp} setEducationalExp={setEducationalExp} handelForm={handelForm}/>
   <DisplayComponent generalInfo={generalInfo} workExp={workExp} educationalExp={educationalExp} />
    </div>
  )
}


export default App
