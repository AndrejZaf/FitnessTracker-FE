import React, { useState, useEffect, useLayoutEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddSetButton from "../add-set-button/AddSetButton";
import SetRow from "../set-row/SetRow";

export default function ExerciseSets({
  exercise,
  setItems,
  setSetItems,
  setIndex,
  setSetIndex,
}) {
  console.log(setItems, setIndex, exercise);
  const onDragEnd = (result) => {
    if (setItems.length === 1 || result.destination === null) return;
    const newItems = setItems;
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setSetItems(newItems);
  };

  const addAnotherSet = () => {
    const index = setIndex + 1;
    setSetIndex(index);
    setSetItems([
      ...setItems,
      { id: `${index}`, weight: "", reps: "", restPeriod: "" },
    ]);
  };

  const removeSet = (index) => {
    const list = [...setItems];
    list.splice(index, 1);
    setSetItems(list);
  };

  return (
    <div className="sets-list">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {setItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <SetRow
                      provided={provided}
                      snapshot={snapshot}
                      set={item}
                      deleteRow={() => removeSet(index)}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="row">
        <AddSetButton addAnotherRow={addAnotherSet} />
      </div>
    </div>
  );
}
