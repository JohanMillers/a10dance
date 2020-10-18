import { Presence } from "./prensece";

export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    birtDate?: string;
    parentName?: string;
    parentEmail?: string;
    parentPhone?: string;
    PhotoUrl?: string;
    status?: Presence
}
