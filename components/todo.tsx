import { Checkbox, IconButton } from "@material-tailwind/react";

export default function Todo() {
    return (
        <div>
            <Checkbox />
            <p>New Todo</p>
            <IconButton><i className="fas fa-pen" /></IconButton>
            <IconButton><i className="fas fa-trash" /></IconButton>
        </div>
    )
}