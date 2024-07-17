import PropTypes  from "prop-types";



export default function EducationalExp({educationalExp,setEducationalExp,handelForm}){


    function handleChange(e){
        setEducationalExp({...educationalExp,[e.target.name] : e.target.value})
       }
  
   
return <form className=" border-2 border-slate-800 grid  gap-10" onSubmit={handelForm}>
    <div>
<label htmlFor="study"  >Field of study</label>
<input name="study" required type="text" id="study" placeholder="Art" value={educationalExp.study} onChange={handleChange}></input>
</div>
<div>
    <label htmlFor="school-name" >School Name</label>
<input name="schoolName"  required type="text" id="school-name" placeholder="Harvard University"  value={educationalExp.school} onChange={handleChange}></input>
</div>
<div>
<label htmlFor="start-date">Start Date</label>
<input name="startDate" required type="date" id="start-date" value={educationalExp.startDate} onChange={handleChange}></input>
</div>
<div>
<label htmlFor="end-date" >End Date</label>
<input name="endDate" required type="date" id="end-date" value={educationalExp.endDate} onChange={handleChange} ></input>
</div>
<button className="border-2 border-amber-600" type="submit">Continue</button>

</form>
}

EducationalExp.propTypes={
    handelForm:PropTypes.func,
    setEducationalExp:PropTypes.func,
    educationalExp:PropTypes.object
   }