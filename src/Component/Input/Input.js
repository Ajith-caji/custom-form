import { useEffect, useState } from "react"
import TextField from "@mui/material/TextField"
// import "./styles.css"

export default function Input() {
  const [inputList, setInputList] = useState([
    {
      input: "",
      textarea: "",
      input_rank: null
    }
  ])

  const [isDisabled, setIsDisabled] = useState(true) // Default to true
  const [showSaveButton, setShowSaveButton] = useState(false) // To control Save choices button

  useEffect(() => {
    const lastInput = inputList[inputList.length - 1]?.input
    const lastTextarea = inputList[inputList.length - 1]?.textarea

    // Disable "Add choice" button if the last input or textarea is empty
    setIsDisabled(lastInput === "" || lastTextarea === "")

    // Show "Save choices" button if there's more than one input and the last input & textarea are not empty
    setShowSaveButton(
      inputList.length > 1 && lastInput !== "" && lastTextarea !== ""
    )
  }, [inputList])

  const handleListAdd = () => {
    setInputList([
      ...inputList,
      {
        input: "",
        textarea: "",
        input_rank: null
      }
    ])
  }

  const handleInputChange = (event, index) => {
    const { name, value } = event.target
    const newInputList = [...inputList]
    newInputList[index][name] = value
    newInputList[index].input_rank = index + 1
    setInputList(newInputList)
  }

  const handleRemoveItem = (index) => {
    const newList = [...inputList]
    newList.splice(index, 1)
    setInputList(newList)
  }

  const handleSaveChoices = () => {
    console.log("Choices saved:", inputList)
  }

  return (
    <div className="App">
      <h1>Simple Example of Input Fields with Textarea</h1>

      {inputList.length > 0
        ? inputList.map((input, index) => (
            <div key={index} style={inputStyles}>
              <button>{index + 1}</button>
              <TextField
                id="outlined-basic"
                label={`Input ${index + 1}`}
                variant="outlined"
                onChange={(event) => handleInputChange(event, index)}
                value={input.input}
                name="input"
              />
              <textarea
                style={textareaStyle}
                placeholder={`Textarea ${index + 1}`}
                onChange={(event) => handleInputChange(event, index)}
                value={input.textarea}
                name="textarea"
              />
              <button style={btnStyle} onClick={() => handleRemoveItem(index)}>
                <span role="img" aria-label="x emoji">
                  ❌
                </span>
              </button>
            </div>
          ))
        : "No item in the list "}
      <button style={btnStyle} onClick={handleListAdd} disabled={isDisabled}>
        Add choice
      </button>

      {showSaveButton && (
        <button style={btnStyle} onClick={handleSaveChoices}>
          Save choices
        </button>
      )}
    </div>
  )
}

const btnStyle = {
  padding: "0.6rem",
  cursor: "pointer",
  marginTop: "1rem"
}

const inputStyles = {
  marginTop: "1rem"
}

const textareaStyle = {
  display: "block",
  width: "100%",
  marginTop: "0.5rem",
  padding: "0.5rem"
}
