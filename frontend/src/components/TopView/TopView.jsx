import React, { useContext } from "react";
import SectionTop from "./SectionTop";
import { BooksContext } from "../../context/BooksContext";
function TopView() {
  const { floors, sections, selectedFloor, setSelectedFloor } =
    useContext(BooksContext);

  const handleFloorChange = (e) => {
    const floorId = e.target.value;
    setSelectedFloor(floorId);
    console.log("floor id----->", floorId);
  };
  return (
    <div className="w-full h-full">
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 ">
        <select
          value={selectedFloor}
          onChange={handleFloorChange}
          className="w-full border-2 text-xs md:text-lg p-1 md:p-5   rounded-md"
        >
          <option value={0} disabled>
            Select floor
          </option>
          {floors.map((floor) => (
            <option key={floor.floor_id} value={floor.floor_id}>
              {floor.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full h-full grid grid-cols-3 items-center text-center p-10 md:p-20 gap-5 md:gap-10 text-xs md:text-lg">
        {sections.length > 0 ? (
          sections.map((section) => (
            <SectionTop key={section.section_id} data={section} />
          ))
        ) : (
          <p>No sections available</p>
        )}
      </div>
    </div>
  );
}

export default TopView;
