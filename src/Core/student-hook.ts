import { useState } from "react";
import { Student } from "./stundent";



const mockStudents: Student[] = [
    { id: '1', firstName: 'Greg',lastName: 'Marine'},
    { id: '2',firstName: 'Jonathan',lastName: 'Bennett'},
    { id: '3',firstName: 'Neil',lastName: 'Marte'},
    { id: '4',firstName: 'Jennifer',lastName: 'Napoleon'},
    { id: '5',firstName: 'Casey',lastName: 'McBride'},
    { id: '6',firstName: 'Diane',lastName: 'Rivera'},
    { id: '7',firstName: 'Troy',lastName: 'Gutierrez'},
    { id: '8',firstName: 'Alex',lastName: 'Litte'},
    { id: '9',firstName: 'Jose',lastName: 'Ramirez'},
    { id: '10',firstName: 'Nelson',lastName: 'Cruz'},
    { id: '11',firstName: 'Mark',lastName: 'Texeira'},
    { id: '12',firstName: 'Alex',lastName: 'Gordon'},
    { id: '13',firstName: 'Urbardo',lastName: 'Jimenez'},
    { id: '14',firstName: 'Manny',lastName: 'Ramirez'},
    { id: '15',firstName: 'Jose',lastName: 'Conterra'},
    { id: '16',firstName: 'Willy',lastName: 'Pena'},
    { id: '17',firstName: 'Yadiel',lastName: 'Molina'},
    { id: '18',firstName: 'Yordanny',lastName: 'Vardespin'},
    { id: '19',firstName: 'Daniel',lastName: 'Descalso'},
    { id: '20',firstName: 'Carlos',lastName: 'Peguero'}
]

export const useStudents = function () {
    const useStudentState = useState(mockStudents);
    return useStudentState;
  }
