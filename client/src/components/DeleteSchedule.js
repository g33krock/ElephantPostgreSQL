import { Component } from "react";
import { Button} from "reactstrap"; 
import { scheduleService } from "../services/scheduleService";
  export class DeleteSchedule extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
        <div>
          <Button color="link" size="sm" onClick={() => {
            this.deleteSchedule();
            }}>
            Delete Schedule
          </Button>
        </div>
      );
    }
    deleteSchedule(){
      const scheduleObject = {
        id: this.props.scheduleId
      };
      const schedule =  scheduleService.delete(scheduleObject);
      console.log(schedule)
    }
  }

    
    