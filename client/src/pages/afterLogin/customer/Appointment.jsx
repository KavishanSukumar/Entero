import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month,
  Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import {scheduleData} from '../../../documents/dummy';
import PageHeader from '../../../components/PagesHeader/PageHeader';

const Appointment = () => {
  return (
    <div className="w-full p-2 pb-48
    bg-slate-100">
    <div className="m-2 md:m-10 mt-24 p-2
    md:p-10 bg-white rounded-3xl">
      <PageHeader title="Appointments" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource:scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
        >
          <Inject services={[Day, Week, WorkWeek,
          Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
    </div>




    
    </div>
  )
}

export default Appointment