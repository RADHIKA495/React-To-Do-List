import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Create from "@mui/icons-material/Create";
import { IconButton } from "@mui/material";


export default function ToDoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem sx={{ justifyContent: "center" }}>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Add Todo" variant="outlined" onChange={handleChange} value={text}
                    InputProps={{
                        endAdornment: (
                            < InputAdornment position="end" >
                                <IconButton
                                    aria-label="Create ToDo" edge="end" type="submit"
                                >
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ListItem >
    )
}
