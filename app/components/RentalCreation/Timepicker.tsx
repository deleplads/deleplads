import React, { useState, useEffect } from 'react';
import { ListItem, ListItemText } from "@mui/material";
import { VariableSizeList } from "react-window";

const hourList = Array.from({ length: 24 }, (_, i) => i);

const TimePickerJs = ({ currentDate, updateHighlightedHours, highlightedHoursForDate }) => {
  const [selectedHours, setSelectedHours] = useState([]);

  // Reset selected hours when currentDate changes
  useEffect(() => {
    // Retrieve the hours for the new currentDate or default to an empty array
    const hoursForNewDate = highlightedHoursForDate[currentDate] || [];
    setSelectedHours(hoursForNewDate);
  }, [currentDate, highlightedHoursForDate]);

  const handleHourClick = (hour) => {
    const newSelectedHours = selectedHours.includes(hour)
      ? selectedHours.filter(h => h !== hour)
      : [...selectedHours, hour];

    setSelectedHours(newSelectedHours);

    // Call the update function passed from the parent
    if (currentDate) {
      updateHighlightedHours(currentDate, newSelectedHours);
    }
  };
    const rowRenderer = ({ index, style }) => {
        const hour = hourList[index];
        const formattedHour = hour < 10 ? `0${hour}` : hour;
        const isSelected = selectedHours.includes(hour);

        return (
            <ListItem
                button
                key={hour}
                style={{ ...style, backgroundColor: isSelected ? 'lightblue' : 'inherit' }}
                onClick={() => handleHourClick(hour)}
            >
                <ListItemText primary={`${formattedHour}:00`} />
            </ListItem>
        );
    };

    const listHeight = 300; // Set your desired height
    const rowHeight = 48; // Set your desired row height

    return (
        <div>
            <div style={{ height: listHeight, width: "200px" }}>
                <VariableSizeList
                    itemData={hourList}
                    height={listHeight}
                    width="100%"
                    itemSize={() => rowHeight}
                    itemCount={hourList.length}
                >
                    {rowRenderer}
                </VariableSizeList>
            </div>
        </div>
    );
};

export default TimePickerJs;
