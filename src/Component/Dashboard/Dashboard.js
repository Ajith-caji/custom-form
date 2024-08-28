import React, { useContext } from "react";
import plus from "../../assets/plus-button.png";
import text from "../../assets/icons8-text-input-form-50.png"
import number from "../../assets/icons8-number-50.png"
import smiley from "../../assets/icons8-smiley-50.png"
import star from "../../assets/icons8-star-50.png"
import radio from "../../assets/icons8-radio-button-50.png"
import category from "../../assets/icons8-category-50.png"
import { Switch } from "@mui/material";
import { Inputcontext } from "../Store/Inputcontext";
function Dashboard() {
    const { showField } = useContext(Inputcontext);
  
    const fieldItems = [
        { src: text, alt: 'text', label: 'Textarea', fieldName: 'textarea' },
        { src: number, alt: 'number', label: 'Numeric Rating', fieldName: 'numericRating' },
        { src: star, alt: 'star', label: 'Star Rating', fieldName: 'starRating' },
        { src: smiley, alt: 'smiley', label: 'Smiley Rating', fieldName: 'smileyRating' },
        { src: text, alt: 'text', label: 'Single Line Input', fieldName: 'singleLineInput' },
        { src: radio, alt: 'radio', label: 'Radio', fieldName: 'radio' },
        { src: category, alt: 'category', label: 'Categories', fieldName: 'categories' },
    ];
  return (
    <div className="bg-white shadow-md border-2 w-64 h-auto">
      <div className="text-black font-bold flex text-xl m-2">Add Fields</div>
      <div>
        {fieldItems.map((item, index) => (
          <div key={index} className="flex justify-between m-4 text-black font-bold">
            <div className="flex justify-start">
              <img src={item.src} width="25px" alt={item.alt} />
              <div className="mx-2">{item.label}</div>
            </div>
            <div>
            <button type="button" onClick={() => showField(item.fieldName)}>
                                <img src={plus} width="22px" alt="edit" />
                            </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-black font-bold flex text-xl m-2">Add Logic</div>
      <div className="flex justify-between items-center m-2">
        <div>Show based on url</div>
        <div>
          <Switch />
        </div>
      </div>
      <div>
        <input type="text" className="m-2 w-48 border-b-2 border-black" />
      </div>
      <div className="flex justify-between items-center m-2">
        <div>Show Specific Date</div>
        <div>
          <Switch />
        </div>
      </div>
      <div>
        <input type="date" className="m-2 w-48 border-b-2 border-black" />
      </div>
      <div className="flex justify-between items-center m-2">
        <div>Show based on specific Time</div>
        <div>
          <Switch />
        </div>
      </div>
      <div>
        <input type="time" className="m-2 w-48 border-b-2 border-black" />
      </div>
    </div>
  );
}

export default Dashboard;
