// EventList.js
import pic from '../assests/Hiver au Chaud.jpeg'; 
import pic1 from '../assests/cancer.jpeg'; 
import pic2 from '../assests/palastine.png'; 
import pic3 from '../assests/diabetes.jpg';

export const EventList = [
  {
    id: 1,
    name: "Hiver au Chaud",
    image: pic,
    date: new Date("2023-12-01"),
    description: "Description of the event is that we help people in need in the winter",
    Category: "sdg",
  },
  {
    id: 2,
    name: "cancer",
    image: pic1,
    date: new Date("2023-12-01"),
    description: "Description of the event",
    Category: "sdg",
  },
  {
    id: 3,
    name: "palastine",
    image: pic2,
    date: new Date("2023-12-01"),
    description: "Description of the event",
    Category: "sdg",
  },
  {
    id: 4,
    name: "diabet",
    image: pic3,
    date: new Date("2023-12-01"),
    description: "Description of the event",
    Category: "sdg",
  },
];

export const addEventToList = (newEvent) => {
  EventList.push(newEvent);
};
