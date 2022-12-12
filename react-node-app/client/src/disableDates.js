import react from 'react'

class DisableDates extends react.Component
{
    constructor()
    {
        super()
        this.state={
            date1:new Date().toISOString().slice(0,10)
        }
    }

    disableDates = () => {
        var today,dd,mm,yyyy;
        today=new Date();
        dd=today.getDate()
        mm=today.getMonth()+1
        yyyy=today.getFullYear();
        return yyyy+"-"+mm+"-"+dd;
    }

    render()
    {
        return(
            <span>
                <input type="date" max={this.disableDates()} placeholder="YYYY-MM-DD" id="dob" name="birth_date" required={true} />
            </span>
        )
    }
}

export default DisableDates;