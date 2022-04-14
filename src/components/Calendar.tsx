import {
  Inject,
  ScheduleComponent,
  Day,
  WorkWeek,
  Month,
  Agenda,
  ResourcesDirective,
  ResourceDirective,
  ScheduleTypecast,
} from "@syncfusion/ej2-react-schedule";
import { setCulture, registerLicense } from "@syncfusion/ej2-base";

import { loadCldr, L10n } from "@syncfusion/ej2-base";
import * as gregorian from "cldr-data/main/is/ca-gregorian.json";
import * as numbers from "cldr-data/main/is/numbers.json";
import * as timeZoneNames from "cldr-data/main/is/timeZoneNames.json";

import * as Panels from "./Panels";

loadCldr(gregorian, numbers, timeZoneNames);
L10n.load({
  is: {
    schedule: {
      day: "Dagur",
      week: "Vika",
      workWeek: "Vinnuvika",
      month: "Mánuður",
      agenda: "Listi",
      weekAgenda: "Viku listi",
      workWeekAgenda: "Vinnuviku listi",
      monthAgenda: "Mánaðar listi",
      today: "Í dag",
      noEvents: "Engar bókanir",
      allDay: "Allur dagurinn",
      start: "Byrjar",
      end: "Endar",
      more: "Meira",
      close: "Loka",
      cancel: "Hætta við",
      noTitle: "Enginn titill",
      delete: "Eyða",
      deleteEvent: "Eyða bókun",
      selectedItems: "Valin atriði",
      deleteSeries: "Eyða endurtekningum",
      edit: "Breyta",
      editSeries: "Breyta endurtekningum",
      editEvent: "Breyta bókun",
      createEvent: "Stofna",
      subject: "Efni",
      addTitle: "Bæta við titli",
      moreDetails: "Nánar",
      save: "Staðfesta",
      editContent: "Breyta efni",
      deleteRecurrenceContent: "Breyta efni endurtekningar?",
      deleteContent: "Eyða efni?",
      newEvent: "Ný bókun",
      title: "Titill",
      location: "Staðsetning",
      description: "Lýsing",
      timezone: "Tímabelti",
      startTimezone: "Upphafs tímabelti",
      endTimezone: "Loka tímabelti",
      repeat: "Endurtaka",
      saveButton: "Staðfesta",
      cancelButton: "Hætta við",
      deleteButton: "Eyða",
      recurrence: "Endurtekning",
      editRecurrence: "Breyta endurtekningu",
      repeats: "Endurtekur",
      alert: "Viðvörun",
      startEndError: "Bókun getur ekki endað áður en hún hefst",
      invalidDateError: "Dagsetning ekki rétt mótuð",
      ok: "Staðfesta",
      occurrence: "Tilvik",
      series: "Endurtekning",
      previous: "Fyrri",
      next: "Næsta",
      timelineDay: "Tímalína dags",
      timelineWeek: "Tímalína viku",
      timelineWorkWeek: "Tímalína vinnuviku",
      timelineMonth: "Tímalína mánaðar",
    },
    recurrenceeditor: {
      none: "Ekki",
      daily: "Daglega",
      weekly: "Vikulega",
      monthly: "Mánaðrlega",
      month: "Mánuður",
      yearly: "Árlega",
      never: "Aldrei",
      until: "Þangað til",
      count: "Samtals sinnum",
      first: "Fyrsti",
      second: "Annar",
      third: "Þriðji",
      fourth: "Fjórði",
      last: "Síðasti",
      repeat: "Endurtekning",
      repeatEvery: "Endurtekur hvern",
      on: "Á",
      end: "Endar",
      onDay: "Á degi",
      days: "Dagar)",
      weeks: "Vikur)",
      months: "Mánuðir)",
      years: "Ár)",
      every: "Hvern",
      summaryTimes: "sinnumk)",
      summaryOn: "á",
      summaryUntil: "þar til",
      summaryRepeat: "Endurtekning",
      summaryDay: "dag)",
      summaryWeek: "viku)",
      summaryMonth: "mánuður)",
      summaryYear: "ár)",
      monthWeek: "Mánuður og vika",
      monthPosition: "Mánuður",
      monthExpander: "Stækka mánuð",
      yearExpander: "Stækka ár",
      repeatInterval: "Milli endurtekninga",
    },
    calendar: {
      today: "Í dag",
    },
  },
});

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkFiWX5WcH1XR2daUU0="
);
setCulture("is");

const Calendar: React.FC = () => (
  <ScheduleComponent
    group={{ resources: ["employees"] }}
    resourceHeaderTemplate={ResourceHeader}
    currentView="Day"
    workDays={[1, 3, 5, 6]}
    startHour="08:00"
    endHour="18:00"
    views={["Day", "WorkWeek", "Month", "Agenda"]}
    timezone="UTC"
    eventSettings={{
      dataSource: [
        {
          id: 2,
          resourceId: 1,
          Subject: "Great success",
          StartTime: new Date(2022, 3, 14, 10, 0),
          EndTime: new Date(2022, 3, 14, 12, 30),
        },
      ],
    }}
  >
    <ResourcesDirective>
      <ResourceDirective
        name="employees"
        field="resourceId"
        textField="text"
        idField="id"
        colorField="color"
        dataSource={[
          {
            id: 1,
            text: "Will Smith",
            color: "#ea7a57",
            designation: "Cardioligst",
            img: "https://www.signaturestyle.com/content/dam/magicuts/models/3x4/signature-style-model-angel-5038-3x4.png",
          },
          {
            id: 2,
            text: "Alice",
            color: "#7fa900",
            designation: "Neurologist",
            img: "https://www.signaturestyle.com/content/dam/magicuts/models/3x4/signature-style-model-angel-5038-3x4.png",
          },
          {
            id: 3,
            text: "Robson",
            color: "#7fa900",
            designation: "Orthopedic Surgeon",
            img: "https://www.signaturestyle.com/content/dam/magicuts/models/3x4/signature-style-model-angel-5038-3x4.png",
          },
          {
            id: 4,
            text: "Count Dracula",
            color: "#7fa900",
            designation: "Orthopedic Surgeon",
            img: "https://www.signaturestyle.com/content/dam/magicuts/models/3x4/signature-style-model-angel-5038-3x4.png",
          },
        ]}
      />
    </ResourcesDirective>
    <Inject services={[Day, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>
);

const ResourceHeader: React.FC<ScheduleTypecast["resourceHeaderTemplate"]> = ({
  resourceData,
}) => {
  console.log("data", resourceData);
  const { img, text, designation } = resourceData;
  return (
    <Panels.AvatarTitlePanel
      avatarSrc={img}
      label={text}
      sublabel={designation}
    />
  );
};

export default Calendar;
