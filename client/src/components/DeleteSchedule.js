import { Component } from "react";
import { Button} from "reactstrap"; 
import { scheduleService } from "../services/scheduleService";
  export class DeleteSchedule extends Component {
    constructor(props) {
      super(props);
      this.state = {
        schedule: null,
      };
    }
    render() {
      return (
        <div>
          <Button color="link" size="sm" onClick={() => {
            this.setState({ schedule:this.props.schedule });
            this.deleteSchedule();
            }}>
            Delete Schedule
          </Button>
        </div>
      );
    }
    deleteSchedule(){
      const scheduleObject = {
        scheduleID: this.props.scheduleId
      };
      const schedule =  scheduleService.delete(scheduleObject);
      console.log(schedule)
    }
  }

    
    