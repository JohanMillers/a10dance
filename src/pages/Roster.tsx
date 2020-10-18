import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemSliding, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {chevronForwardCircleOutline, ellipsisHorizontalOutline, eye, eyeOffOutline, personOutline} from 'ionicons/icons'
import React, {useState} from 'react';
import { Presence } from '../Core/prensece';
import { useStudents } from '../Core/student-hook';
import { Student } from '../Core/stundent';

const Roster: React.FC = () => {
    const emptyStudent: Student = {
        id: '',
        firstName: '',
        lastName: ''
      };

    const [students, setStudents] = useStudents();
    const [selectedStudent, setSelectedStudent] = useState(emptyStudent);

    function clickStudent(student: Student) {
        setSelectedStudent(student);
      }
    

    return(
        <IonPage>
          <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Class Roster</IonTitle>
        </IonToolbar>
      </IonHeader>

            <IonContent>
               <IonList>
                   {students.map((student:any)=> {
                       return(
                           <IonItemSliding key={student.id}>
                               <IonItem>
                                   <IonIcon slot="start" icon={personOutline}></IonIcon>
                                   <IonLabel>{student.lastName}, {student.firstName}</IonLabel>
                                   {student.status === Presence.Present && <IonIcon slot="end" icon={eye}></IonIcon>}
                                   {student.status === Presence.Absent && <IonIcon slot="end" icon={eyeOffOutline}></IonIcon>}
                                   <IonButtons slot="end">
                                       <IonButton onClick={() => clickStudent(student)}>
                                           <IonIcon slot="icon-only" icon={ellipsisHorizontalOutline}></IonIcon>
                                       </IonButton>
                                       <IonButton routerLink={'/student/${student.id}'} routerDirection="forward">
                                           <IonIcon slot="icon-only" icon={chevronForwardCircleOutline}></IonIcon>
                                       </IonButton>
                                   </IonButtons>
                               </IonItem>
                           </IonItemSliding>
                       );
                   })} 
               </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Roster;