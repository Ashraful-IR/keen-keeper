import React, { useState } from 'react';
import { EventContext } from './EventContext';

const EventProvider = ({ children }) => {
    const [eventsList, setEventsList] = useState([]);
    const data ={
        eventsList,setEventsList
    };

    return (
        <EventContext.Provider value={data}>
            {children}
        </EventContext.Provider>
    );
};

export default EventProvider;